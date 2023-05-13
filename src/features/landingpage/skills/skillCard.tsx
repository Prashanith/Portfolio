
interface Skill {
  skill: string;
  logo: string;
}

function SkillCard({ skill, logo }: Skill) {
  return (
    <div className=" relative carousel-item flex flex-col items-center justify-center h-60 w-48 shadow-xl p-8 bg-secondary rounded-lg">
      <img src={logo} alt="image" className="grow rounded-xl object-contain" />
      <div className="text-center mt-4">
        <h2 className="font-bold uppercase text-xl text-teal-100">{skill}</h2>
      </div>
    </div>
    // <div className=" flex-shrink-0 shadow-md hover:shadow-xl rounded-md p-4 bg-secondary py-auto w-[320px] h-[320px]">
    //   <img src={logo} height={250} width={250} />
    // </div>
  );
}

export default SkillCard;

export type { Skill };
