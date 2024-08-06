import { ButtonHTMLAttributes, ReactNode } from "react";

interface ReusableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function ReusableButton({ children, ...props }: ReusableButtonProps) {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
}
