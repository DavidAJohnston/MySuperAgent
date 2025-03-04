export default function SuperAgentAvatar({ className }) {
  return (
    <img
      src="/robot-avatar.png"
      alt="Super Agent Avatar"
      className={`h-48 w-48 object-cover rounded-full ${className || ''}`}
    />
  );
}
