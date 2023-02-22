import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`rounded px-2 py-1 font-semibold transition-all hover:bg-indigo-50 hover:text-indigo-900 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
