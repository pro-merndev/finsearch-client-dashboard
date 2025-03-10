import type React from "react";

export const DraggablePopoverButton = ({
  onClick,
  icon,
  text,
  isBold,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  isBold?: boolean;
}) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      width: "100%",
      border: "none",
      background: "none",
      cursor: "pointer",
      textAlign: "left",
      fontWeight: isBold ? "bold" : "normal",
      fontSize: "14px",
    }}
  >
    {icon}
    <span>{text}</span>
  </button>
);
