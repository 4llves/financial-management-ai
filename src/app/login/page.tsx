import { LoginIcon } from "@/components/login-icon";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Login() {
  const { userId } = await auth();

  console.log(userId);

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="logo"
          className="mb-8"
        />

        <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>

        <p className="text-muted-foreground mb-3">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <SignUpButton>
          <Button variant="outline" className="flex items-center">
            <LoginIcon key="test" />
            Fazer login ou criar conta
          </Button>
        </SignUpButton>
      </div>
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="login" fill className="object-cover" />
      </div>
    </div>
  );
}
