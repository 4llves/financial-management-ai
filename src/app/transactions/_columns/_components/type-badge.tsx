import { Badge } from "@/components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted hover:bg-muted text-primary font-bold">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 hover:bg-danger/10 text-danger font-bold">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Despesas
      </Badge>
    );
  }

  return (
    <Badge className="bg-white/10 hover:bg-white/10 text-white font-bold">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
}
