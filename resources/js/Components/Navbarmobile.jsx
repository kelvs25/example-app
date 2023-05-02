import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import React from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Navbarmobile({ navigation, userNavigation, user }) {
    return (
        <>
            <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current
                                ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                            "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                            {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                            {user.email}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </div>
        </>
    );
}
