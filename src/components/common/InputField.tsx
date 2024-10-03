import { ErrorMessage, useField } from "formik";
import React from "react";

interface InputFieldProps {
    label: string;
    name: string;
    placeholder?: string;
    type: string;
    isTextArea?: boolean;
    rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, isTextArea = false, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <div className='mt-4'>
                <label
                    htmlFor={field.name}
                    className='capitalize font-medium text-white opacity-85'
                >
                    {label}
                </label>
                {!isTextArea ?
                    <input
                        {...field}
                        {...props}
                        className={`px-3 py-2 mt-1 bg-transparent text-white placeholder:text-gray-400 border border-gray-300 outline-none rounded-lg focus:border-rose-500 w-full ${meta.touched && meta.error && "border border-red-500"}`}
                    /> :
                    <textarea
                        rows={props.rows}
                        {...field}
                        {...props}
                        className={`px-3 py-2 mt-1 bg-transparent text-white placeholder:text-gray-400 border border-gray-300 outline-none rounded-lg focus:border-rose-500 w-full ${meta.touched && meta.error && "border border-red-500"}`}
                    />}
                <ErrorMessage component={'div'} name={field.name} className="text-red-600 text-[12px] sm:text-sm" />
            </div>
        </>
    )
}
export default InputField