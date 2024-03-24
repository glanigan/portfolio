import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "flex gap-2 flex-grow justify-center items-center px-4 py-2 text-lg border-2 rounded-xl transition-colors",
});

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className }: ButtonProps) {
  const style = buttonStyle({ className });

  return <button className={style}>{children}</button>;
}
