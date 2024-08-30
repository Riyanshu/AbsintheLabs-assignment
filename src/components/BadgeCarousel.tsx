import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { actions, badges } from '@/utils';

const BadgeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start from the first badge
  const visibleCount = 7; // Show 7 badges
  const carouselRef = useRef<HTMLDivElement>(null);
  const length = badges.length;

  const getVisibleBadges = () => {
    let visibleBadges = [];
    for (let i = -3; i <= 3; i++) {
      visibleBadges.push(badges[(currentIndex + i + length) % length]);
    }
    return visibleBadges;
  };

  const nextBadge = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const prevBadge = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const visibleBadges = getVisibleBadges();

  return (
    <Box>
      <h2 className="text-lg font-bold text-gray-200 mt-4">Badges</h2>
      <Box className='bg-elevation1 rounded-2xl mt-4'>
        <Box className="relative flex items-center w-full p-4 h-64">
          <Button
            className="bg-elevation3 rounded-3xl p-2 h-[calc(100%-32px)] absolute left-4 z-10 cursor-pointer"
            onClick={prevBadge}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <Box className="overflow-hidden flex flex-grow justify-center">
            <Box
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out items-center gap-6"
            >
              {visibleBadges.map((badge, index) => (
                <Box
                  key={badge.id}
                  className={`flex rounded-3xl bg-elevation3 justify-center items-center transition-all duration-400 ml-[-1000] ${
                    index === 3 ? 'h-48 w-48' : 'h-32 w-32'
                  }`}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    height={64}
                    width={64}
                    className={`rounded-full ${
                      index === 3 ? 'transform scale-150 opacity-100' : 'transform scale-90 opacity-50'
                    }`}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Button
            className="bg-elevation3 rounded-3xl p-2 h-[calc(100%-32px)] absolute right-4 z-10 cursor-pointer"
            onClick={nextBadge}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </Box>
        <Box className="p-4 rounded-lg shadow-lg mt-6">
          <Text className="text-lg font-bold text-gray-200 mb-4">How to Earn: </Text>
          <Text className="text-sm text-gray-400 mb-4">Complete the actions for the badge, no specific order needed.</Text>
          <Box className="overflow-x-auto custom-scrollbar mt-4">
            <Box className="flex space-x-4">
              {actions.map((item) => (
                <Box key={item.id} className="bg-elevation3 p-4 rounded-lg min-w-[300px] flex-shrink-0">
                  <Box className="flex justify-between items-center mb-2">
                    <Text className="text-text2 font-medium">Action</Text>
                    {item.completed && (
                      <Text className="bg-green-600 text-green-100 text-xs font-semibold px-2 py-1 rounded-full">
                        Completed
                      </Text>
                    )}
                  </Box>
                  <Text className="text-white">{item.action}</Text>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="h-[calc(100%-8px)] w-full bg-teal-600 mt-4 rounded-full"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BadgeCarousel;
