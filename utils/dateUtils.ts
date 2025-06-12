export const calculateTimeLeft = (targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export const formatNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};