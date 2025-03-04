import SuperAgentAvatar from '../components/SuperAgentAvatar';

export default function Dashboard() {
  const morTokens = 1000; // Example value (replace with API data)
  const brainPower = morTokens * 0.1; // 100 units

  return (
    <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
      <h2 className="text-2xl font-bold mb-6">Super Agent Dashboard</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        <SuperAgentAvatar className="border-4 border-super-orange" />
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Brain Power</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-neon-blue h-4 rounded-full"
                style={{ width: `${(brainPower / 200) * 100}%` }}
              ></div>
            </div>
            <p className="mt-2">{brainPower} units</p>
          </div>
          <p className="text-sm text-gray-400">
            Based on {morTokens} MOR tokens deposited (1 MOR = 0.1 Brain Power)
          </p>
          <div className="mt-6 space-y-4">
            <button className="bg-super-orange text-white px-6 py-2 rounded hover:bg-opacity-80 transition">
              Task Assignment
            </button>
            <button className="bg-super-orange text-white px-6 py-2 rounded hover:bg-opacity-80 transition">
              Chat with Super Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
