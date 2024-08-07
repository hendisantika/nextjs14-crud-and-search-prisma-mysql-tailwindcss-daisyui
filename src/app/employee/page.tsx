import Link from "next/link";
import TableData from "@/components/tabledata";
import {Suspense} from "react";
import {Spinner} from "@/components/spinner";
import Search from "@/components/search";

const Home = async ({
                        searchParams,
                    }: {
    searchParams?: {
        query?: string;
    };
}) => {
    const query = searchParams?.query || "";
    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <div className="flex items-center justify-between gap-1 mb-5">
                <h1 className="text-4xl font-bold">Next.js 14 CRUD and Search with Prisma Mysql | TailwindCSS
                    DaisyUI</h1>
            </div>
            <div className="overflow-x-auto">
                <div className="mb-2 w-full text-right">
                    <Link
                        href="/employee/create"
                        className="btn btn-primary">
                        Create
                    </Link>
                </div>
                <Search/>
                <Suspense key={query} fallback={<Spinner/>}>
                    <TableData query={query}/>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;
