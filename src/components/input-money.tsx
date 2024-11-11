import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

import { Input } from "./ui/input";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <NumericFormat
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
        {...props}
      />
    );
  }
);

MoneyInput.displayName = "MoneyInput";

export default MoneyInput;