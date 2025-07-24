"use client";

import "./globals.css";

interface ILandingLayout {
  children: React.ReactNode;
  title: string;
}

export default function LandingLayout ({ children, title }:ILandingLayout) {
  return (
    <html lang="ru">
      <head>
        {/* Orbitron */}
          
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"/>

        {/* Inter */}
          
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />

        <title>{ title }</title>
      </head>

      <body className="antialiased">
        { children }
      </body>
    </html>
  );
}
