import { AppBar, Container, Toolbar, Box, Button } from "@mui/material";
import logo from "../logo.png";

// Navigation Bar
const NavBar = () => {
  const btns = ["About Us", "Sign Up", "Sign In", "Blogs"];
  const AppBarStyle = {
    backgroundColor: "#143F6B",
    color: "white",
    width: "90%",
    boxShadow: "8",
    mx: "auto",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  return (
    <AppBar position="static" sx={AppBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <img src={logo} alt="bookmarker" />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex", justifyContent: "end" },
            }}
          >
            {btns.map((btn) => {
              return (
                <Button
                  key={btn}
                  sx={{ mx: 1, color: "white", display: "block" }}
                >
                  {btn}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
