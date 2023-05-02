import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";



function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Navbar({ navigation, userNavigation, user }) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
                <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                        <img
                            className="block h-8 w-auto lg:hidden"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <img
                            className="hidden h-8 w-auto lg:block"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current
                                        ? "border-indigo-500 text-gray-900"
                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={user.imageUrl}
                                    alt=""
                                />
                            </Menu.Button>
                        </div>
                     
                    </Menu>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                            />
                        ) : (
                            <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                            />
                        )}
                    </Disclosure.Button>
                </div>
            </div>
        </div>
    );
}
