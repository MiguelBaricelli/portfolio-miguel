import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import theme from "../theme";


const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({  }) => ({
    width: "100%",
    display:"flex",
    justifyContent:"space-evenly",
    backgroundColor: theme.palette.primary.main
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
