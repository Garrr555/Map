import AuthLayout from "@components/ui/AuthLayout";
import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { useState } from "react";

export default function RegisterView() {
  const [visible, setVisible] = useState(true);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <AuthLayout
      title="Register"
      link="/auth/login"
      linkPage="Log in here"
      linkText="Have an account? "
      textColor="text-dark"
    >
      <form action="" className="">
        <div className="my-5 text-gray-700 dark:text-primary">
          <p className="">Email</p>
          <Input
            label=""
            name="email"
            type="email"
            placeholder=""
            visible={false}
            handleVisible=""
          />
        </div>
        <div className="my-5 text-gray-700 dark:text-primary">
          <p className="">Fullname</p>
          <Input
            label=""
            name="fullname"
            type="text"
            placeholder=""
            visible={false}
            handleVisible=""
          />
        </div>
        <div className="my-5 text-gray-700 dark:text-primary">
          <p className="">Phone</p>
          <Input
            label=""
            name="phone"
            type="text"
            placeholder=""
            visible={false}
            handleVisible=""
          />
        </div>
        <div className="my-5 text-gray-700 dark:text-primary">
          <p className="">Password</p>
          <div className="">
            <Input
              label=""
              name="password"
              type="password"
              placeholder="password"
              visible={visible}
              handleVisible={handleVisible}
            />
            <div className={`p-2 cursor-pointer w-5 rounded-sm mt-1`}></div>
          </div>
        </div>
        <div className="">
          <Button type="submit" variant="bg-dark w-full">
            Register
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}
