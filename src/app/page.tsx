import { Button } from "@/_components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="h-full flex flex-col gap-4">
          <h1 className="text-9xl">Olha o Button ai</h1>
          <Button variant="ghost">Oi eu sou Goku</Button>
        </div>
      </main>
    </div>
  );
}
