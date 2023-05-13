import { download_resume } from "../../../firebase";

function Intro() {
  return (
    <div className="flex flex-row justify-start items-center px-16 h-[calc(100vh-70px)]">
      <div>
        <p className="boldText">
          I am
          <br />
          <span className=" text-tertiary font-medium text-8xl">
            Prashanith
          </span>
          <br />
          <span>Software Developer</span>
        </p>
        {/* <p className="mt-10 text-lg font-medium">I call myself DEV007</p> */}
        <div className="mt-10">
          <button className="outlinedBtn mr-6" onClick={()=>download_resume()}>RESUME</button>
          <button className="outlinedBtn">CONTACT ME</button>
        </div>
      </div>
      <img src="/intro.svg" className="w-1/2" />
    </div>
  );
}

export default Intro;
