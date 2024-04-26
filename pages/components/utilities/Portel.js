import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const PortalComponent = ({ children }) => {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    // Check if we're in a browser environment before accessing the DOM
    if (typeof document !== "undefined") {
      const root = document.getElementById('portal-root');
      setPortalRoot(root);
    }
  }, []); // This effect runs only once after component mount

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

export default PortalComponent;
