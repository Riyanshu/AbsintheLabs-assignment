import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Heading, Text, Button } from '@radix-ui/themes';

export default function Header() {
  return (
    <Heading className="bg-black flex flex-col lg:flex-row lg:justify-between text-base items-center px-4 py-4">
      <Box className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full">
        <Box className="flex justify-between items-center w-full lg:w-auto">
          <Image alt='Page Icon' width={40} height={40} src="/images/logo.png" className='mr-6' />
          <Box className="flex space-x-4 lg:hidden">
            <Box className="text-text2 text-sm px-4 py-2 rounded-2xl border-2 cursor-pointer border-hover bg-elevation2 hover:text-hover">
              How It Works
            </Box>
            <Button className="flex items-center h-12 bg-elevation3 space-x-2 px-4 py-2 rounded-2xl text-text1">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={30}
                height={30}
                className="rounded-full h-8 w-8"
              />
              <Text>riyanshu.eth</Text>
            </Button>
          </Box>
        </Box>

        <nav className="flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-auto space-y-4 lg:space-y-0">
          <Link href="" className="text-text1 hover:text-hover">
            Dashboard
          </Link>
          <Link href="" className="text-text1 hover:text-hover">
            Tasks
          </Link>
          <Link href="" className="text-text1 hover:text-hover">
            Badges
          </Link>
          <Link href="" className="text-text1 hover:text-hover">
            Leaderboard
          </Link>
          <Link href="" className="text-text1 hover:text-hover">
            Connections
          </Link>
        </nav>
      </Box>

      <Box className="hidden lg:flex items-center space-x-4">
        <Box className="text-text2 text-sm px-4 py-2 rounded-2xl border-2 cursor-pointer border-hover bg-elevation2 hover:text-hover whitespace-nowrap">
          How It Works
        </Box>
        <Button className="flex items-center h-12 bg-elevation3 space-x-2 px-4 py-2 rounded-2xl text-text1">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={30}
            height={30}
            className="rounded-full h-8 w-8"
          />
          <Text>riyanshu.eth</Text>
        </Button>
      </Box>
    </Heading>
  );
}
