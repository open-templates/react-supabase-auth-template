import { SignUpForm } from "@/auth/components/signup-form"

const SignUpPage = () => {
    return (
        <div className="ambient-bg flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-4xl">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpPage
