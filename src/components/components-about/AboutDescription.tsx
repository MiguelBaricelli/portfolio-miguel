import theme from "../../theme";
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
          e sou fascinado por tecnologia.
          <Typography mt={3}>
          Tenho experiência em desenvolvimento Front-end com JavaScript, Bootstrap, Material UI e React. No Back-end, tenho maior afinidade com C#, ASP.NET Core e SQL Server. Também possuo conhecimentos em controle de versão com Git e GitHub. {"\n"} Já desenvolvi projetos como landing pages, sites institucionais e APIs RESTful com ASP.NET Core. Além disso, tenho familiaridade com serviços em nuvem, especialmente AWS e Azure.
          </Typography>
        </Typography>
        <Typography variant="body1" mt={3}>
         Atualmente, estudando ASP.NET com Entity Framework, seguindo o padrão RESTful, com implementação de autenticação via JWT, injeção de dependência e integração com banco de dados SQL Server. Além disso, aprofundando meus conhecimentos em padrões arquiteturais e design patterns para aprimorar a qualidade e escalabilidade das minhas aplicações.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutDescription;
