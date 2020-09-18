import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
            title,
            date,
            place,
            language,
            description,
            projectType,
            link,
            tags
          }`
      )
      .then((data) => setProjectData(data)) // shorthand of above line
      .catch(console.error);
  }, []);

  console.log(projectData);

  function getRandomColor() {
    const colors = [
      "blue",
      "red",
      "green",
      "yellow",
      "orange",
      "teal",
      "purple",
      "indigo",
      "pink",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">My Projects</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h3>

        <div className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <div
                className="relative rounded-lg shadow-xl bg-white p-16"
                key={index}
              >
                {/* top left */}
                <div
                  className={`absolute left-0 top-0 mt-3 ml-3 h-2 w-48 rounded-full bg-${getRandomColor()}-500`}
                ></div>

                {/* top right */}
                <div
                  className={`absolute right-0 top-0 mt-3 mr-3 h-48 w-2 rounded-full bg-${getRandomColor()}-500`}
                ></div>

                {/* bottom left */}
                <div
                  className={`absolute left-0 bottom-0 mb-3 ml-3 h-32 w-2 rounded-full bg-${getRandomColor()}-500`}
                ></div>

                {/* bottom right */}
                <div
                  className={`absolute right-0 bottom-0 mb-3 mr-3 h-2 w-20 rounded-full bg-${getRandomColor()}-500`}
                ></div>

                <h2 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h2>

                <p className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>{" "}
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span className="capitalize">
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                </p>

                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-red-500 font-bold hover:underline hover:text-red-400"
                >
                  View the Project{" "}
                  <span role="img" aria-label="right arrow">
                    👉
                  </span>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
