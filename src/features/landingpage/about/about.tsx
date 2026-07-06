import Animate from "../../../components/animate/animate";

function About() {
  return (
    <Animate
      id='about'
      className='pagePadding mx-auto flex flex-col  items-start justify-center py-16 text-left sm:py-28 md:items-center md:text-center'
    >
      <p className='boldText'>About Me</p>
      <div className='mt-5 self-center text-base'>
        <p className='text-xl font-black italic'>
          Greetings fellow humans! I am Prashanith, a coding sorcerer who
          dabbles in the mystical arts of full stack development. With my
          wizardly skills, I freelance clients for web/mobile-app solutions.
          Making the User Experience magisterial wherever I work is my passion.
          Improving my wizardry and exploring several things right now.
          <br />I am LINUX User, I use ARCH, BTW
        </p>
      </div>
    </Animate>
  );
}

export default About;
