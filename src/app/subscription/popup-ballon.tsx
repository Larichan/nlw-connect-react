interface PopupBaloonProps {
    isVisible: boolean;
}

export default function PopupBaloon({  isVisible }: PopupBaloonProps) {
    return (
        <div 
        className={`absolute top-13 right-0 bg-gray-100 p-4 rounded-lg shadow-lg max-w-xs z-10 transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
            <div className="absolute top-[-10px] right-[15px] w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-gray-100"></div>
            <p className="m-0 text-gray-700 font-semibold leading-none text-xs">Link copiado!</p>
        </div>
    )
}