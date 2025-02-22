import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {}

export default function IconButton({ className, ...props }: IconButtonProps) {
    return (
        <button 
            className={twMerge("bg-gray-500 text-blue hover:bg-blue hover:text-gray-900 transition-colors duration-300 p-1.5 h-8 w-8 rounded-md flex items-center cursor-pointer", className)}
            {...props}
        />
    );
}