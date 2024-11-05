import { useState } from "react";
import Button from "@components/ui/button";
import AuthLayout from "@components/ui/AuthLayout";
import Input from "@components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function LoginView() {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }
  

  return (
    <AuthLayout
      title="Login"
      link="/auth/register"
      linkText="Don't have an account?"
      linkPage="Sign up here"
    >
      <form action="" className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-primary"
          >
            Email
          </label>
          <Input
            label=""
            name="email"
            type="email"
            placeholder="example@gmail.com"
            visible={false}
            handleVisible={null}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-primary"
          >
            Password
          </label>
          <Input
            label=""
            name="password"
            type="password"
            placeholder="password"
            visible={visible}
            handleVisible={handleVisible}
          />
        </div>

        <Button type="submit" variant="bg-gray-800 w-full">
          <Link href="/dashboard">Login</Link>
        </Button>

        <hr className="my-5" />

        <Button
          type="button"
          //   onClick={() => console.log("Sign in with Google")}
          variant="bg-primary w-full"
        >
          <div className="flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faGoogle} />
            <span>Sign in with Google</span>
          </div>
        </Button>
      </form>
    </AuthLayout>
  );
}
