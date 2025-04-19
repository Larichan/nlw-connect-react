import Image from "next/image";

import logo from "../../assets/logo.svg";
import EventList from "./event-list";

export default async function HomePage() {

    return (
        <div
            className="min-h-dvh flex flex-col justify-center items-center gap-16"
        >
            <div
                className="flex flex-col gap-8 w-full max-w-[550px] items-center md:items-start">
                <Image src={logo} alt='devCoder' width={108.5} height={30} />
                <h1 className='text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-center'>
                    <span className='text-blue'>Event</span>
                    Coder {new Date().getFullYear()}
                </h1>
            </div>

            <EventList />
        </div>
    )
}