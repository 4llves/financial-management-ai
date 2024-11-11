import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/prisma";
import { transactionsColumns } from "./_columns";
import { ButtonAddTransaction } from "@/components/button-add-transaction";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});
  console.log(transactions);

  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-2xl">Transações</h1>

        <ButtonAddTransaction />
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
}
