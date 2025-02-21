import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {}

export default function IconButton(props: IconButtonProps) {
    return (
        <button 
            className="bg-gray-500 text-blue hover:bg-blue hover:text-gray-900 transition-colors duration-300 p-1.5 h-8 w-8 rounded-md flex items-center cursor-pointer"
            {...props}
        />
    );
}