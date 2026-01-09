import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CreatePortrait from './CreatePortrait';
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

  return (
    <div className="flex flex-col">
        Welcome to Bulletin Board (aka main Page)

        <button 
            onClick={() => navigate("/create")}
            className="hover:text-emerald-500 transition duration-200 cursor-pointer"
        >
            Click here to go to CreatePortrait Page
        </button>

        <div className="grid">
        {pins.map((pin) => (
          <div key={pin.id}>
            <img src={pin.image_url} alt={pin.name} />
            <h3>{pin.name}</h3>
            <p>{pin.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
