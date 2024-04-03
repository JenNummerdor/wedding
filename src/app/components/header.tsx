'use client';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/'>💍 J+O</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        <NavbarItem>
          <Link href='/rsvp'>RSVP</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/schedule'>Schedule</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/travel'>Travel & Stay</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/registry'>Registry</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href='/rsvp' className='w-full'>
            RSVP
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href='/schedule' className='w-full'>
            Schedule
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href='/travel' className='w-full'>
            Travel
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href='/registry' className='w-full'>
            Registry
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
