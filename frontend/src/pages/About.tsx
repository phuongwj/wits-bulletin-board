import { useNavigate } from 'react-router';

import logo from "../assets/WITSLogo.png"
import { ArrowLeft } from 'lucide-react';
import { SquareMenu } from 'lucide-react';


export default function About() {
    let navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col w-[80vw] mx-auto">

                {/* Header */}
                <div className="flex flex-row items-center justify-between mb-10 w-full">
                    <button 
                        className="inline-flex items-center gap-2 w-fit h-fit text-lg text-white/50 hover:text-white transition duration-200 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <ArrowLeft className="h-5 w-5"/>
                        Back to board
                    </button>
                    <div
                        className="bg-[#FFFFFF] px-6 py-3"
                        style={{
                        boxShadow: 'var(--shadow-note)',
                        }}
                    >
                        <img src={logo} 
                            style={{width: "200px"}}></img>
                    </div>

                    <button 
                        className="inline-flex items-center gap-2 w-fit h-fit text-lg text-white/50 hover:text-white transition duration-200 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <SquareMenu className="h-8 w-8"/>
                    </button>
                        
                </div>

                <div className="flex gap-4 p-4 justify-end text-black">
                    <div
                        className="bg-[#FFF0B3] px-6 py-3 left-0"
                        style={{
                            transform: 'rotate(-1deg)',
                            boxShadow: 'var(--shadow-note)',
                        }}
                    >
                        <p className="text-[#38332E] text-3xl">
                        Who We Are
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between gap-4 p-4 text-black">
                    <div
                    className="bg-teal-100 p-4 max-w-80"
                    style={{
                        transform: 'rotate(1deg)',
                        boxShadow: 'var(--shadow-note),'
                    }}
                    >
                        <h2 className="font-bold">About the Society</h2>
                        <p>
                            We are a community of creatively-driven people dedicated toward the common goal of supporting 
                            female-identifying and non-binary students in achieving success in STEM fields. 
                        </p>
                    </div> 

                    <div
                    className="bg-teal-100 p-4 max-w-80"
                    style={{
                        transform: 'rotate(1deg)',
                        boxShadow: 'var(--shadow-note),'
                    }}
                    >
                        <h2 className="font-bold">Goals</h2>
                        <p>
                            
                        </p>
                    </div> 

                    <div
                    className="bg-teal-100 p-4 max-w-80"
                    style={{
                        transform: 'rotate(1deg)',
                        boxShadow: 'var(--shadow-note),'
                    }}
                    >
                        <h2 className="font-bold">Get Involved</h2>
                        <p></p>
                    </div> 

                    <div
                    className="bg-teal-100 p-4 max-w-80"
                    style={{
                        transform: 'rotate(1deg)',
                        boxShadow: 'var(--shadow-note),'
                    }}
                    >
                        <h2 className="font-bold">Weekly Lounges</h2>
                        <p></p>
                    </div> 
                </div>
            </div>
        </>
       
    )
}