import { Suspense } from "react"
import { LoginClient } from "../components/loginClient"

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginClient />
    </Suspense>
  );
}