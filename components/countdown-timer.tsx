interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  
  interface CountdownTimerProps {
    targetDate: string;
  }
  
  import { useState, useEffect } from 'react';
  
  const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
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
          clearInterval(timer);
          return;
        }
  
        const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes: number = Math.floor((difference / (1000 * 60)) % 60);
        const seconds: number = Math.floor((difference / 1000) % 60);
  
        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(timer);
    }, [targetDate]);
  
    if (isLive) {
      return (
        <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm">
          🚀 <span className="ml-2 text-[#00faa7]">Presale is Live</span>
        </div>
      );
    }
  
    return (
      <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-white">
        🚀 <span className="ml-2">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    );
  };
  
  export default CountdownTimer;