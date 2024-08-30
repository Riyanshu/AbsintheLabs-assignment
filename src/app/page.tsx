"use client";

import CommunityBadges from '@/components/CommunityBadges';
import LastActivities from '@/components/LastActivities';
import BadgeCarousel from '../components/BadgeCarousel';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo';
import Header from '@/components/Header';

import './globals.css';
import { Theme } from '@radix-ui/themes';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Theme className='min-h-screen bg-elevation text-text1'>
        <div className="px-40">
          <Header />
          <div>
            <LastActivities />
            <BadgeCarousel />
            <CommunityBadges />
          </div>
        </div>
        <Footer />
      </Theme>
    </ApolloProvider>
  );
}