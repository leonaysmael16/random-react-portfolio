import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto fles px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Leona Jeanne S. Ysmael 
                        <br class="hidden lg:inline-block" />
                        I am Web Developer who knows alot of languages
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        My name is Leona Ysmael and I am Seattle-based Web Developer. I am recent graduate of the University of Washington
                        Coding Bootcamp and I have a prior education in Software Engineering in the Seattle Central College. I am currently 
                        fluent HTML, CSS, JavaScript, Node, JQuery, MySQL, Express, React, MongoDB, Python, and currently learning other languages.
                    </p>
                    <div class="flex justify-center">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}