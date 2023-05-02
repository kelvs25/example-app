import Card from "@/Components/Card";
import Pageheader from "@/Components/Pageheader";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
    CursorArrowRaysIcon,
    EnvelopeOpenIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

const stats = [
    { name: "Card One", stat: "Active" },
    { name: "Card Two", stat: "Active" },
    { name: "Card Three", stat: "Inactive" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout>
            <Pageheader value="Dashboard" />
            <h3 className="text-base font-semibold leading-6 text-gray-900">
                Last 30 days
            </h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <Card
                        key={item.name}
                        className="overflow-hidden  bg-white px-4 py-5 sm:p-6"
                    >
                        <dt className="truncate text-sm font-medium text-gray-500">
                            {item.name}
                        </dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
                            {item.stat}
                        </dd>
                    </Card>
                ))}
            </dl>

            <Card>
                <Table
                    title="Users"
                    value="A list of all the users under your account including Name, Title, Email, and role."
                />
            </Card>
        </AuthenticatedLayout>
    );
}
