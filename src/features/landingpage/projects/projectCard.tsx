import Animate from "../../../components/animate/animate";

interface Project {
  title: string;
  logo: string;
  url: string;
  description: string;
}

function ProjectCard({ title, description, url }: Project) {
  return (
    <Animate
      className='glass-card  carousel-item relative my-10 flex aspect-square h-[7.5rem] flex-col items-center justify-center 
      rounded-2xl p-8  shadow-sm transition-all duration-150 hover:scale-105 hover:shadow-tertiary sm:h-32 sm:p-8 md:h-36 lg:h-40 xl:h-44 2xl:h-48'
    >
      <h2 className='line-clamp-1 text-ellipsis text-xl font-bold uppercase text-teal-100'>
        {title}
      </h2>
      <div>
        <p className='text-ellipsis'>{description}</p>
      </div>
      <div className='mt-auto h-[5%] self-end'>
        <a href={url} className='h-[5%] self-end'>
          PROJECT URL
        </a>
      </div>
    </Animate>
  );
}

export default ProjectCard;

export type { Project };
