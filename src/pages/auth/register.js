import RegisterView from "@components/auth/register";

export default function Register() {
    return (
        <div className="w-full flex items-center justify-center h-screen bg-[url('/petaterang.png')] dark:bg-[url('/petagelap.png')] bg-cover bg-center">
            <RegisterView />
        </div>
    );
}