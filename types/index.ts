export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Message {
  id: number;
  text: string;
  author?: string;
}

export interface Photo {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}