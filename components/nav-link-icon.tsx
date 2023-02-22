import Link from "next/link";

type NavLinkIconProps = {
  href: string;
  Icon: React.ComponentType;
  count: number;
  className?: string;
};

const NavLinkIcon = ({ href, Icon, count = 0, className }: NavLinkIconProps) => {
  return (
    <Link
      href={href}
      className={`relative rounded-md p-2 font-semibold transition-all hover:bg-indigo-50 hover:text-indigo-900 ${className}`}
    >
      <Icon />
      <span className="absolute -right-1 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-xs text-indigo-500">
        {count}
      </span>
    </Link>
  );
};

export default NavLinkIcon;
