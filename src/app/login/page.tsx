"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const handleLogin = async () => {
    await signIn("google");
  };
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      if (status === "authenticated" && session) {
        router.push("/dashboard");
      } else if (status === "loading") {
      } else {
        router.push("/login");
      }
    };

    checkSession();
  }, [session, status, router]);

  return (
    <div>
      <button onClick={handleLogin}>Log in with Google</button>
    </div>
  );
};

export default LoginPage;
