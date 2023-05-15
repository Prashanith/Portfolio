/* eslint-disable @typescript-eslint/no-non-null-assertion */
import SkillCard, { Skill } from "./skillCard";

const skills: Skill[] = [
  { skill: "Firebase", logo: "/firebase.svg" },
  { skill: "Flutter", logo: "/flutter.png" },
  { skill: "MERN", logo: "/mern.png" },
  { skill: "Tailwind", logo: "/tailwind.png" },
];

function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col items-start md:items-center justify-start py-28 pagePadding"
    >
      <p className="boldText uppercase">What I'm Skilled At</p>

      <div
        id="skillsCard"
        className="mt-8 p-4 space-x-4
        carousel carousel-center carousel-horizontal 
        bg-neutral rounded-box max-w-fit w-[calc(100vw-5rem)]"
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
