'use client';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const menu = [
  {
    href: '/rsvp',
    title: 'RSVP',
  },
  {
    href: '/schedule',
    title: 'Schedule',
  },
  {
    href: '/travel',
    title: 'Travel & Stay',
  },
  {
    href: '/registry',
    title: 'Registry',
  },
  {
    href: '/photos',
    title: 'Photos',
  },
  {
    href: '/faq',
    title: 'FAQ',
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* Toggle Menu for  mobile devices */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/' color='foreground'>
            <p className='text-lg font-bold text-inherit'>💍 J+O</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* Menu Content for large devices */}
      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        {menu.map((item, idx) => (
          <NavbarItem key={`${item.title}-${idx}`}>
            <Link
              href={item.href}
              size='lg'
              color='foreground'
              className='uppercase'
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* Menu Content for small devices */}
      <NavbarMenu>
        {menu.map((item, idx) => (
          <NavbarMenuItem key={`${item.title}-${idx}`}>
            <Link
              href={item.href}
              className='w-full'
              size='lg'
              color='foreground'
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
