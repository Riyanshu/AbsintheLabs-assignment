import React from 'react';
import { Box } from '@radix-ui/themes';
import Carousal from './Carousal';
import HowToEarn from './HowToEarn';

const Badges = () => {
  return (
    <Box>
      <h2 className="text-lg font-bold text-gray-200 mt-4">Badges</h2>
      <Box className='bg-elevation1 rounded-2xl mt-4'>
        <Carousal />
        <HowToEarn />
      </Box>
    </Box>
  );
};

export default Badges;
