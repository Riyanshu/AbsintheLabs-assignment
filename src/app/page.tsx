"use client";
import './globals.css';

import CommunityBadges from '@/components/CommunityBadges';
import LastActivities from '@/components/LastActivities';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo';
import Header from '@/components/Header';
import { Theme } from '@radix-ui/themes';
import Footer from '@/components/Footer';
import Badges from '@/components/Badges';

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Theme className='min-h-screen bg-elevation text-text1'>
        <div className="px-6 lg:px-40">
          <Header />
          <div>
            <LastActivities />
            <Badges />
            <CommunityBadges />
          </div>
        </div>
        <Footer />
      </Theme>
    </ApolloProvider>
  );
}