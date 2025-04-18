import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import foto from "../../assets/images/Minha_foto_formal-removebg-preview.png";
import theme from "../../theme";
import ButtonProjetcs from "./ButtonProjects";

function CardsProjects() {
  const dataProjects = [
    {
      id: 1,
      image: foto,
      name: "Projeto 1",
      description: "Descrição do projeto 1",
      link: "https://github.com/MiguelBaricelli/.NetFirstWebApi",
    },
    {
      id: 2,
      image: foto,
      name: "Projeto 2",
      description:
        "Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2",
      link: "https://github.com/MiguelBaricelli/.NetFirstWebApi",
    },
    {
      id: 3,
      image: foto,
      name: "Projeto 3",
      description:
        "Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2",
      link: "https://github.com/MiguelBaricelli/.NetFirstWebApi",
    },
    {
      id: 4,
      image: foto,
      name: "Projeto 4",
      description:
        "Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2",
      link: "https://github.com/MiguelBaricelli/.NetFirstWebApi",
    },
    {
      id: 4,
      image: foto,
      name: "Projeto 4",
      description:
        "Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2",
      link: "https://github.com/MiguelBaricelli/.NetFirstWebApi",
    },
    {
      id: 4,
      image: foto,
      name: "Projeto 4",
      description:
        "Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2 Descrição do projeto 2",
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
          fontFamily="Montserrat"
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
              <ButtonProjetcs href={project.link}>Ver no GitHub</ButtonProjetcs>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsProjects;
