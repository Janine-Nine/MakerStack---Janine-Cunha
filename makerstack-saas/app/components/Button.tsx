"use client";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  type = "button"
}: Props) {

  return (
    <button
      type={type}
      onClick={onClick}
      className="primary-button"
    >
      {children}
    </button>
  );

}