import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Heading, Text, Button } from '@radix-ui/themes';

export default function Header() {
  return (
    <Heading className="bg-black flex text-base justify-between items-center px-8 py-4">
      <Box className="flex items-center space-x-4">
        <Image alt='Page Icon' width={40} height={40} src="/images/logo.png" className='mr-6' />
        <nav className="flex space-x-8">
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

      <Box className="flex items-center space-x-4">
        <Box className="text-text2 text-sm px-4 py-2 rounded-full border-2 cursor-pointer border-hover bg-elevation2 hover:text-hover">
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
