
"use client";
import { signIn, useSession, signOut } from "next-auth/react";
export default function Home() {
  const { data, status } = useSession();
  console.log(data, status);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div onClick={() => signIn("google")}>google</div>
      <div onClick={() => signOut()}>logout</div>
    </main>
  );
}
