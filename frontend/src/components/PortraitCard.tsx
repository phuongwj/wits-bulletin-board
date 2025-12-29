import image from '../assets/react.svg';
export default function CreatePortraitCard() {
    return (
        <>
        <div>
            <img src={image}></img>
            <h2>Name</h2>
            <p>Bio</p>
        </div>
        </>
    );
}