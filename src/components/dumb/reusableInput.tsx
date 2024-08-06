import { InputHTMLAttributes } from "react";

interface ReusableInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function ReusableInput({ ...props }: ReusableInputProps) {
  return (
    <>
      <input {...props} />
    </>
  );
}
