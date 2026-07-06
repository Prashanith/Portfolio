import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css";
import { AppRoutes } from "../../navigation/routes";
import Animate from "../../components/animate/animate";

function SplashScreen() {
  const route = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      route(AppRoutes.HOME);
    }, 2100);
  }, []);

  return (
    <Animate className='flex h-screen flex-row items-center justify-center bg-bgTheme bg-left-bottom'>
      <Animate className='flex flex-row items-center justify-center'>
        <span className='text-[46px] '>
          <img src={"/logo/null.svg"} className='h-[5vh] text-primary' />
        </span>
        <span>
          <img src={"/logo/infinity.svg"} className='ml-3 h-[10vh]' />
        </span>
      </Animate>
    </Animate>
  );
}

export default SplashScreen;
