import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  href: string;
  children?: ReactNode;
}

function Button({ href, children }: ButtonProps) {
  return <Link to={href}>{children}</Link>;
}

export default Button;
