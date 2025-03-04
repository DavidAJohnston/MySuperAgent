// pages/index.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [isActivated, setIsActivated] = useState(false);
  const [brainPower, setBrainPower] = useState(850);

  const steps = [
    {
      title: "Welcome to Your Super Agent",
      description: "Your AI companion designed for autonomous task execution and continuous learning.",
      icon: "🤖"
    },
    {
      title: "Activate Your Agent",
      description: "Enable your Super Agent to start processing tasks and learning from your interactions",
      icon: "⚡"
    },
    {
      title: "Manage Brain Power",
      description: "Monitor and optimize your cognitive resource allocation (1 BP = 1 trillion neural operations)",
      icon: "🧠"
    }
  ];

  const activateAgent = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsActivated(true);
    setBrainPower(1000); // Start with full capacity
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <nav className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">MySuperAgent.io</h1>
          <div className="flex items-center space-x-4">
            <span className="bg-slate-700 px-4 py-2 rounded-lg">
              Brain Power: {brainPower} BP
            </span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Amplify Your Cognitive Capacity
          </motion.h1>
          <p className="text-xl text-slate-300 mb-8">
            Autonomous AI Agents powered by measurable neural computation
          </p>
          
          {!isActivated ? (
            <motion.button               whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={activateAgent}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Activate Super Agent
            </motion.button>
          ) : (
            <div className="space-y-8">
              <div className="inline-block bg-green-600 px-6 py-3 rounded-lg">
                🎉 Agent Active - 1000 BP Allocated
              </div>
              <div className="w-full max-w-2xl mx-auto bg-slate-700 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span>Brain Power Utilization</span>
                  <span>{brainPower} / 1000 BP</span>
                </div>
                <motion.div 
                  className="h-4 bg-slate-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                >
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${(brainPower / 1000) * 100}%` }}
                  ></div>
                </motion.div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div               key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
