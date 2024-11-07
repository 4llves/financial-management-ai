import { Button } from "@/_components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";

export default function LoginIcon() {
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

        <Button variant="secondary" className="flex items-center">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="login" fill className="object-cover" />
      </div>
    </div>
  );
}
