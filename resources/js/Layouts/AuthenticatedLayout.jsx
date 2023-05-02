import React, { Children } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Navbar from "@/Components/Navbar";
import Navbarmobile from "@/Components/Navbarmobile";
import Pageheader from "@/Components/Pageheader";

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AuthenticatedLayout({ children }) {
    return (
        <div className=" bg-gray-50 min-h-full">
            <Disclosure as="nav" className="bg-white shadow-sm">
                {({ open }) => (
                    <>
                        <Navbar
                            user={user}
                            navigation={navigation}
                            userNavigation={userNavigation}
                        />

                        <Disclosure.Panel className="sm:hidden">
                            <Navbarmobile
                                user={user}
                                navigation={navigation}
                                userNavigation={userNavigation}
                            />
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <div className="py-10">
                <Pageheader />
                <main>
                    <div className="space-y-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
