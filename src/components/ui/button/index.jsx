export default function Button({ type, onClick, children, variant }) {
  return (
    <button
      type={type}
      className={`p-2 rounded-lg text-white mt-2 font-semibold ${variant}`}
    >
      {children}
    </button>
  );
}
