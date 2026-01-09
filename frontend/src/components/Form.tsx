import { useState } from 'react';

interface FormProps {
    onSave: (name: string, bio: string) => void | Promise<void>;
};

const Form = ({ onSave }: FormProps) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSave = async () => {
    await onSave(name, bio);
  }

  return (
    <div 
        className="bg-[#E0CEF3] p-6 space-y-6 w-100 h-130"
        style={{
              transform: 'rotate(-1deg)',
              boxShadow: 'var(--shadow-note)',
        }}
    >   
        
        <div className="tape"/>

        {/* Name */}
        <div className="space-y-2">
            <label className="flex flex-col gap-2 text-black text-lg font-bold">Your Name</label>
            <input 
                name="name" 
                className="bg-white text-black w-full p-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What should we call you?"
            />
        </div>

        {/* Bio */}
        <div className="space-y-2">
            <label className="flex flex-col gap-2 text-black text-lg font-bold">Your Bio</label>
            <textarea 
                name="bio" 
                className="bg-white text-black w-full p-3"
                value={bio}
                rows={4}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us something interesting about yourself..."
            />
        </div>

        <button 
            onClick={handleSave}
            className={`
                w-full py-2
                ${name.trim() ? 'bg-[#EBC96D] text-black' : 'bg-[#EBC96D]/50 text-black/50'}
            `}
            disabled={!name.trim()}
        >
            Pin to Board 📌
        </button>
    </div>
  )
}

export default Form;