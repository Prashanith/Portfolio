import { cibVisualStudioCode, cilShortText, cibArchLinux } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { cilRunning } from "@coreui/icons/dist/esm/free/cil-running";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../navigation/routes";
import Animate from "../animate/animate";

function NavigationDock() {
  const navigate = useNavigate();
  return (
    <Animate>
      <div className='glass-card z-[1000] fixed bottom-8 left-1/2 flex w-max -translate-x-1/2 flex-row items-center justify-center gap-3 md:gap-6 rounded-xl px-5 p-4'>
        <a href={`#${"skills"}`} onClick={() => navigate(AppRoutes.HOME)}>
          <CIcon
            icon={cibVisualStudioCode}
            className='dock-item cursor-pointer'
          />
        </a>
        <a href={`#${"contact"}`} onClick={() => navigate(AppRoutes.HOME)}>
          <CIcon icon={cilShortText} className='dock-item cursor-pointer text-white' />
        </a>
        <a href={`#${"about"}`} onClick={() => navigate(AppRoutes.HOME)}>
          <CIcon icon={cibArchLinux} className='dock-item cursor-pointer' />
        </a>
        <a
          href={`#${"beyondCode"}`}
          onClick={() => navigate(AppRoutes.BEYONDCODE)}
        >
          <CIcon icon={cilRunning} className='dock-item cursor-pointer text-white' />
        </a>
      </div>
    </Animate>
  );
}

export default NavigationDock;
