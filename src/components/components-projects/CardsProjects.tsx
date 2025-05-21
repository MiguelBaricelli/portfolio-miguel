import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import foto1 from "../../../src/assets/images/img-infinitybaritech-1.png"
import foto2 from "../../../src/assets/images/img-infinitybaritech-2.png"
import foto3 from "../../../src/assets/images/img-infinitybaritech-3.png"
import foto4 from "../../../src/assets/images/img-landingPage-Inphone.png"
import foto5 from "../../../src/assets/images/img-dentista-1.png"
import theme from "../../theme";
import ButtonProjetcs from "./ButtonProjects";

function CardsProjects() {
  const dataProjects = [
    {
      id: 1,
      image: foto1,
      name: "Site InfinityBaritech",
      description: "Site feito em Bootstrap para empresa de tecnologia. ",
      link: "https://infinitybaritech.com.br/",
    },
    {
      id: 2,
      image: foto2,
      name: "Blog Online",
      description:
        "Site simples para compartilhar ideias, dicas e histórias, com posts organizados e design limpo.",
      link: "https://blog.infinitybaritech.com.br/",
    },
    {
      id: 3,
      image: foto3,
      name: "Cardápio Online",
      description:
        "Site para restaurantes exibirem seus pratos, preços e promoções, com atualização fácil e visual atrativo. (ATUALMENTE EM ATUALIZAÇÃO E MIGRAÇÃO)",
      link: "https://cardapio.infinitybaritech.com.br/",
    },
    {
      id: 4,
      image: foto4,
      name: "Landing Page para App",
      description:
        "Página única com destaque para adquirir o app, explicações e benefícios.",
      link: "https://inphone.infinitybaritech.com.br/",
    },
     {
      id: 4,
      image: foto5,
      name: "Site para dentista credenciado",
      description:
        "Site profissional com informações de serviços, agendamento online e contato, transmitindo confiança e credibilidade.",
      link: "https://github.com/MiguelBaricelli/.NetFirstWebApi",
    },
    // você pode adicionar mais projetos aqui
  ];

  return (
    <Grid
      container
      spacing={2}
      textAlign="center"
      alignItems="stretch"
      justifyContent="center"
      sx={{
        backgroundColor: theme.palette.primary.main,
        pt: "220px",
        pb: "100px",
        gap: 1,
      }}
    >
      {/* Título acima dos cards */}
      <Grid size={12}>
        <Typography
        
          variant="h3"
          component="h2"
          gutterBottom
          fontFamily="Montserrat, sans-serif"
          fontWeight={200}
          color="white"
          sx={{ padding: "80px" }}
        >
          My Projects
        </Typography>
      </Grid>

      {/* Cards dos projetos */}
      {dataProjects.map((project) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          key={project.id}
          sx={{ display: "flex" }}
        >
          <Card
            sx={{
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "100%",
              borderRadius: 3,
              backgroundColor: theme.palette.primary.main,
              border: "2px solid",
              borderImage: `${theme.custom.gradientBackground} 1`,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              alt={project.name}
              height="300"
              image={project.image}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
              >
                {project.name}
              </Typography>
              <Typography variant="body2" color="white">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", mt: "30px" }}>
              <ButtonProjetcs href={project.link}>Ver Projeto</ButtonProjetcs>
             {/*  <ButtonProjetcs href={project.link}>Ver no GitHub</ButtonProjetcs> */}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsProjects;
