type Props = {
  title?: string;
  value?: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Card({
  title,
  value,
  description,
  children,
}: Props) {

  return (
    <div className="card">
      {(title || value) && (
        <div className="card-header">
          {title && <h3>{title}</h3>}
        </div>
      )}

      <div className="card-body">
        {children ? (
          children
        ) : (
          <>
            {value && <h2>{value}</h2>}
            {description && <p>{description}</p>}
          </>
        )}
      </div>
    </div>
  );

}