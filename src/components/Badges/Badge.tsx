import { IBadge } from "@/utils";
import { Box, Text } from "@radix-ui/themes";

interface BadgeProps {
    badge: IBadge;
    completed?: boolean;
}

const Badge: React.FC<BadgeProps> = ({badge, completed}) => {
    return (
        <Box
            key={badge.id}
            className={`rounded-xl w-48 flex-shrink-0 flex flex-col items-center ${completed && 'border border-green'}`}
        >
            <Box className='bg-elevation2 w-full text-center rounded-t-xl p-2 justify-center'>
            <Text className="text-text1 text-xs font-medium">{badge.name}</Text>
            {!!badge.actions && (<Text className="text-text2 text-xs ml-1">{badge.actions} {badge.actions > 1 ? 'Actions' : 'Action' }</Text>)}
            </Box>
            <Box className="bg-elevation3 w-full h-full content-center">
            <img
                src={badge.src}
                alt={badge.name}
                className={`h-20 w-20 ${completed && 'border-green border-4'} object-contain ml-auto mr-auto my-6 rounded-full`}
            />
            </Box>
            <Box className='bg-green1 text-center w-full rounded-b-xl p-1'>
            <Text className="text-green text-sm font-semibold">
                {badge.multiplier}
            </Text>
            </Box>
        </Box>
    );
}

export default Badge;