import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  id: string;
  href: string;
  children?: ReactNode;
  clickFunction: (id: string) => void;
}

function Button({ id, href, children, clickFunction }: ButtonProps) {
  const menuLinkHover = (selected_link: string) => {
    const active_link: HTMLElement = document.getElementById(selected_link)!;
    if (active_link.classList.contains("active")) {
      active_link.style.color = "white";
    }
  };

  return (
    <Link
      id={id}
      to={href}
      onClick={() => clickFunction(id)}
      onMouseEnter={() => menuLinkHover(id)}
      className="text-[#969696] hover:text-[#f8f9fa] duration-300"
    >
      {children}
    </Link>
  );
}

export default Button;
