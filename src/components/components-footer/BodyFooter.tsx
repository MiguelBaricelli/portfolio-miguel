import { Typography } from "@mui/material";
import { Grid, Stack } from "@mui/system";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const BodyFooter = () => {
  const icons = [
    { name: "instagram", icon: <InstagramIcon fontSize="large"/>, url: "https://www.instagram.com/miguelbaricelli/" },
    { name: "github", icon: <GitHubIcon fontSize="large"/>, url: "https://github.com/MiguelBaricelli" },
    { name: "linkedin", icon: <LinkedInIcon fontSize="large" />, url: "https://www.linkedin.com/in/miguel-baricelli-8851b9253", }
  ];

  return (
    <Grid margin={0} sx={{
        backgroundColor:"black"
    }}>
      <Grid
        sx={{
          backgroundColor: "#35343421",
          margin: 0,
          pt: 10,
          pb:5
          
          
        }}
      >
        <Stack direction="row" justifyContent="center" spacing={2} gap={7} 
        >
          {icons.map((item, index) => (
            <a style={{color:"white"}} key={`${item.name}-${index}`} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </Stack>
        <Typography color="white" textAlign="center" pt={10}>
         <p> &copy; 2025 Miguel Baricelli </p> 
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BodyFooter;
