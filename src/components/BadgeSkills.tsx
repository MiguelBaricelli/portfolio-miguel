import theme from "../theme";
import Paper from "@mui/material/Paper";
import { Stack, styled } from "@mui/material";

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
  { name: "React", class: "devicon-react-original" },
  { name: "C#", class: "devicon-csharp-plain" },
  { name: ".NETCORE", class: "devicon-dotnetcore-plain" },
  { name: "MYSQL", class: "devicon-mysql-original" },
  { name: "AWS", class: "devicon-amazonwebservices-plain-wordmark" },
  { name: "GITHUB", class: "devicon-github-original" },
  { name: "MATERIALUI", class: "devicon-materialui-plain" },
  { name: "TAIL", class: "devicon-tailwindcss-original" },
  { name: "RIDER", class: "devicon-rider-plain" },
];

const BadgeSkills = () => {
    return (
      <Stack
        sx={{
          backgroundColor: theme.palette.primary.main,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        {icons.map((icon, index) => (
          <Item key={`${icon.name}-${index}`}>
            <i className={icon.class} style={{ fontSize: 40 }}></i>
          </Item>
        ))}
      </Stack>
    );
  };
export default BadgeSkills;
