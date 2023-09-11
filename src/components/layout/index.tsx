import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../routes";

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.startsWith("/protected")) {
      navigate(LOGIN);
    }
  }, [pathname]);

  return (
    <div>
      Layout <Outlet />
    </div>
  );
};
