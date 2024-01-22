"use client";

import { Button } from "@/components/atoms/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from 'lucide-react';
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from 'react';

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const onClick = async (provider: "google" | "github") => {
    if (provider === "google") {
      setIsGoogleLoading(true);
    } else {
      setIsGithubLoading(true);
    }

    await signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });

    if (provider === "google") {
      setIsGoogleLoading(false);
    } else {
      setIsGithubLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? <Loader2 size={15} className='animate-spin text-muted-foreground transition-all' /> : <FcGoogle className="h-5 w-5" />}
      </Button>
      <Button
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
        disabled={isGithubLoading}
      >
        {isGithubLoading ? <Loader2 size={15} className='animate-spin text-muted-foreground transition-all' /> : <FaGithub className="h-5 w-5" />}
      </Button>
    </div>
  );
};