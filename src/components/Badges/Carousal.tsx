import { Box, Button } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useRef, useState } from "react";
import { badges } from "@/utils";
import Badge from "./Badge";

const Carousal = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const length = badges.length;

    const badgeStyle = (index: number) => {
        if (index === 3) {
          return 'scale-110 opacity-100 px-8'
        } else if (index === 2 || index === 4) {
          return 'scale-90 opacity-50'
        } else if (index === 1 || index === 5) {
          return 'scale-75 opacity-50'
        } else if (index === 0) {
          return 'scale-50 opacity-50 left-11'
        } else if (index === 6) {
          return 'scale-50 opacity-50 right-11'
        }
    };

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
        <Box className="relative flex items-center w-full p-4">
          <Button
            className="bg-elevation3 rounded-3xl p-2 h-[calc(100%-32px)] absolute left-4 z-10 cursor-pointer"
            onClick={prevBadge}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <Box className="overflow-hidden flex flex-grow justify-center h-64">
            <Box
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out items-center"
            >
              {visibleBadges.map((badge, index) => (
                <Box key={badge.id} className={`transition-all duration-300 transform relative ${badgeStyle(index)}`}>
                  <Badge badge={badge} />
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
    );
}

export default Carousal;