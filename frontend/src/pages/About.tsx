import { useNavigate } from 'react-router';

export default function About() {
    let navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center">
                <div>
                    <img src="" alt="WiTS Logo"></img>
                    <button 
                        onClick={() => navigate("/")}
                        className="hover:text-emerald-500 transition duration-200 cursor-pointer"
                    >
                        Click here to go to BulletinBoard Board
                    </button>
                </div>
                
                <div >
                    <h1>About WiTS</h1>
                    <p>
                        We are a community of creatively-driven people dedicated toward the common goal of supporting 
                        female-identifying and non-binary students in achieving success in STEM fields. 
                    </p>
                    <p>
                        Through networking, learning and advocacy, we aim to create a more inclusive and equitable place for all!
                    </p>
                </div>
                <div>
                    <h2>Our Goals</h2>
                    <h3>Equity</h3>
                    <p>Promote equality of gender, race, and culture within STEM fields</p>
                    <h3>Learning</h3>
                    <p>Introduce technology-related programs to the community</p>
                    <h3>Engagement</h3>
                    <p>Support, promote, and celebrate the accomplishments of female-identifying and non-binary technology students</p>

                </div>
                <div>
                    <h2>Weekly Lounges</h2>
                    <ul className="list-inside">
                        <li>Where: Goldberg Computer Science Building, Room 430 (Solonim)</li>
                        <li>When: 6:30 PM Wednesdays</li>
                        <li>What: 
                            <ul className="list-disc list-inside ml-4">
                                <li>Workshops</li>
                                <li>Panel discussions</li>
                                <li>Networking</li>
                                <li>Social Events</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Get Involved!</h2>
                    <h4>Volunteer</h4>
                    <p>
                        There are plenty of opportunities throughout the school year to volunteer with us! 
                        Perfect for adding to your resume. Just ask to be apart of our volunteer pool!
                    </p>
                    <h4>Join Teams</h4>
                    <p>
                        Our Teams Channel is the perfect way to be notified of any volunteer opportunities, 
                        events and receive any resources that are shared with the group.
                    </p>
                    <h4>Participate</h4>
                    <p>
                        Attend as many events as you can! They will be posted on our socials or Teams. 
                        Some events may have raffle draws, some prizes are dependent on event attendance.
                    </p>
                </div>
                
            </div>
        </>
       
    )
}