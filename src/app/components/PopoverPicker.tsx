import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Popover } from '@headlessui/react';
import { useFormContext } from 'react-hook-form';

function PopoverPicker({ name }) {
  const [color, setColor] = useState();

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const onColorPickerChange = (value) => {
    setColor(value.hex);
    setValue(name, value.hex);
  };

  const onColorInputChange = (event) => {
    console.log(errors);
    setColor(event.target.value);
  };

  return (
    <div>
      <div className="relative flex rounded-md shadow-sm items-center justify-center w-full">
        <Popover className="relative">
          <Popover.Button
            className="inline-flex items-center border border-borderColor w-4 h-4 text-gray-500 sm:text-sm"
            style={{ backgroundColor: color }}
          ></Popover.Button>
          <Popover.Panel className="absolute z-10 -left-[100px] top-12">
            <SketchPicker width="240px" color={color} onChange={onColorPickerChange} /> 
          </Popover.Panel>
        </Popover>
        <input
          type="text"
          id={name}
          name={name}
          maxLength={7}
          minLength={7}
          defaultValue={color}
          className="block w-full min-w-0 flex-1 border-0 py-1.5 pr-10 h-12 bg-bg text-textColor pl-2 placeholder:text-gray-400 focus:outline-none text-xs"
          placeholder="Enter a HEX Code (#FFFFFF)"
          {...register(name, {
            required: {
              value: true,
              message: 'required',
            },
            onChange: (e) => onColorInputChange(e),
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
    </div>
  );
}

export default PopoverPicker;
