import React from 'react';

import '../styles/ui.css';
import PopoverPicker from './PopoverPicker';
import { FormProvider, useForm } from 'react-hook-form';
import { colors } from './../constants/color.constant';
import CollectionName from './CollectionName';

function App() {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    parent.postMessage({ pluginMessage: { type: 'create_color_variables', data } }, '*');
  });

  return (
    <div className="p-2">
      <div className="inline-block min-w-full align-middle">
        <FormProvider {...methods}>
          <form onSubmit={(e) => e.preventDefault()} noValidate className="m-0">
            <CollectionName name="collection" />
            <table className="min-w-full divide-y divide-borderColor border-borderColor border">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 w-24 text-left text-sm font-semibold text-textColor border-r border-borderColor"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 w-40 text-left text-sm font-semibold text-textColor border-r border-borderColor"
                  >
                    Dark
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 w-40 text-left text-sm font-semibold text-textColor border-r border-borderColor"
                  >
                    Dark Foreground
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 w-40 text-left text-sm font-semibold text-textColor border-r border-borderColor"
                  >
                    Light
                  </th>
                  <th scope="col" className="px-3 py-3.5 w-40 text-left text-sm font-semibold text-textColor">
                    Light Foreground
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderColor bg-bg">
                {colors.map((color) => (
                  <tr key={color}>
                    <td className="whitespace-nowrap px-3 text-sm text-textColor border-r border-borderColor font-medium">
                      {color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()}
                    </td>
                    <td className="whitespace-nowrap pl-3 text-sm border-r border-borderColor">
                      <PopoverPicker name={`${color}-dark`} />
                    </td>
                    <td className="whitespace-nowrap pl-3 text-sm border-r border-borderColor">
                      <PopoverPicker name={`${color}-dark-foreground`} />
                    </td>
                    <td className="whitespace-nowrap pl-3 text-sm border-r border-borderColor">
                      <PopoverPicker name={`${color}-light`} />
                    </td>
                    <td className="whitespace-nowrap pl-3 text-sm">
                      <PopoverPicker name={`${color}-light-foreground`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={onSubmit}
              className="mt-4 w-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Generate Color Variables
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default App;
