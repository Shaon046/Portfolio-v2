import { createPortal } from "react-dom";

const PortalComponent = ({ children }) => {
    const portalRoot = document.getElementById('portal-root');
  
    if (!portalRoot) return null;
  
    return createPortal(children, portalRoot);
  };
  
  export default PortalComponent