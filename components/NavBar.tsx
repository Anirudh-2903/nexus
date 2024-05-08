"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MobileNav from './MobileNav';
import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1' >
        <Image src='/images/logo.png' alt='Nexus Logo' width={40} height={40} className='max-sm:size-10'/>
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Nexus</p>
      </Link>
      <div className='flex-between gap-5'>
        {/** Clerk Management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
              <RedirectToSignIn />
        </SignedOut>
        <MobileNav />

      </div>
    </nav>
  )
}

export default NavBar;