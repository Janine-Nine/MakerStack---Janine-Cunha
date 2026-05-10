export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        padding: '10px 16px',
        background: '#4f46e5',
        color: '#fff',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

export { Button };
