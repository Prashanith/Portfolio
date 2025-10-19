/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ProjectCard, { Project } from "./projectCard";

const skills: Project[] = [
  {
    title: "A.R.M.A",
    logo: "/firebase.svg",
    url: "https://arma.vbithyd.ac.in/",
    description: "An Event Management Application",
  },
  {
    title: "Pratibha",
    logo: "/firebase.svg",
    url: "https://pratibha-d4e57.web.app/",
    description: "An Academic Application to manage Assignments Online",
  },
  {
    title: "IServices",
    logo: "/firebase.svg",
    url: "https://www.isservice.in/",
    description: "A Landing Page Website for a Business",
  },
  {
    title: "Relief Riders",
    logo: "/firebase.svg",
    url: "https://github.com/Prashanith/RidersForRelief",
    description: "An Application for NGO to help COVID patients",
  },
  {
    title: "Qwik Chat",
    logo: "/firebase.svg",
    url: "https://github.com/Prashanith/QwikChat",
    description: "A Messaging Application",
  },
];

function Projects() {
  return (
    <div
      id="skills"
      className="pagePadding flex flex-col items-start justify-start py-28 md:items-center"
    >
      <p className="boldText uppercase">Major Contributions</p>

      <div
        id="skillsCard"
        className="carousel-horizontal carousel carousel-center
        rounded-box mt-8 w-[calc(100vw-5rem)] 
        max-w-fit space-x-4 bg-transparent p-4"
      >
        {skills.map((skill) => {
          return (
            <ProjectCard
              title={skill.title}
              logo={skill.logo}
              key={skill.title}
              url={skill.url}
              description={skill.description}
            />
          );
        })}
        <div className="carousel-item relative my-10 flex aspect-square h-28 flex-col items-center justify-center rounded-lg border-[1pt] border-tertiary /50 p-8 shadow-sm transition-all duration-150 hover:scale-105 hover:shadow-tertiary sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48">
          <span>
            More Projects on{" "}
            <a
              href="https://github.com/Prashanith"
              target="_blank"
              className=" transition hover:text-sky-400"
            >
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="ml-2"> GITHUB</span>
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
