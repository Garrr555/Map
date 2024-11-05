import LoginView from "@components/auth/login";
import { useContext } from "react";
import { ThemeContext } from "src/context/themeContext";

export default function Login() {

    const { darkMode } = useContext(ThemeContext);

    return (
      <div className="w-full flex items-center justify-center h-screen bg-[url('/petaterang.png')] dark:bg-[url('/petagelap.png')] bg-cover bg-center">
        <LoginView />
      </div>
    );
}