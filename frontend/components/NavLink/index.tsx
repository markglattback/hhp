import Link, { LinkProps } from "next/link";
import { useRouter } from "next/dist/client/router";
import { SetStateAction } from "react";

/* TYPES */
interface NavLinkProps extends LinkProps {
  text: string;
  setOpen: (value: SetStateAction<boolean>) => void;
}

/* Components */
export default function NavLink({ text, setOpen, ...props }: NavLinkProps) {
  const router = useRouter();

  const active = router.pathname === `/${props.href}` ? "true" : undefined;
  return (
    <li className={active && "active"}>
      <Link {...props}>
        <a aria-current={active && "page"} onClick={() => setOpen(false)}>{text}</a>
      </Link>
    </li>
  );
}
