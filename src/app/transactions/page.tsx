import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/prisma";
import { ArrowDownUp } from "lucide-react";
import { transactionsColumns } from "./_columns";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});
  console.log(transactions);

  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-2xl">Transações</h1>

        <Button className="rounded-full font-bold">
          Adiconar transação
          <ArrowDownUp />
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
}
