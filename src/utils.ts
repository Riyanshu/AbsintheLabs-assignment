export interface IBadge {
    id: number;
    src: string;
    alt: string;
    name: string;
    multiplier: string;
    actions: number;
    completed: boolean;
}

export const badges: IBadge[] = [
    { id: 1, src: '/images/badge1.png', alt: 'Badge 1', name: 'Discord OG', multiplier: '1.15x', actions: 0, completed: true },
    { id: 2, src: '/images/badge2.png', alt: 'Badge 2', name: 'Liquidity Machine', multiplier: '1.15x', actions: 3, completed: true },
    { id: 3, src: '/images/badge3.png', alt: 'Badge 3', name: 'Income Engineer', multiplier: '2x', actions: 3, completed: true },
    { id: 4, src: '/images/badge4.png', alt: 'Badge 4', name: 'Pudgy OG', multiplier: '200 Points', actions: 0, completed: false },
    { id: 5, src: '/images/badge5.png', alt: 'Badge 5', name: 'Pathfinder OG', multiplier: '1.15x', actions: 0, completed: false  },
    { id: 6, src: '/images/badge6.png', alt: 'Badge 6', name: 'Rookie Badge', multiplier: '150 Points', actions: 1, completed: false },
    { id: 7, src: '/images/badge7.png', alt: 'Badge 7', name: 'Check Back Soon', multiplier: '1.15x', actions: 0, completed: false },
    { id: 8, src: '/images/badge8.png', alt: 'Badge 8', name: 'Discord OG', multiplier: '2x', actions: 0, completed: false },
    { id: 9, src: '/images/badge9.png', alt: 'Badge 9', name: 'Liquidity Machine', multiplier: '1.15x', actions: 2, completed: false },
    { id: 10, src: '/images/badge10.png', alt: 'Badge 10', name: 'Income Engineer', multiplier: '200 Points', actions: 0, completed: false },
    { id: 11, src: '/images/badge11.png', alt: 'Badge 11', name: 'Pudgy OG', multiplier: '1.15x', actions: 3, completed: false },
    { id: 12, src: '/images/badge12.png', alt: 'Badge 12', name: 'Pathfinder OG', multiplier: '150 Points', actions: 1, completed: false },
];

export const actions = [
    { id: 1, action: 'Provide at least $50 Liquidity to USDT/ETH', completed: true },
    { id: 2, action: 'Provide at least $50 Liquidity to LINK/ETH' },
    { id: 3, action: 'Provide at least $100 Liquidity to WBTC/ETH' },
];