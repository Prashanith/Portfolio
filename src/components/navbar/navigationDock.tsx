import { cibVisualStudioCode, cilShortText, cibArchLinux } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { cilRunning } from "@coreui/icons/dist/esm/free/cil-running";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../navigation/routes";

function NavigationDock() {
  const navigate = useNavigate();
  return (
    <div className='glass fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-lg p-3 px-4'>
      <div className='liquidGlass-text'>
        <CIcon
          icon={cibVisualStudioCode}
          className='dock-item cursor-pointer'
          href={`#${"skills"}`}
          onClick={() => navigate(AppRoutes.HOME)}
        />
        <CIcon
          icon={cilShortText}
          className='dock-item cursor-pointer'
          href={`#${"contact"}`}
          onClick={() => navigate(AppRoutes.HOME)}
        />
        <CIcon
          icon={cibArchLinux}
          className='dock-item cursor-pointer'
          href={`#${"about"}`}
          onClick={() => navigate(AppRoutes.HOME)}
        />
        <CIcon
          icon={cilRunning}
          className='dock-item cursor-pointer'
          href={`#${"beyondCode"}`}
          onClick={() => navigate(AppRoutes.BEYONDCODE)}
        />
      </div>
    </div>
  );
}

export default NavigationDock;
