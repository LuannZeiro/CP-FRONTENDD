"use client";

import './globals.css'; 
import { ReactNode, useEffect, useState } from 'react';
import Menu from '../app/components/Menu';
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={styles.container}>
        <header className={styles.header}>
          <div>
            <h2>CLIMA DO LUANN - CP</h2>
          </div>
          <Menu />
        </header>
        <main className={styles.content}>
          {isClient ? children : null}
        </main>
      </body>
    </html>
  );
}
