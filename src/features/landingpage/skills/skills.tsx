/* eslint-disable @typescript-eslint/no-non-null-assertion */
import SkillCard, { Skill } from "./skillCard";

const skills: Skill[] = [
  { skill: "Gemini", logo: "/gemini.png" },
  { skill: "Open AI", logo: "/ai.svg" },
  { skill: "Flutter", logo: "/flutter.png" },
  { skill: "MERN", logo: "/mern.png" },
  { skill: ".NET", logo: "/dotnet.svg" },
  { skill: "Firebase", logo: "/firebase.svg" },
  { skill: "Tailwind", logo: "/tailwind.png" },
];

function Skills() {
  return (
    <div
      id="skills"
      className="pagePadding flex flex-col items-start justify-start py-28 md:items-center"
    >
      <p className="boldText uppercase">What I'm Skilled At</p>

      <div
        id="skillsCard"
        className="carousel-horizontal carousel carousel-center
        rounded-box mt-8 w-[calc(100vw-5rem)] 
        max-w-fit space-x-4 bg-transparent p-4"
      >
        {skills.map((skill) => {
          return (
            <SkillCard
              skill={skill.skill}
              logo={skill.logo}
              key={skill.skill}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
