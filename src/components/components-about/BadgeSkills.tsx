import theme from "../../theme";
import Paper from "@mui/material/Paper";
import { Box, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({}) => ({
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  borderRadius: 8,
  border: "2px solid transparent",
  backgroundImage: `
      linear-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.dark}),
      ${theme.custom.gradientBackground}
    `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  transition: "0.3s ease",

  "&:hover": {
    backgroundImage: `
        linear-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.dark}),
        ${theme.custom.gradientBackground}
      `,
    boxShadow: "0 0 10px 2px rgba(0,0,0,0.4)",
  },
}));

const icons = [
  { name: "HTML", class: "devicon-html5-plain" },
  { name: "CSS", class: "devicon-css3-plain" },
  { name: "JavaScript", class: "devicon-javascript-plain" },
  { name: "C#", class: "devicon-csharp-plain" },
  { name: "React", class: "devicon-react-original" },
  { name: ".NETCORE", class: "devicon-dotnetcore-plain" },
  { name: "MYSQL", class: "devicon-mysql-original" },
  { name: "AWS", class: "devicon-amazonwebservices-plain-wordmark" },
  { name: "GIT", class: "devicon-git-plain" },
  { name: "GITHUB", class: "devicon-github-original" },
  { name: "MATERIALUI", class: "devicon-materialui-plain" },
  { name: "TAIL", class: "devicon-tailwindcss-original" },
  { name: "RIDER", class: "devicon-rider-plain" },
];

const BadgeSkills = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        zIndex: 1,
        backgroundColor: theme.palette.primary.main,
        flexDirection: "column", // muda para empilhar vertical
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      
      <Box>
        <h2 style={{ color: "white", marginTop: 10, marginBottom: 20, fontSize: 46, fontFamily: "Montserrat, sans-serif", fontWeight: 200}}> Skills</h2>
      </Box>
  
      {/* Ícones */}
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icons.map((icon, index) => (
          <Item key={`${icon.name}-${index}`}>
            <i className={icon.class} style={{ fontSize: 40 }}></i>
          </Item>
        ))}
      </Stack>
    </Stack>
  );
  
};
export default BadgeSkills;
