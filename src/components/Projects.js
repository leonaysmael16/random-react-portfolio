import { CodeIcon } from "@heroicons/react";
import React from "react";
import { projects } from "../data";

export default function Projects () {
    return (
        <section id="projects" class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-10 mx-auto text-center lg:px-40">
                <CodeIcon class="mx-auto inline-block w-10 mb-4" />
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Projects that I have Built
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    In this section, you will find the projects that I have collaborated 
                    and made during my journey as a Web Developer
                </p>
            </div>
            <div class="flex flex-wrap -m-4">
                
            </div>
        </section>
    )
}