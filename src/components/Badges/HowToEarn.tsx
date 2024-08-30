import { actions } from "@/utils";
import { Box, Text } from "@radix-ui/themes";

const HowToEarn = () => {
    return (
        <Box className="p-4 rounded-lg shadow-lg mt-6">
          <Text className="text-lg font-bold text-gray-200 mb-4">How to Earn: </Text>
          <Text className="text-sm text-gray-400 mb-4">Complete the actions for the badge, no specific order needed.</Text>
          <Box className="overflow-x-auto custom-scrollbar mt-4">
            <Box className="flex space-x-4">
              {actions.map((item) => (
                <Box className='flex flex-col gap-6 min-w-[435px] flex-shrink-0'>
                  <Box key={item.id} className="bg-elevation3 p-4 rounded-lg">
                    <Box className="flex justify-between items-center mb-2">
                      <Text className="text-text2 font-medium">Action</Text>
                      {item.completed && (
                        <Text className="bg-green1 text-green text-xs font-semibold px-2 py-1 rounded-full">
                          Completed
                        </Text>
                      )}
                    </Box>
                    <Text className="text-white">{item.action}</Text>
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