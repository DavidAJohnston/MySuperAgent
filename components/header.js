export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-800 bg-opacity-50 backdrop-blur-md fixed top-0 z-10">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/robot-icon.png" alt="My Super Agent" className="h-8 w-8" />
          <h1 className="text-xl font-bold">My Super Agent</h1>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-neon-blue">Home</a></li>
          <li><a href="#" className="hover:text-neon-blue">About</a></li>
          <li><a href="#" className="hover:text-neon-blue">FAQ</a></li>
          <li><a href="#" className="hover:text-neon-blue">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}
