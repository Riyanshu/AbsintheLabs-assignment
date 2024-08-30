import React from 'react';
import { Box, Text } from '@radix-ui/themes';
import { GitHubLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box className="bg-elevation2 py-2 flex justify-between items-center px-40 mt-16">
      <Box className="flex space-x-4">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <Box className='bg-elevation3 p-2 rounded-xl'>
                <DiscordLogoIcon className="h-6 w-6 text-white" />
            </Box>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Box className='bg-elevation3 p-2 rounded-xl'>
                <TwitterLogoIcon className="h-6 w-6 text-white" />
            </Box>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Box className='bg-elevation3 p-2 rounded-xl'>
                <GitHubLogoIcon className="h-6 w-6 text-white" />
            </Box>
        </a>
      </Box>

      <Box className="flex items-center absolute left-2/4 transform -translate-x-1/2 px-3 py-1 rounded-2xl" style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 255, 135, 0.1))'}}>
        <Text className="text-white mr-3">Powered by</Text>
        <Image alt='Page Icon' width={24} height={24} src="/images/logo.png" />
        <Box className="text-lg font-bold py-1 rounded-full ml-1">
          Absinthe
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
