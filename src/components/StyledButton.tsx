import { styled } from "@mui/material";
import { ReactNode } from "react";




interface StyledButtonProps {
  children: ReactNode,
  onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {

{



    const StyledButton = styled("button")(({ theme }) => ({
      backgroundColor: "transparent",
      border: `1px solid ${theme.palette.primary.contrastText}`,
      borderRadius: "3px",
      padding: "5px",
      width: "100%",
      color: theme.palette.primary.contrastText,
      display:"inline-flex",
      alignItems: "center",
      justifyContent:"center",
      gap:"10px",
      transition:"0.4s",
      "&:hover": {
        //backgroundColor: theme.palette.primary.main,
        background: theme.palette.primary.contrastText,
        color: "black",
      },
    }));
    return (
      <>
        <StyledButton onClick={onClick}>{children}</StyledButton>
       
      </>
    );
  };
};

export default StyledButton;
