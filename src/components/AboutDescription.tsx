import theme from "../theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const AboutDescription = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 6,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 980,
          borderRadius: 2,
          backgroundColor: "black",
          p: isMobile ? 2 : 4,
          color: "white",
          textAlign: "center",
          border: "3px solid transparent",
          backgroundImage: `
              linear-gradient(black, #000000e2), 
              ${theme.custom.gradientBackground}
            `,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          boxShadow: "0 4px 10px rgba(0,0,0,0.6)",
        }}
      >
        <Typography variant={isMobile ? "h3" : "h4"} gutterBottom>
          <PersonIcon fontSize="large" /> <br />
          Sobre mim
        </Typography>
        <Typography variant="body1">
          Prazer, sou Miguel Baricelli, um Desenvolvedor e estudante de Análise
          e Desenvolvimento de Sistemas na{" "}
          <span style={{ fontWeight: "bold" }}>
            Universidade Presbiteriana Mackenzie{" "}
          </span>{" "}
          e apaixonado por tecnologia desde a infância.
          <Typography mt={3}>
            Tenho experiência com JavaScript, React, Bootstrap, C# ASP.NET Core,
            Git/GitHub e SQL Server, com projetos que incluem landing pages,
            sites institucionais, sistemas/API/ Microsserviços em ASP.NET Core e
            Cloud AWS.
          </Typography>
        </Typography>
        <Typography variant="body1" mt={3}>
          Criei projetos em ASP.NET com Entity FrameWork, no padrão REST, junto
          com token JWT, injeção de dependências, conexão com Banco de dados SQL
          Server.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutDescription;
