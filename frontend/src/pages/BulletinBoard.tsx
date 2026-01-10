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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPins = async () => {
      const { data, error } = await supabase
        .from("pins")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading pins", error);
        setLoading(false);
        return;
      }
      setPins(data ?? []);
      setLoading(false);
    };

    loadPins();
  }, []);

  // Show loading state
  if (loading) {
    return <div className="min-h-screen bg-[#2A2826]"></div>;
  }

  // Style variations for scattered bulletin board look
  // Notes will wrap naturally but maintain their size
  const styles = [
    { rotation: -4, color: '#FFF0B3', attachment: 'pin', offsetX: 20, offsetY: -10 },
    { rotation: 2, color: '#B3E5FC', attachment: 'pin', offsetX: -15, offsetY: 15 },
    { rotation: -2, color: '#F8BBD0', attachment: 'pin', offsetX: 25, offsetY: -5 },
    { rotation: 5, color: '#C8E6C9', attachment: 'tape', offsetX: -20, offsetY: 20 },
    { rotation: -3, color: '#E1BEE7', attachment: 'tape', offsetX: 30, offsetY: 10 },
    { rotation: 1, color: '#FFCCBC', attachment: 'pin', offsetX: -10, offsetY: -15 },
    { rotation: -4, color: '#C8E6C9', attachment: 'tape', offsetX: 15, offsetY: 25 },
    { rotation: 3, color: '#FFF0B3', attachment: 'pin', offsetX: -25, offsetY: 5 },
    { rotation: -2, color: '#B3E5FC', attachment: 'tape', offsetX: 20, offsetY: -20 },
    { rotation: 2, color: '#F8BBD0', attachment: 'pin', offsetX: -5, offsetY: 15 },
    { rotation: -1, color: '#E1BEE7', attachment: 'tape', offsetX: 10, offsetY: -10 },
    { rotation: 4, color: '#FFCCBC', attachment: 'pin', offsetX: -30, offsetY: 20 },
  ];

  return (
    <div className="min-h-screen bg-[#2A2826] p-8">
      {/* Title */}
      <div
        className="inline-block mb-12 px-6 py-3 bg-[#FFF0B3]"
        style={{
          transform: 'rotate(-1deg)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h1 className="text-3xl text-[#38332E]">
          Our Bulletin Board 🐝
        </h1>
      </div>

      {/* Pins container with flex wrapping */}
      <div className="flex flex-wrap gap-12 justify-start items-start">
        {pins.map((pin, index) => {
          const style = styles[index % styles.length];

          return (
            <div
              key={pin.id}
              className="relative p-4 group cursor-pointer transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: style.color,
                transform: `rotate(${style.rotation}deg) translate(${style.offsetX}px, ${style.offsetY}px)`,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                minWidth: '248px', // 200px image + padding
                width: 'fit-content',
              }}
            >
              {/* Pin or Tape at top */}
              <div className={style.attachment}></div>

              {/* Bio Tooltip */}
              {pin.bio && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#38332E] text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity w-72 z-10 whitespace-normal">
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

        {/* "Add Yourself" card */}
        <div
          className="relative bg-transparent hover:bg-[#38332E] border-2 border-dashed border-[#645F59] hover:border-[#EDC95E] p-4 cursor-pointer hover:scale-105 transition-all duration-200 group"
          style={{
            transform: 'rotate(-3deg) translate(-15px, 30px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            minWidth: '248px',
            width: 'fit-content',
          }}
          onClick={() => navigate("/create")}
        >
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#38332E] text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
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
