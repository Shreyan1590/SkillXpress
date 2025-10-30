'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 48, showText = true, className }) => {
  const { theme } = useTheme();

  const logoSrc =
    theme === 'dark'
      ? '/assets/logo-dark.png' // dark mode logo
      : '/assets/logo-light.png'; // light mode logo

  return (
    <Link href="/" className={`flex items-center gap-2 ${className || ''}`}>
      <motion.div
        initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="flex items-center"
      >
        <Image
          src={logoSrc}
          alt="SkillXpress Logo"
          width={size}
          height={size}
          priority
          className="rounded-full shadow-md dark:shadow-lg dark:shadow-blue-900/30"
        />
      </motion.div>

      {showText && (
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent tracking-tight"
        >
          SkillXpress
        </motion.span>
      )}
    </Link>
  );
};

export default Logo;
