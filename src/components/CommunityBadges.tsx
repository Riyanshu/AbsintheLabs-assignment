import React from 'react';
import { Box, Text } from '@radix-ui/themes';
import { badges } from '@/utils';
import Badge from './Badges/Badge';

const CommunityBadges = () => {
  return (
    <Box className="rounded-lg shadow-lg my-6">
      <Box className='bg-elevation2 rounded-t-xl px-4 py-2'>
        <Text className="text-lg font-bold">Community Badges</Text>
      </Box>
      <Box className="overflow-x-auto custom-scrollbar mt-4 bg-elevation1 rounded-b-xl py-2 px-4 pb-6">
        <Box className="flex space-x-4">
          {badges.map((badge) => (
            <Badge badge={badge} completed={badge.completed} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CommunityBadges;
