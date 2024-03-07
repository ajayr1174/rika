import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          bgcolor: "#fafafa",
          padding: "2rem 6rem",
          height: "88vh",
        }}
      >
        <Box sx={{ width: "60%", px: 8, mt: 10 }}>
          <Typography variant="h1" sx={{ letterSpacing: "1.2rem" }}>
            RIKA
          </Typography>
          <Typography variant="h6">
            is a burgeoning startup dedicated to prioritizing human safety and
            advocating for individual rights. Recognizing the alarming surge in
            violence and sexual assault within our nation, we have made it our
            mission to take a stand against such atrocities. Our aim is to
            cultivate a secure environment where every individual can thrive
            without fear or threat. We are committed to fostering a community
            where the safety and well-being of each and every member are
            paramount.
          </Typography>
        </Box>
        <Box></Box>
      </Box>

      <Box sx={{ padding: "2rem 6rem", textAlign: "center" }}>
        <Box>
          <Typography variant="h4" color="initial">
            Call to action
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="initial">
            Stay tuned for our furthur events and announements.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: "2rem 6rem", textAlign: "center" }}>
        <Box>
          <Typography variant="h4" color="initial">
            Upcoming Events
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="initial">
            “Shielding Spirit”- A safety awareness campaign for humanity
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
