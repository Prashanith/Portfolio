import { cibVisualStudioCode, cilShortText, cibArchLinux } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { cilRunning } from "@coreui/icons/dist/esm/free/cil-running";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../navigation/routes";

function NavigationDock() {
  const navigate = useNavigate();
  return (
    <div className='glass-card fixed bottom-8 left-1/2 z-[1000] flex w-max -translate-x-1/2 flex-row items-center justify-center gap-8 rounded-full p-4 px-8 md:gap-6'>
      <a
        title='skills'
        href={`#${"skills"}`}
        onClick={() => navigate(AppRoutes.HOME)}
      >
        <CIcon
          icon={cibVisualStudioCode}
          className='dock-item cursor-pointer'
        />
      </a>
      <a
        title='contact'
        href={`#${"contact"}`}
        onClick={() => navigate(AppRoutes.HOME)}
      >
        <CIcon
          icon={cilShortText}
          className='dock-item cursor-pointer text-white'
        />
      </a>
      <a
        title='about'
        href={`#${"about"}`}
        onClick={() => navigate(AppRoutes.HOME)}
      >
        <CIcon icon={cibArchLinux} className='dock-item cursor-pointer' />
      </a>
      <a
        title='sport'
        href={`#${"beyondCode"}`}
        onClick={() => navigate(AppRoutes.BEYONDCODE)}
      >
        <CIcon
          icon={cilRunning}
          className='dock-item cursor-pointer text-white'
        />
      </a>
    </div>
  );
}

export default NavigationDock;
