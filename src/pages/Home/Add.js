import { useState } from "react";
import {
  Box,
  Container,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { Transx } from "../../constants/Transx";
import { ExpenseCategory } from "../../constants/ExpenseCategory";
import { IncomeCategory } from "../../constants/IncomeCategory";
export const Add = (props) => {
  const [transType, setAlignment] = useState(Transx.EXPENSE);

  const handleTransTypeChange = (event, newTransType) => {
    setAlignment(newTransType);
  };

  const [category, setCategory] = useState(ExpenseCategory.FOOD);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container
      sx={{
        "& > :not(style)": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          m: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <FormControl>
          <ToggleButtonGroup
            color="primary"
            value={transType}
            exclusive
            onChange={handleTransTypeChange}
            aria-label="TRansaction Type"
          >
            <ToggleButton value={Transx.EXPENSE}>{Transx.EXPENSE}</ToggleButton>
            <ToggleButton value={Transx.INCOME}>{Transx.INCOME}</ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
          <InputLabel id="demo-simple-select-label" sx={{ ml: 1 }}>
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            // value={age}
            label="Age"
            onChange={handleCategoryChange}
          >
            {transType === Transx.EXPENSE
              ? Object.keys(ExpenseCategory).map((key, value) => {
                  console.log(key, value);
                  <MenuItem value={key}>{value}</MenuItem>;
                })
              : Object.keys(IncomeCategory).map((key, value) => {
                  <MenuItem value={key}>{value}</MenuItem>;
                })}
          </Select>
        </FormControl>
        <TextField id="demo-helper-text-misaligned" label="Amount" />
        <TextField id="demo-helper-text-misaligned" label="Note" />
        <Stack spacing={2} direction="row">
          <Button variant="contained">Done</Button>
          <Button variant="contained">Add</Button>
        </Stack>
      </Box>
    </Container>
  );
};
