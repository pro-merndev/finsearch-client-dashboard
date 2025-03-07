import { ButtonProps, Button as MantineButton } from "@mantine/core";

const Button = ({ children, style, ...props }: ButtonProps) => {
  const styles: any = {
    ...style,
  };
  if (props.variant === "outline") {
    styles.borderColor = "#DEE2E6";
    styles.color = "black";
  }
  return (
    <MantineButton
      style={{
        fontWeight: "normal",
        ...styles,
      }}
      {...props}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
