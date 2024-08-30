import { gql, useSubscription } from '@apollo/client';
import { Box, Table, Text, Button } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface IActivity {
	points: number;
	date: string;
	time: string;
	txHash: string;
}

const GET_LOGS = gql`
  subscription GetLogs {
    logs(order_by: { block_timestamp: desc }, limit: 6) {
      transaction_hash
      decoded
      block_timestamp
    }
  }
`;

const LastActivities = () => {
	const [activities, setActivities] = useState<IActivity[]>([]);
  const { data, loading, error } = useSubscription(GET_LOGS);

	console.log(data);

	const getDate = (data: string) => {
		const dateObj = new Date(data);
		return dateObj.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}).replace(/\//g, '.');
	}

	const getTime = (data: string) => {
		const dateObj = new Date(data);
		return dateObj.toLocaleTimeString('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
	}

	const shortenTxHash = (str: string) => `${str.slice(0, 4)}...${str.slice(-4)}`;

	useEffect(() => {
		if (data && data.logs) {
			setActivities(data.logs.map((log: any) => (
				{
					txHash: log.transaction_hash,
					points: Number(log.decoded.amount0In) || Number(log.decoded.amount0Out) || Number(log.decoded.amount1In) || Number(log.decoded.amount1Out),
					date: getDate(log.block_timestamp),
					time: getTime(log.block_timestamp),
				}
			)))
		} else {
			setActivities([]);
		}
	}, [data])

	console.log(data);

  return (
    <Box className="py-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Last Activities</h2>
      <Box className="overflow-x-auto rounded-xl">
        <Table.Root className="min-w-full border-collapse">
            <Table.Header className="border-collapse">
                <Table.Row className="bg-elevation2 h-8">
                    <Table.ColumnHeaderCell className="px-6 py-3 text-left text-text2 text-xs font-medium tracking-wider border-none">
                        Activities
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="px-6 py-3 text-left text-text2 text-xs font-medium tracking-wider border-none">
                        Points
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="px-6 py-3 text-left text-text2 text-xs font-medium tracking-wider border-none">
                        Date
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="px-6 py-3 text-left text-text2 text-xs font-medium tracking-wider border-none">
                        TXID
                    </Table.ColumnHeaderCell>
										<Table.ColumnHeaderCell className="px-6 py-3 text-left text-text2 text-xs font-medium tracking-wider border-none">
                        
                    </Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {activities.map((activity, index) => (
                    <Table.Row key={activity.txHash} className={`${index % 2 === 0 ? 'bg-elevation1' : 'bg-elevation2'} border-none`}>
                        <Table.Cell className="px-6 py-6 text-left text-text2 border-none">
                            <Box className="flex items-center">
                                <Text className="text-text1 text-base">⇆ Transaction</Text>
                            </Box>
                        </Table.Cell>
                        <Table.Cell className="px-6 py-6 text-left text-text2 border-none">
                            <Text className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green1 text-green">
                                +{activity.points}
                            </Text>
                        </Table.Cell>
                        <Table.Cell className="px-6 py-6 text-left text-text2 border-none">
														<Box className="flex items-center">
															<Text className="text-base mr-2">{activity.date}</Text>
															<Text className='bg-elevation3 px-2 w-fit h-fit py-1 rounded-lg'>{activity.time}</Text>
														</Box>
                        </Table.Cell>
                        <Table.Cell className="px-6 py-6 text-left text-text2 border-none">
                            <Box className="flex items-center">
                                <Text className="text-gray-400">{shortenTxHash(activity.txHash)}</Text>
                                <Button onClick={() => navigator.clipboard.writeText(activity.txHash)} className="ml-4 bg-elevation3 text-text2 rounded-2xl cursor-pointer hover:text-text1">
                                	Copy
                                </Button>
                            </Box>
                        </Table.Cell>
												<Table.Cell className="px-6 py-6 text-left text-text2 border-none">
                            <Box className="flex items-center">
															<Image src="/images/send.png" width={16} height={16} alt='send' className='mt-2' />
                            </Box>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
};

export default LastActivities;
