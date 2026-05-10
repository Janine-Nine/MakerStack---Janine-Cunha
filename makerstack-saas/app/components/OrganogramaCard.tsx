type Props = {
  setor: string;
  responsavel: string;
  colaboradores: number;
};

export default function OrganogramaCard({
  setor,
  responsavel,
  colaboradores
}: Props) {

  return (

    <div className="organograma-card">

      <div className="org-top">

        <div className="avatar" />

        <div>

          <h3>{setor}</h3>

          <p>{responsavel}</p>

        </div>

      </div>

      <div className="org-footer">

        <span>
          {colaboradores} colaboradores
        </span>

      </div>

    </div>

  );

}