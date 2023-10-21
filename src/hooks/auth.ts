import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { DASHBOARD, LOGIN } from "../routes";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface ILoginProps {
  email: string;
  password: string;
  redirectTo?: string;
}

export const useAuth = () => {
  const [user, isLoading, error] = useAuthState(auth);
  return { user, isLoading, error };
};

export const useLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const login = async ({
    email,
    password,
    redirectTo = DASHBOARD,
  }: ILoginProps) => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "You are logged in",
        status: "success",
        isClosable: true,
        position: "top-right",
        duration: 5000,
      });
      navigate(redirectTo);
    } catch (error: any) {
      toast({
        title: "Logging in failed",
        description: error.message,
        status: "error",
        isClosable: true,
        position: "top-right",
        duration: 5000,
      });
      return false;
    }

    setLoading(false);
    return true;
  };

  return { login, isLoading };
};

export const useLogout = () => {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();
  const toast = useToast();

  const logout = async () => {
    if (await signOut()) {
      toast({
        title: "Successfully logged out",
        status: "success",
        isClosable: true,
        position: "top-right",
        duration: 5000,
      });
      navigate(LOGIN);
    } else {
      toast({
        title: "Error occured while logging out",
        status: "error",
        isClosable: true,
        position: "top-right",
        duration: 5000,
      });
    }
  };

  return { logout, isLoading };
};
