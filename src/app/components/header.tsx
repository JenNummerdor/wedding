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
import { useState } from 'react';

const menu = [
  {
    href: '/',
    title: 'Home'
  },
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
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className=''>
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
              onPress={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
