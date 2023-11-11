"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 mt-[6rem]">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Ваши идеи, документы и мечты. Добро пожаловать в{" "}
        <span className="underline">Блокнотик</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Блокнтотик - рабочее пространство <br />
        быстро и удобно.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Начать
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
     
    </div>
  );
};
