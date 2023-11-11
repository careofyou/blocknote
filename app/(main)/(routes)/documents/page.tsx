"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);
    

  const onCreate = () => {
    const promise = create({ title: "Без названия" })
      .then((documentId) => router.push(`/documents/${documentId}`))

    toast.promise(promise, {
      loading: "Делаем новую заметку...",
      success: "Заметка сделана!",
      error: "Не получилось сделать заметку."
    });
  }

  return (
  <div className="h-full flex flex-col items-center justify-center space-y-4">
    <Image 
      src="/black_cat_3.png"
      height="300"
      width="300"
      alt="cat_3"
      className="dark:hidden"
    />
    <Image 
      src="/white_cat_3.png"
      height="300"
      width="300"
      alt="cat_3"
      className="hidden dark:block"
    />
    <h2 className="text-lg font-medium">
      Добро пожаловать, {user?.firstName}!
    </h2>
    <Button onClick={onCreate}>
      <PlusCircle className="h-4 w-4 mr-2"/>
      Новая заметка
    </Button>
  </div>
  )
};

export default DocumentsPage;
