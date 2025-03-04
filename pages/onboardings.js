import { useState } from 'react';
import SuperAgentAvatar from '../components/SuperAgentAvatar';

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handleComplete = () => {
    onComplete();
  };

  return (
    <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl w-full">
      {step === 1 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to My Super Agent</h2>
          <p className="mb-6">
            Your Super Agent is an advanced AI companion designed to enhance your productivity and decision-making, powered by Brain Power.
          </p>
          <SuperAgentAvatar className="mx-auto mb-6" />
          <button
            onClick={handleNext}
            className="bg-super-orange text-white px-6 py-2 rounded hover:bg-opacity-80 transition"
          >
            Get Started
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
          <p className="mb-6">Sign up or log in to activate your Super Agent.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleNext}
            className="bg-super-orange text-white px-6 py-2 rounded hover:bg-opacity-80 transition"
          >
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Activate Your Super Agent</h2>
          <p className="mb-6">Click below to activate your AI companion.</p>
          <SuperAgentAvatar className="mx-auto mb-6" />
          <button
            onClick={handleNext}
            className="bg-super-orange text-white px-6 py-2 rounded hover:bg-opacity-80 transition"
          >
            Activate Super Agent
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Unlock Your Brain Power</h2>
          <p className="mb-6">
            Brain Power is measured as your MOR tokens × 0.1. Deposit tokens to unlock more capabilities!
          </p>
          <SuperAgentAvatar className="mx-auto mb-6 border-4 border-super-orange" />
          <button
            onClick={handleComplete}
            className="bg-super-orange text-white px-6 py-2 rounded hover:bg-opacity-80 transition"
          >
            Enter Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
