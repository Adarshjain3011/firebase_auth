"use client"

import Image from "next/image";
import Button from "../common/CTAButton";


interface CardProps {

    image: any;
    heading: string;
    para: string;

}


export default function Card({ image, heading, para }: CardProps) {

    return (

        <div className="bg-dark-blue rounded-lg w-[360px] h-[232px] shadow-xl flex flex-col justify-between items-center border border-gray-600 gap-4">

            <div className="flex justify-between p-3 gap-4">

                <div className="relative w-[120px] h-[120px]">

                    <Image src={image} alt="" className="bg-cover w-full h-full" />

                </div>

                <div className="flex flex-col w-[208px] gap-1">

                    <h1 className="text-white font-bold">{heading}</h1>
                    <p className="text-light-dark text-xs">{para}</p>

                </div>

            </div>

            <div className="flex flex-col justify-end w-full h-full mb-2 px-3">

                <div className="mt-auto ">

                    {/* Place the Button component here */}

                    <Button>Read</Button>

                </div>
            </div>
        </div>
    );
}



