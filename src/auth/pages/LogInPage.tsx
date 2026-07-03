import { LoginForm } from "@/auth/components/login-form"

const LogInPages = () => {
    return (
        <div className="ambient-bg flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-4xl">
                <LoginForm />
            </div>
        </div>
    )
}

export default LogInPages
