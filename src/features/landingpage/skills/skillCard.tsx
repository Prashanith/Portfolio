
interface Skill {
  skill: string;
  logo: string;
}

function SkillCard({ skill, logo }: Skill) {
  return (
    <div className=" relative carousel-item flex flex-col items-center justify-center h-40 w-32 md:h-60 md:w-48 shadow-xl p-8 bg-secondary rounded-lg">
      <img src={logo} alt="image" className="grow rounded-xl object-contain" />
      <div className="text-center mt-4">
        <h2 className="font-bold uppercase text-xl text-teal-100">{skill}</h2>
      </div>
    </div>
  );
}

export default SkillCard;

export type { Skill };
