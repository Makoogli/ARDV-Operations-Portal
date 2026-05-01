"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function LoginClient({name,src}){
    const params = useSearchParams();
    const callbackUrl = params.get("callbackUrl") || "/dashboard";
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <h1>Sign in to Operations</h1>
          <button onClick={() => signIn("google",{callbackUrl})}>
            Continue with Google
          </button>
        </div>
      </div>
    );
}