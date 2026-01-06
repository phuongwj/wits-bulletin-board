import { useNavigate } from 'react-router';


import logo from "../assets/WITSLogo.png"

export default function About() {
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
                        Who We Are
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
                                onClick={() => navigate("/contact")}
                                className="text-black hover:text-emerald-500 transition duration-200 cursor-pointer"
                            >
                                Contact Us
                            </button>
                        </div>
                        
                    </div>
                </div>

                {/* Main */}
                <div className="flex gap-4 p-4 text-black">
                    {/* left side */}
                    <div className="flex flex-col items-center gap-5 relative">
                        {/* who we are */}
                        <div className="bg-[#E0CEF3] p-6 space-y-6 w-150 h-60 text-xl"
                        style={{
                            transform: 'rotate(-1deg)',
                            boxShadow: 'var(--shadow-note)',
                        }}>
                            <div className="tape"></div>
                            <p>
                                We are a community of creatively-driven people dedicated toward the common goal of supporting 
                                female-identifying and non-binary students in achieving success in STEM fields. 
                            </p>
                            <p>
                                Through networking, learning and advocacy, we aim to create a more inclusive and equitable place for all!
                            </p>
                        </div>
                        
                        {/* Weekly lounges */}
                        <div className=" flex flex-col items-center p-6 space-y-6 w-150 h-60">
                            <div className="bg-[#E0CEF3] w-full h-fit p-4 text-xl text-center"
                            style={{
                                transform: 'rotate(0deg)',
                                boxShadow: 'var(--shadow-note)',
                            }}>
                                <div className="tape"></div>
                                <h2 className="font-bold">Weekly Lounges</h2>
                            </div>
                            
                            {/* where + when */}
                            <div className="flex flex-row w-full items-center justify-between gap-10">
                               {/* where */}
                                <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl text-nowrap"
                                style={{
                                    transform: 'rotate(-4deg)',
                                    boxShadow: 'var(--shadow-note)',
                                }}>
                                    <div className="pin"></div>
                                    <h2 className="font-bold">Where:</h2>
                                    <p>Goldberg Computer Science Building</p>
                                    <p> Room 430 <i>(Solonim)</i></p>
                                </div>
                                {/* when */}
                                <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                style={{
                                    transform: 'rotate(4deg)',
                                    boxShadow: 'var(--shadow-note)',
                                }}>
                                    <div className="tape"></div>
                                    <h2 className="font-bold">When:</h2>
                                    <p>Wednesdays, 6:30-7:30 pm</p>
                                </div>

                            </div>
                        
                            {/* what */}
                            <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl text-nowrap"
                            style={{
                                transform: 'rotate(0deg)',
                                boxShadow: 'var(--shadow-note)',
                            }}>
                                <div className="pin"></div>
                                <h2 className="font-bold">What:</h2>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Workshops</li>
                                    <li>Panel discussions</li>
                                    <li>Networking</li>
                                    <li>Social Events</li>
                                </ul>
                            </div>
                        
                        </div>

                        {/* Get involved */}
                        <div className="flex flex-col items-center p-6 space-y-6 w-150 h-60 mt-10">
                            <div className="bg-[#E0CEF3] w-full h-fit p-4 text-xl text-center"
                            style={{
                                transform: 'rotate(0deg)',
                                boxShadow: 'var(--shadow-note)',
                            }}>
                                <div className="tape"></div>
                                <h2 className="font-bold">Get involved</h2>
                            </div>
                            
                            {/* How to get involved */}
                            <div className="flex flex-row w-full items-center justify-between gap-10 text-center">
                               {/* Volunteer */}
                                <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                style={{
                                    transform: 'rotate(-4deg)',
                                    boxShadow: 'var(--shadow-note)',
                                }}>
                                    <div className="pin"></div>
                                    <h2 className="font-bold">Volunteer</h2>
                                    <p>
                                        There are plenty of opportunities throughout the school year to volunteer with us! 
                                        Perfect for adding to your resume. Just ask to be apart of our volunteer pool!
                                    </p>
                                </div>

                                {/* Join Teams */}
                                <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                style={{
                                    transform: 'rotate(-4deg)',
                                    boxShadow: 'var(--shadow-note)',
                                }}>
                                    <div className="pin"></div>
                                    <h2 className="font-bold">Join Teams</h2>
                                    <p>
                                        Our Teams Channel is the perfect way to be notified of any volunteer opportunities, 
                                        events and receive any resources that are shared with the group.
                                    </p>
                                </div>

                                {/* Participate */}
                                <div className="bg-[#E0CEF3] w-fit h-fit p-4 text-xl"
                                style={{
                                    transform: 'rotate(-4deg)',
                                    boxShadow: 'var(--shadow-note)',
                                }}>
                                    <div className="pin"></div>
                                    <h2 className="font-bold">Participate</h2>
                                    <p>
                                       Attend as many events as you can! They will be posted on our socials or Teams. 
                                        Some events may have raffle draws, some prizes are dependent on event attendance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                   
                    
                    {/* Goals */}
                    <div className="flex flex-col items-center gap-5 text-black text-center">
                        <div className="bg-[#E0CEF3] p-6 space-y-6 w-50 h-50"
                            style={{
                                transform: 'rotate(-2deg)',
                                boxShadow: 'var(--shadow-note)',
                            }}>
                            <div className="pin"></div>
                            <h3 className="font-bold">Equity</h3>
                            <p>Promote equality of gender, race, and culture within STEM fields</p>
                            
                        </div>
                        <div className="bg-[#E0CEF3] p-6 space-y-6 w-50 h-45"
                            style={{
                                transform: 'rotate(1deg)',
                                boxShadow: 'var(--shadow-note)',
                            }}>
                            <div className="pin"></div>
                            <h3 className="font-bold">Learning</h3>
                            <p>Introduce technology-related programs to the community</p>
                            
                        </div>
                        <div className="bg-[#E0CEF3] p-6 space-y-6 w-50 h-65"
                            style={{
                                transform: 'rotate(-1deg)',
                                boxShadow: 'var(--shadow-note)',
                            }}>
                            <div className="pin"></div>
                            <h3 className="font-bold">Engagement</h3>
                            <p>Support, promote, and celebrate the accomplishments of female-identifying and non-binary technology students</p>
                            
                        </div>
                    </div>
                </div>

              
          

            </div>
        </>
       
    )
}