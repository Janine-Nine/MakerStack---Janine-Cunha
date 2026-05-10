"use client";

type Props = {
  title: string;
  children: React.ReactNode;
  open: boolean;
};

export default function Modal({
  title,
  children,
  open
}: Props) {

  if (!open) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

          <h2>{title}</h2>

        </div>

        <div className="modal-content">
          {children}
        </div>

      </div>

    </div>

  );

}