import { FC } from "react";
import { AuthForm } from "../AuthForm/AuthForm"

interface AuthPageProps {
  authType: "SIGNUP" | "LOGIN";
}

export const AuthPage: FC<AuthPageProps> = ({authType}) => {
  return (
    <section>
        <AuthForm type={authType}/>
    </section>
  )
}
