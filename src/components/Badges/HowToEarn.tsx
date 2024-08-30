import { actions } from "@/utils";
import { Box, Text } from "@radix-ui/themes";
import { useMemo } from "react";

const HowToEarn = () => {
    const totalCompleted = useMemo(() => {
      let count = 0;
      actions.forEach((action) => {
        if (action.completed) count++;
      })
      return count;
    }, [actions])

    return (
        <Box className="p-4 rounded-lg shadow-lg mt-6">
          <Box className="flex justify-between">
            <Box>
              <Text className="text-lg font-bold mb-4">How to Earn: </Text>
              <Text className="text-text2 mb-4">Complete the actions for the badge, no specific order needed.</Text>
            </Box>
            <Box className="flex gap-2">
              <Text className="text-sm text-text2 bg-elevation3 rounded-2xl px-3 py-1">{totalCompleted}/{actions.length} Completed</Text>
              <Text className="text-sm text-hover bg-green3 rounded-2xl px-3 py-1">Total earnings: 3,000</Text>
            </Box>
          </Box>
          <Box className="overflow-x-auto custom-scrollbar mt-4">
            <Box className="flex space-x-4">
              {actions.map((item) => (
                <Box className='flex flex-col gap-6 min-w-[430px] flex-shrink-0'>
                  <Box key={item.id} className="bg-elevation2 rounded-2xl">
                    <Box className="flex justify-between items-center bg-elevation3 px-4 py-2 rounded-t-2xl">
                      <Text className="text-text2 font-medium">Action</Text>
                      {item.completed && (
                        <Text className="bg-green1 text-green text-xs font-semibold px-2 py-1 rounded-full">
                          Completed
                        </Text>
                      )}
                    </Box>
                    <Box className="px-4 py-2">
                      <Text>{item.action}</Text>
                    </Box>
                  </Box>
                  <Box className={`h-1 bg-elevation3 ${item.completed && 'bg-green2'}`} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="h-[calc(100%-8px)] w-full bg-teal-600 mt-4 rounded-full"></Box>
        </Box>
    );
}

export default HowToEarn;