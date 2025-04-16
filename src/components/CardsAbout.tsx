import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import ComputerIcon from "@mui/icons-material/Computer";
import theme from "../theme";
import { Grid } from "@mui/material";

const cards = [
  {
    id: 1,
    title: "Formação",
    description: `
    Análista de sistemas formado pela Universidade Presbiteriana Mackenzie
    
    `,
    complement: "Pós graduado em Arquitetura de software",
    icon: <TextIncreaseIcon fontSize="large" />,
  },
  {
    id: 2,
    title: "Atuação",
    description: "Desenvolvedor .Net, atuando como front-end e Back-end.",
    icon: <ComputerIcon fontSize="large" />,
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      paddingTop={{ xs: "500px", sm: "40rem", md: "150px"}}
      paddingBottom={{ xs: "30px", md: "10px" }}
      sx={{
        color: "white",
        textAlign: "center",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        px: 2,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid key={index} size={{ xs: 12, md: 4, sm: 6, lg: 4 }}>
            <Card
              sx={{
                background:
                  "linear-gradient(black, #000000e2) padding-box, linear-gradient(45deg, purple 5%, blue 45%, #ee82ee) border-box",
                border: "2px solid transparent",
                borderRadius: "15px",
                boxShadow: "1.5px 2px 4px 1px black",
                flex: 1, // ocupa o mesmo espaço
                display: "flex",
                flexDirection: "column",
                height: "100%", // permite crescer igualmente
              }}
            >
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  "&:hover": {
                    background: theme.custom.gradientBackground,
                    cursor: "inherit",
                  },
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    color="primary.contrastText"
                  >
                    {card.icon}
                    <br />
                    {card.title}
                  </Typography>
                  <Typography color="primary.contrastText">
                    <br />
                    {card.description}
                  </Typography>
                  <Typography color="primary.contrastText">
                    {card.complement}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SelectActionCard;
