export default function TestPage({ params }) {
  const { token } = params;

  return (
    <div style={{ padding: 20 }}>
      <h1>Teste de Token</h1>
      <p>Token recebido:</p>
      <code>{token}</code>
    </div>
  );
}