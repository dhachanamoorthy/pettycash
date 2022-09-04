import { useState } from "react";
import { Box, Container, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Transx } from "../../constants/Transx";
export const Add = (props) => {
  const [alignment, setAlignment] = useState(Transx.EXPENSE);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container sx={{ "& > :not(style)": { m: 1 } }}>
      <Box>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="TRansaction Type"
        >
          <ToggleButton value={Transx.EXPENSE}>{Transx.EXPENSE}</ToggleButton>
          <ToggleButton value={Transx.INCOME}>{Transx.INCOME}</ToggleButton>
        </ToggleButtonGroup>
        <></>
      </Box>
    </Container>
  );
};
