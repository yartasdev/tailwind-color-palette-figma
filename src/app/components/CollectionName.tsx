import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function CollectionName({ name }) {
  
  const [collectionName] = useState();

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center justify-end border border-b-0 border-borderColor">
      <input
        type="text"
        id={name}
        name={name}
        defaultValue={collectionName}
        className="block w-full min-w-0 flex-1 border-0 py-1.5 pr-10 h-12 bg-bg text-textColor pl-2 placeholder:text-gray-400 focus:outline-none text-xs"
        placeholder="Enter a Collection Name"
        {...register(name, {
          required: {
            value: true,
            message: 'required',
          }
        })}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        {errors[name] ? (
          <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
      </div>
    </div>
  );
}

export default CollectionName;
