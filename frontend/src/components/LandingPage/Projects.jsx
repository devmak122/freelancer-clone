import React from 'react';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            src: "https://image.freepik.com/free-psd/hiking-concept-web-template_23-2148467097.jpg",
            title: "Website Development",
            price: "From $300 USD"
        },
        {
            src: "https://image.freepik.com/free-photo/image-creative-graphic-designer-working-color-selection-drawing-graphics-tablet_28283-898.jpg",
            title: "Graphic Design",
            price: "From $300 USD"
        },
        {
            src: "https://image.freepik.com/free-vector/lovely-floral-ornamental-logos-collection-design-set_1017-25867.jpg",
            title: "Logo Design",
            price: "From $50 USD"
        },
        {
            src: "https://image.freepik.com/free-photo/marketing-strategy-connting-digital-devices-concept_53876-23053.jpg",
            title: "Marketing",
            price: "From $150 USD"
        },
        {
            src: "https://image.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg",
            title: "Writing",
            price: "From $50 USD"
        },
        {
            src: "https://image.freepik.com/free-vector/goals-habits-tracking-app-collection_23-2148669655.jpg",
            title: "Mobile App",
            price: "From $50 USD/ hour"
        }
    ];

    return (
        <div className="bg-red-50 py-6 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h3 className="font-bold text-3xl leading-10 mb-7">
                    Crowd favorites <br />
                    Here are some of our most popular projects:
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        src={project.src}
                        title={project.title}
                        price={project.price}
                    />
                ))}
            </div>
            <div className="text-center mt-10">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-bold shadow-md transition duration-300">
                    See More
                </button>
            </div>
        </div>
    );
}

export default Projects;
