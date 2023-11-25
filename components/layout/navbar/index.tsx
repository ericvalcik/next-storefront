import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense } from 'react';
import Search from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="fixed top-4 z-10 flex w-full items-center justify-center pt-4">
      {/*<div className="hidden flex-none">*/}
      {/*  <MobileMenu menu={menu} />*/}
      {/*</div>*/}
      <div className="mx-6 flex w-full max-w-2xl items-center justify-between rounded-full bg-[#0f1014]/70 px-3.5 py-2 ring-1 ring-inset ring-white/10 backdrop-blur-lg">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-4 flex items-center justify-center">
            <LogoSquare />
            <div className="ml-1 hidden flex-none text-sm font-medium uppercase xs:block">
              {SITE_NAME}
            </div>
            <div className="ml-1 flex-none text-sm font-medium uppercase xs:hidden">
              {SITE_NAME?.split(' ')[0]}
            </div>
          </Link>
          {/* menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null */}
        </div>
        <div className="flex items-center justify-end justify-self-end">
          {/* let's disable search for now */}
          <div className="mr-2 hidden">
            <Search />
          </div>
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
