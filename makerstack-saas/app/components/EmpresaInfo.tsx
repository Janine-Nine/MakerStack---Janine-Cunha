type Props = {
  empresa: string;
  cnpj: string;
  email: string;
  telefone: string;
};

export default function EmpresaInfo({
  empresa,
  cnpj,
  email,
  telefone
}: Props) {

  return (

    <div className="empresa-card">

      <h2>{empresa}</h2>

      <div className="empresa-grid">

        <div>
          <strong>CNPJ</strong>
          <p>{cnpj}</p>
        </div>

        <div>
          <strong>Email</strong>
          <p>{email}</p>
        </div>

        <div>
          <strong>Telefone</strong>
          <p>{telefone}</p>
        </div>

      </div>

    </div>

  );

}