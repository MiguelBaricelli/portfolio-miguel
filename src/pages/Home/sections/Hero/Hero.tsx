import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/Minha_foto_formal-removebg-preview.png";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up('xs')]: {
      paddingTop: "100px"
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0px"
    }
  }));

  const StyledImage = styled("img")(() => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position={"relative"}>
                <Box position={"absolute"} width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
                </Box>
                <Box position={"relative"} textAlign={"center"}>
                <StyledImage src={Avatar} />
                </Box>
              </Box>
             
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                textAlign={"center"}
                variant="h1"
                pb={2}
              >
                Miguel Baricelli
              </Typography>
              <Typography
                textAlign={"center"}
                variant="h2"
                color="theme.custom.gradientBackground"
                sx={{
                  background: theme.custom.gradientBackground,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                pb={3}
              >
                Software Developer
              </Typography>
              <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                spacing={3}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  
                  <StyledButton onClick={() => console.log("foi")}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <StyledButton onClick={() => console.log("foi2")}>
                    <MailIcon />
                    <Typography>Contact</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
