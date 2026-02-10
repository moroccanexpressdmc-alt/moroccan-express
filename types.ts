
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface ItineraryResponse {
  destination: string;
  duration: string;
  theme: string;
  plan: string;
}