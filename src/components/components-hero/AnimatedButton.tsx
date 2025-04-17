import { styled, keyframes } from "@mui/system";
import { useTheme } from "@mui/material";
import React from "react";


//Componente de teste***

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const AnimatedButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  const theme = useTheme(); // acessa o tema com custom.gradientBackground

  const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

  const AnimatedButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "0.4s",
    cursor: "pointer",
    "&:hover": {
      //background: ,
      backgroundSize: "400% 400%",
      animation: `${animatedGradient} 6s ease infinite`,
      color: "#fff",
    },
  }));

  return (
    <AnimatedButton theme={theme} onClick={onClick}>
      {children}
    </AnimatedButton>
  );
};

export default AnimatedButton;
