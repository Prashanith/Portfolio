import { motion } from "framer-motion";
import { download_resume } from "../../../firebase";
import { Animation } from "../../../config/animationConfig";

function Intro() {
  return (
    <div className="flex flex-row justify-between items-center pagePadding h-[calc(100vh-70px)]">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: Animation.delay }}
      >
        <p className="boldText">
          I am
          <br />
          <span className=" text-tertiary font-medium text-5xl sm:text-6xl md:text-8xl">
            Prashanith
          </span>
          <br />
          <span>Software Developer</span>
        </p>
        {/* <p className="mt-10 text-lg font-medium">I call myself DEV007</p> */}
        <div className="mt-10">
          <button
            className="outlinedBtn mr-6"
            onClick={() => download_resume()}
          >
            RESUME
          </button>
          {/* <button className="outlinedBtn">CONTACT ME</button> */}
        </div>
      </motion.div>
      <motion.img
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: Animation.delay }}
        src="/intro.svg"
        className="w-1/2 md:block hidden"
      />
    </div>
  );
}

export default Intro;
