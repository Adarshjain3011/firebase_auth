"use client"

import React, { useEffect, useRef } from "react";
import { data } from "@/constant/popularTopics";
import Card from "@/components/homepage/Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ArrowButton from "@/components/common/ArrowButton";

import NavBar from "@/components/common/NavBar";

export default function HomePage() {


    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const handleScrollLeft = () => {

        if (scrollContainerRef.current) {

            const container = scrollContainerRef.current;
            container.scrollLeft -= container.clientWidth; 

        }
    };

    const handleScrollRight = () => {

        if (scrollContainerRef.current) {

            const container = scrollContainerRef.current;
            container.scrollLeft += container.clientWidth; 
        }
    };

    useEffect(() => {


        if (scrollContainerRef.current) {

            // Set the scrollLeft property to 0 to start at the leftmost position

            scrollContainerRef.current.scrollLeft = 0;
        }
    }, []); 

    return (

        <div className="min-h-screen w-full bg-dark-blue flex flex-col ">

            <NavBar />

            <div className="relative flex flex-col justify-center mx-auto mt-4">


                <div className="flex flex-col gap-2 w-[1120px]">


                    <div className="flex justify-between overflow-hidden p-3">

                        <h1 className="text-white font-bold">Popular Topics 🔥</h1>

                        <div className="flex justify-center items-center gap-4">

                            {/* Left arrow button */}
                            <ArrowButton icon={FaArrowLeft} onClick={handleScrollLeft} />

                            {/* Right arrow button */}
                            <ArrowButton icon={FaArrowRight} onClick={handleScrollRight} />

                        </div>

                    </div>

                    <div
                        ref={scrollContainerRef}

                        className="flex justify-start gap-4 overflow-x-auto no-scrollbar mt-3"

                        style={{ scrollBehavior: "smooth" }}
                    >
                        {data.map((item, index) => (

                            <Card
                                key={index}
                                image={item.image}
                                heading={item.title}
                                para={item.description}
                            />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}



