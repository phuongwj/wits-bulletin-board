import image from '../assets/react.svg';
export default function CreatePortraitCard() {
    return (
        <>
        <div className="mx-auto flex max-w-md items-center
            gap-x-4 bg-white p-6 shadow-lg outline outline-black/5 
            dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img src={image} className="w-32 h-48"></img>
            <div className="text-xl font-medium text-black dark:text-white max-w-sm wrap-anywhere">
                <h2 className="font-bold">Name</h2>
                <p className="text-wrap">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero.
                </p>
            </div>
        </div>
        </>
    );
}