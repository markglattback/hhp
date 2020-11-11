import Link, { LinkProps } from "next/link";
import { useRouter } from "next/dist/client/router";

/* TYPES */
interface NavLinkProps extends LinkProps {
  text: string;
}

/* Components */
export default function NavLink({ text, ...props }: NavLinkProps) {
  const router = useRouter();  

  const active = router.pathname === `/${props.href}` ? "true" : undefined;
  return (
    <li className={active && "active"}>
      <Link {...props}>
        <a aria-current={active && "page"}>{text}</a>
      </Link>
    </li>
  );
}
