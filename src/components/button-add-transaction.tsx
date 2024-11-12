"use client";

import { useState } from "react";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";
import { ArrowDownUp } from "lucide-react";
import { Button } from "./ui/button";

export function ButtonAddTransaction() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adiconar transação
        <ArrowDownUp />
      </Button>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}
