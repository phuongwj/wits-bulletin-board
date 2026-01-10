import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../supabase';

type Pin = {
  id: string,
  name: string,
  bio: string,
  image_url: string,
  created_at: string
}

export default function BulletinBoard() {
  let navigate = useNavigate();
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    const loadPins = async () => {
      const { data, error } = await supabase
        .from("pins")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading pins", error);
        return;
      }
      setPins(data ?? []);
    };

    loadPins();
  }, []);

  const colors = [
    '#FFF0B3', // yellow
    '#B3E5FC', // blue
    '#F8BBD0', // pink
    '#C8E6C9', // green
    '#E1BEE7', // purple
    '#FFCCBC', // orange
  ];

  const getRandomColor = (index: number) => colors[index % colors.length];
  const getRandomRotation = (index: number) => {
    const rotations = [1, -1, 2, -2, 0.5, -0.5];
    return rotations[index % rotations.length];
  };
  const getRandomAttachment = (index: number) => {
    // Alternates between 'pin' and 'tape' based on index
    return index % 2 === 0 ? 'pin' : 'tape';
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div
        className="bg-[#FFF0B3] px-6 py-3 w-fit mb-12"
        style={{
          transform: 'rotate(-1deg)',
          boxShadow: 'var(--shadow-note)',
        }}
      >
        <p className="text-[#38332E] text-3xl">
          Our Amazing Team 🐝
        </p>
      </div>

      {/* Pins Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pins.map((pin, index) => {
          const attachment = getRandomAttachment(index);
          return (
            <div
              key={pin.id}
              className="relative p-4 w-fit group cursor-pointer transition-shadow hover:shadow-2xl"
              style={{
                backgroundColor: getRandomColor(index),
                transform: `rotate(${getRandomRotation(index)}deg)`,
                boxShadow: 'var(--shadow-note)',
              }}
            >
              {/* Pin or Tape at top */}
              <div className={attachment}></div>

              {/* Bio Tooltip */}
              {pin.bio && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#38332E] text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity w-44 z-10 whitespace-normal">
                  {pin.bio}
                </div>
              )}

              {/* Portrait Image */}
              <div className="bg-white p-4 mb-3">
                <img
                  src={pin.image_url}
                  alt={pin.name}
                  className="w-50 h-50 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-[#38332E] text-xl font-medium text-center">
                {pin.name}
              </h3>
            </div>
          );
        })}

        {/* Add Yourself Card */}
        <div
          className="bg-transparent hover:bg-[#38332E] border-2 border-dashed border-[#645F59] hover:border-[#EDC95E] relative p-4 w-fit cursor-pointer hover:scale-105 transition transitional-all duration-200 group"
          style={{
            transform: 'rotate(1deg)',
            boxShadow: 'var(--shadow-note)',
          }}
          onClick={() => navigate("/create")}
        >
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#38332E] text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Create your own portrait!
          </div>

          <div className="bg-transparent p-2 mb-3 flex items-center justify-center w-50 h-50 border-2 border-dashed border-[#645F59] rounded-full">
            <div className="text-center text-[#645F59]">
              <div className="text-6xl">+</div>
            </div>
          </div>
          <p className="text-[#645F59] text-sm text-center">Add yourself</p>
        </div>
      </div>
    </div>
  );
}
