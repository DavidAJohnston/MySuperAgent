import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Onboarding from '../components/Onboarding';
import Dashboard from '../components/Dashboard';

export default function Home() {
  const [isOnboarded, setIsOnboarded] = useState(false);

  useEffect(() => {
    const onboarded = localStorage.getItem('isOnboarded');
    if (onboarded === 'true') setIsOnboarded(true);
  }, []);

  const handleOnboardingComplete = () => {
    setIsOnboarded(true);
    localStorage.setItem('isOnboarded', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>My Super Agent</title>
        <meta name="description" content="Your advanced AI Super Agent companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {!isOnboarded ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
