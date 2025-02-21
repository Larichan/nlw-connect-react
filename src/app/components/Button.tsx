import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
    return (
        <button 
            className="bg-gray-500 text-blue hover:bg-blue hover:text-gray-900 transition-colors duration-300 px-5 h-12 w-full rounded-xl flex justify-between items-center font-semibold cursor-pointer"
            {...props}
        />
    );
}