import { TourDate, Release, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'BIOGRAPHY', href: '#biography' },
  { label: 'SELECTED WORKS', href: '#works' },
  { label: 'THE MACHINE', href: '#ai' },
  { label: 'ENGAGEMENTS', href: '#tour' },
];

export const TOUR_DATES: TourDate[] = [
  { id: '1', date: 'OCT 15', city: 'BERLIN', venue: 'Berghain / Panorama Bar', status: 'Sold Out' },
  { id: '2', date: 'OCT 18', city: 'LONDON', venue: 'Royal Albert Hall', status: 'Sold Out' },
  { id: '3', date: 'OCT 22', city: 'TOKYO', venue: 'Blue Note', status: 'Available' },
  { id: '4', date: 'OCT 25', city: 'SEOUL', venue: 'Sejong Center', status: 'Few Left' },
  { id: '5', date: 'NOV 02', city: 'NEW YORK', venue: 'MoMA PS1', status: 'Available' },
];

export const RELEASES: Release[] = [
  { id: '1', title: 'Opus I: Synaptic Failure', year: '2024', type: 'LP', coverUrl: 'https://picsum.photos/600/600?grayscale' },
  { id: '2', title: 'Study No. 2: Void Structures', year: '2023', type: 'EP', coverUrl: 'https://picsum.photos/601/601?grayscale&blur=1' },
  { id: '3', title: 'The Ivor Novello Suite', year: '2022', type: 'LP', coverUrl: 'https://picsum.photos/602/602?grayscale&blur=2' },
];