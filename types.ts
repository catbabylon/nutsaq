export interface TourDate {
  id: string;
  date: string;
  city: string;
  venue: string;
  status: 'Available' | 'Sold Out' | 'Few Left';
}

export interface Release {
  id: string;
  title: string;
  year: string;
  type: 'LP' | 'EP' | 'Single';
  coverUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
