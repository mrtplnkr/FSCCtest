import { InputHTMLAttributes, ReactNode } from "react";

interface ReusableInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export function ReusableInput({ ...props }: ReusableInputProps) {
  return (
    <>
      <input {...props} />
    </>
  );
}
