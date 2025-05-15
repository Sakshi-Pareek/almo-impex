import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

const AnimatedText = ({ text, className = '', once = true, delay = 0 }: AnimatedTextProps) => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.05,
      },
    }),
  };

  return (
    <motion.span 
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-1.5">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              custom={charIndex}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;