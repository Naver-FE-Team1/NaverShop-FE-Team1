import { Stack, Button, useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";

const InputSignUp = () => {
  const mdMatches = useMediaQuery("(min-width:600px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");
  return (
    <Stack direction="row">
      <TextField
        id="filled-basic"
        label="your@email.com"
        variant="filled"
        sx={{
          width: lgMatches ? "354px" : "224px",
          height: "56px",
        }}
      />
      <Button
        variant="contained"
        sx={{
          backGround: "#2A254B",
          width: "118px",
          height: "56px",
          background: "#2A254B",
          fontWeight: 400,
          fontSize: "16px",
          "&:hover": {
            background: "#2A254B",
          },
        }}
      >
        Sign up
      </Button>
    </Stack>
  );
};

export default InputSignUp;
