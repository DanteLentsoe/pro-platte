import React, { FC, ChangeEvent } from "react";

interface InputProps {
  /**
   * The label text for the input field.
   */
  label: string;

  /**
   * The name of the input field, which can be used for form handling.
   */
  name: string;

  /**
   * The type of the input field.
   */
  type?: "text" | "email" | "password" | "textarea";

  /**
   * The current value of the input field.
   */
  value: string;

  /**
   * The function to call when the input field changes.
   */
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  /**
   * The ID for the input field, which is used for the label's 'htmlFor' attribute.
   */
  id?: string;

  /**
   * Whether the input field is required.
   */
  required?: boolean;

  /**
   * The placeholder text for the input field.
   */
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  id,
  required,
  placeholder
}) => (
  <div>
    <div className="flex items-center justify-between">
      <label
        htmlFor={id || name}
        className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
    </div>
    <div className="mt-2">
      {type === "textarea" ? (
        <textarea
          id={id || name}
          name={name}
          required={required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id || name}
          name={name}
          type={type}
          autoComplete={type}
          required={required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  </div>
);
