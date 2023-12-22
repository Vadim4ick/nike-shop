"use client";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface SelectProps<T extends string> {
  items: T[];
  defaultValue?: T;
  value?: T;
  onChange: (value: T) => void;
}

export function Select<T extends string>(props: SelectProps<T>) {
  const { defaultValue, items, onChange, value } = props;

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative mt-1 z-20">
        <Listbox.Button className="cursor-pointer relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate font-helvetica font-bold">
            {defaultValue}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {items?.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-5 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-helvetica font-bold" : "font-normal"
                      }`}
                    >
                      {item}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
