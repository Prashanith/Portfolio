import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css";
import { AppRoutes } from "../../../navigation/routes";
import { motion } from "framer-motion";

function SplashScreen() {
  const route = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      route(AppRoutes.HOME);
    }, 2100);
  }, []);

  return (
    <motion.div className="flex h-screen flex-row items-center justify-center bg-primary">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ delay: 0, duration: 2, type: "spring", stiffness: 880 }}
        className="flex flex-row items-center justify-center"
      >
        <span className="text-[46px] ">
          <img src={"/logo/null.svg"} className="h-[5vh] text-primary" />
        </span>
        <span>
          <img src={"/logo/infinity.svg"} className="ml-3 h-[10vh]" />
        </span>
      </motion.div>
    </motion.div>
  );
}

export default SplashScreen;
