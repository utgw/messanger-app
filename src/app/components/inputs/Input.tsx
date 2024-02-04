'use client';

import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}
const Input = ({ label, id, type, required, register, errors, disabled }: InputProps) => {
  return (
    <div>
      <label className="block text-sm fonr-medium leading-6 text-gray-900" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
            form-input
            block
            w-full
            rounded-md
            py-1.5
            text-gray-900
            ring-1
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus_ring-inset
            focus:ring-skylight-600
            sm:text-sm
            sm:leading-6
          `,
            errors[id] && 'focus:ring-rose-500',
            disabled && 'opacity-50 cursor-default',
          )}
        />
      </div>
    </div>
  );
};

export default Input;
