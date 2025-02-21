import { Copy, User } from "lucide-react";
import { ComponentProps } from "react";
import IconButton from "./IconButton";

// interface InputProps extends ComponentProps<'input'> {}

// export function Input(props: InputProps) {
//     return (
//         <div
//             data-error={error}
//             className="group bg-gray-800 text-gray-600 border border-gray-600 w-full h-12 px-4 rounded-xl font-semibold flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
//         >
//             <span
//                 className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
//             >
//                 <User />
//             </span>

//             <input 
//                 className="flex-1 bg-transparent outline-0 placeholder:text-gray-400 text-gray-100"
//                 {...props}
//             />

//             {props.readOnly &&
//                 <span
//                     className="text-gray-400 group-focus-within:text-gray-100"
//                 >
//                     <IconButton>
//                         <Copy />
//                     </IconButton>
//                 </span>
//             } 
//         </div>
//     );
// }

interface InputRootProps extends ComponentProps<'div'> {
    error?: boolean;
}

export function InputRoot({error = false, ...props}: InputRootProps) {
    return (
        <div
            data-error={error}
            className="group bg-gray-800 text-gray-600 border border-gray-600 w-full h-12 px-4 rounded-xl font-semibold flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
            {...props}
        />
    );
}

interface InputIconProps extends ComponentProps<'span'> {
    children: React.ReactNode;
}

export function InputIcon(props: InputIconProps) {
    return (
        <span
            className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
            {...props}
        />
    );
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
    return (
        <input 
            className="flex-1 bg-transparent outline-0 placeholder:text-gray-400 text-gray-100"
            {...props}
        />
    );
}