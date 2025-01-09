interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  liveText?: string;
  onStateChange?: (isLive: boolean) => void;
}

import { useState, useEffect } from 'react';

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  liveText = "MINT",
  onStateChange
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    const target: Date = new Date(targetDate);

    const timer: NodeJS.Timeout = setInterval(() => {
      const now: Date = new Date();
      const difference: number = target.getTime() - now.getTime();

      if (difference <= 0) {
        setIsLive(true);
        onStateChange?.(true); // Notify parent component
        clearInterval(timer);
        return;
      }

      const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes: number = Math.floor((difference / (1000 * 60)) % 60);
      const seconds: number = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      onStateChange?.(false); // Notify parent component
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onStateChange]);

  if (isLive) {
    return liveText;
  }

  return `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
};

export default CountdownTimer;