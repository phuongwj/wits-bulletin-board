import { useNavigate } from 'react-router';
import logo from "../assets/WITSLogo.png"

export default function Contact() {
    let navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center">

                {/* Header */}
                <div className="flex flex-row w-full items-center justify-between mb-10">
                    <div
                        className="bg-[#FFFFFF] px-6 py-3"
                        style={{
                        transform: 'rotate(1deg)',
                        boxShadow: 'var(--shadow-note)',
                        }}
                    >
                        <div className="pin"></div>
                        <img src={logo} 
                            style={{width: "200px"}}></img>
                    </div>

                    <div
                        className="bg-[#FFF0B3] px-6 py-3"
                        style={{
                        boxShadow: 'var(--shadow-note)',
                        }}
                    >
                        <p className="text-[#38332E] text-3xl">
                        Contact Us
                        </p>
                    </div>

                    <div
                        className="bg-[#FFFFFF] px-6 py-3"
                        style={{
                        transform: 'rotate(-2deg)',
                        boxShadow: 'var(--shadow-note)',
                        }}
                    >
                        <div className="tape"></div>
                        <div className="flex flex-col items-center">
                            <button 
                                onClick={() => navigate("/")}
                                className="text-black hover:text-emerald-500 transition duration-200 cursor-pointer"
                            >
                                Bulletin Board
                            </button>
                            <button 
                                onClick={() => navigate("/create")}
                                className="text-black hover:text-emerald-500 transition duration-200 cursor-pointer"
                            >
                                Create Portrait
                            </button>
                            <button 
                                onClick={() => navigate("/about")}
                                className="text-black hover:text-emerald-500 transition duration-200 cursor-pointer"
                            >
                                About Us
                            </button>
                        </div>
                        
                    </div>
                </div>

                {/* Main */}
                <div className="flex gap-4 p-4 text-black">
            
                       <div className="flex flex-col gap-8 mt-10 items-center w-full">
                                <div className="flex flex-row w-full items-center justify-between text-center">
                                    {/* Website */}
                                    <div className="bg-[#E0CEF3] w- h-fit p-4 text-xl"
                                    style={{
                                        transform: 'rotate(-4deg)',
                                        boxShadow: 'var(--shadow-note)',
                                    }}>
                                        <div className="pin"></div>
                                        <h2 className="font-bold">Our Website</h2>
                                    
                                    </div>

                                    {/* Join Teams */}
                                    <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                    style={{
                                        transform: 'rotate(-4deg)',
                                        boxShadow: 'var(--shadow-note)',
                                    }}>
                                        <div className="pin"></div>
                                        <h2 className="font-bold">Join Teams</h2>
                                        
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                    style={{
                                        transform: 'rotate(-4deg)',
                                        boxShadow: 'var(--shadow-note)',
                                    }}>
                                        <div className="pin"></div>
                                        <h2 className="font-bold">LinkedIn</h2>
                                       
                                    </div>
                                </div>
                                 <div className="flex flex-row w-full items-center justify-between gap-10 text-center text-nowrap">
                                    {/* Email Us */}
                                    <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                    style={{
                                        transform: 'rotate(-4deg)',
                                        boxShadow: 'var(--shadow-note)',
                                    }}>
                                        <div className="pin"></div>
                                        <h2 className="font-bold">Email Us</h2>
                                    
                                    </div>

                                    {/* Join Teams */}
                                    <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                    style={{
                                        transform: 'rotate(-4deg)',
                                        boxShadow: 'var(--shadow-note)',
                                    }}>
                                        <div className="pin"></div>
                                        <h2 className="font-bold">Join Teams</h2>
                                        
                                    </div>

                                    {/* Facebook */}
                                    <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                    style={{
                                        transform: 'rotate(-4deg)',
                                        boxShadow: 'var(--shadow-note)',
                                    }}>
                                        <div className="pin"></div>
                                        <h2 className="font-bold">Facebook</h2>
                                        
                                    </div>
                                </div>
                            </div>   
                </div>

            </div>
        </>
       
    )
}