"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Error = () => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center
        space-y-4">
            <Image 
              src="/404_cat.png"
              height="300"
              width="300"
              alt="Erroe"
              className="dark:hidden"
            />
            <Image 
              src="/404_cat_white.png"
              height="300"
              width="300"
              alt="Erroe"
              className="hidden dark:block"
            />
            <h2 className="text-xl font-medium">
                Что-то пошло не так!
            </h2>
            <Button asChild>
                <Link href="/documents">
                 К заметкам!
                </Link>
            </Button>
        </div>
     );
}
 
export default Error;