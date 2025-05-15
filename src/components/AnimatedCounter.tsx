import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        countRef.current += increment;
        if (countRef.current >= end) {
          countRef.current = end;
          clearInterval(timer);
        }
        setCount(Math.floor(countRef.current));
      }, 16);

      return () => {
        clearInterval(timer);
      };
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl xl:text-4xl font-bold text-[#006C70]">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  );
};

export default AnimatedCounter;