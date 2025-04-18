import { Button, Grid, ButtonProps } from "@mui/material";
import { ReactNode } from "react";
import theme from "../../theme";

interface ButtonProjectsProps extends ButtonProps {
    children: ReactNode;
  }

const ButtonProjetcs = ({children ,...props}: ButtonProjectsProps) => {
  return (
    <Grid>
      <Button
      {...props}
  sx={{
    position: "relative",
    zIndex: 1, // garante que o conteúdo fique acima das camadas
    overflow: "hidden",
    padding: "10px 15px",
    color: "white",
    backgroundColor: "#000",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px"
    ,

    "&::before": {
      content: '""',
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      background: "linear-gradient(45deg, red, yellow, lime, cyan, blue, magenta, red)",
      backgroundSize: "400%",
      animation: "glow 5s linear infinite",
      borderRadius: "14px",
      zIndex: -2, // ⬅️ coloca mais abaixo ainda
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: "2px",
      left: "2px",
      right: "2px",
      bottom: "2px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "10px",
      zIndex: -1, // ⬅️ abaixo do conteúdo, acima do before
    },

    "@keyframes glow": {
      "0%": {
        backgroundPosition: "0% 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0% 50%",
      },
    },
  }}
>
  {children}
</Button>

    </Grid>
  );
};
export default ButtonProjetcs;
