import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const pages = ["Home", "About", "Products", "Services"];

function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", px: 4 }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rika
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "30%",
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
