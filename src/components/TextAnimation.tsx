import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

export function TextAnimation({firstWord, secondWord}: {firstWord: string, secondWord: string}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1
  });

  const isMobile = useMediaQuery({ maxWidth: 880 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const variant = {
    hidden: { x: isMobile ? '-50%' : '-100%' },
    visible: { x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <motion.div
      ref={ref}
      className="inline flex justify-center text-5xl font-bold gap-4 text-animation overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.h1 variants={variant}>{firstWord}</motion.h1>
      <motion.h1 className="mt-7" variants={variant}>{secondWord}</motion.h1>
    </motion.div>
  );
};