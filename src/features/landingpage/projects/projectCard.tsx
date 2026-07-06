import CIcon from "@coreui/icons-react";
import Animate from "../../../components/animate/animate";
import { cilGlobeAlt } from "@coreui/icons";

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
      <div className='mt-3'>
        <p className='text-ellipsis text-center'>{description}</p>
      </div>
      <div className='mt-auto h-[5%] self-end'>
        <a href={url} className='h-[5%] self-end'>
          {url.includes("github") ? (
            <span className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='w-5'
                viewBox='0 0 16 16'
              >
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </span>
          ) : (
            <CIcon
              icon={cilGlobeAlt}
              className='size-5 cursor-pointer text-white'
            />
          )}
        </a>
      </div>
    </Animate>
  );
}

export default ProjectCard;

export type { Project };
