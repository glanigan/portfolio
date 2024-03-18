import { ReactNode } from "react";
import {tv} from 'tailwind-variants';

const buttonStyle = tv({
  base: 'min-w-6 py-2 text-lg border-2 rounded-xl transition-colors'
})

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className }: ButtonProps) {

  const style = buttonStyle({ className });

  return (
    <button className={style}>
      {children}
    </button>
  );
}
