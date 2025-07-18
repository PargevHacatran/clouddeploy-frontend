import "./globals.css";

import Head from "next/head";

import StoreProvider from "./StoreProvider";

interface ILandingLayout {
  children: React.ReactNode;
  title: string;
}

export default function AppLayout({ children, title }:ILandingLayout) {
  return (
    <>
      <Head>
        {/* Orbitron */}
          
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"/>

        {/* Inter */}
          
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />

        <title>{ title }</title>
      </Head>
      
      <StoreProvider>
        <div className="antialiased">
          { children }
        </div>
      </StoreProvider>
    </>
  );
}