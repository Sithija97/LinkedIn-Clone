import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../routes";
import { useAuth } from "../../hooks/auth";

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user]);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      Layout <Outlet />
    </div>
  );
};
