import Link from "next/link";
import { GiEgyptianBird, GiShoppingBag } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import NavLink from "./nav-link";
import NavLinkIcon from "./nav-link-icon";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full flex-col">
      <header>
        <div className="bg-indigo-900">
          <div className="m-auto flex max-w-page items-center justify-between px-page-content py-2 text-sm text-white">
            <GiEgyptianBird />
            <p>Get free delivery on orders above $100</p>
            <div className="[&>*:hover]:bg-transparent [&>*:hover]:text-indigo-200">
              <NavLink
                href="/signup"
                className="relative mr-4 after:absolute after:top-1 after:-right-2 after:inline-block after:h-6 after:border-r after:content-['']"
              >
                Create an account
              </NavLink>
              <NavLink href="/signin">Sign in</NavLink>
            </div>
          </div>
        </div>
        <div className="border-b">
          <nav className="m-auto flex max-w-page items-center gap-2 py-4 px-page-content">
            <Link href="/" className="mr-4">
              <RiMoneyDollarCircleLine className="text-3xl text-indigo-900" />
            </Link>
            <NavLink href="products/clothes">Clothes</NavLink>
            <NavLink href="products/electronics">Electronics</NavLink>
            <NavLink href="products/furniture">Furniture</NavLink>
            <NavLink href="products/shoes">Shoes</NavLink>
            <div className="ml-auto flex items-center gap-4 rounded text-2xl text-indigo-900">
              <NavLinkIcon href="/wishlist" Icon={IoMdHeartEmpty} count={0} />
              <NavLinkIcon href="/cart" Icon={GiShoppingBag} count={0} />
            </div>
          </nav>
        </div>
      </header>
      <main className="m-auto w-full max-w-page grow py-10 px-page-content">{children}</main>
      <footer className="border-t bg-indigo-100">
        <div className="m-auto flex max-w-page items-center justify-between px-page-content py-2.5 text-sm text-neutral-600">
          <span className="capitalize">© 2023 nextjs-rtk-storefront</span>
          <span>
            Thanks to{" "}
            <Link href="https://fakeapi.platzi.com/" className="font-semibold">
              PlatziLabs
            </Link>{" "}
            for their beautiful fake store API
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
