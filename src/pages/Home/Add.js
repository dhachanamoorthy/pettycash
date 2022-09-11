import { useEffect, useState } from "react";
import {
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
  Paper
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Transx } from "../../constants/Transx";
import { Income, Expense } from "../../constants/Category";
export const Add = (props) => {
  const ExpenseCategory = Expense;
  const IncomeCategory = Income;
  let [categories, setCategories] = useState(ExpenseCategory);
  let [transType, setTransxType] = useState(Transx.EXPENSE);
  let [transaction,setTransaction]=useState({});
  let [amount,setAmount]=useState(0);
  let[notes,setNotes]=useState("Notes");
  let transactions = [];
  let [transactionId,setTransactionId]=useState(transactions.length);
  let _id =1;
  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
      field: 'category',
      headerName: 'Category',
      width: 90,
      editable: true,
    },
    {
      field: 'transType',
      headerName: 'Type',
      width: 90,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 80,
      editable: true,
    }
  ];
  const handleTransTypeChange = (event, newTransType) => {
    setTransxType(newTransType);
  };

  let [category, setCategory] = useState(ExpenseCategory.FOOD);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const createSelectOptions = () => {
    let items = [];
    items = Object.keys(categories).map(key =>
      <option value={key}>{categories[key]}</option>
    )
    console.log(items);
    return items;
  }

  const addTransaction=()=>{
    console.log("Called");
    const transaction={
      id:_id,
      category:category,
      amount:amount,
      notes:notes,
      transType:transType
    }
    _id++;
    console.log(transaction);
    transactions.push(transaction);
  }

  useEffect(() => {
    categories = transType === Transx.EXPENSE ? setCategories(ExpenseCategory) : setCategories(IncomeCategory);
    setCategory(transType === Transx.EXPENSE ? ExpenseCategory.FOOD : IncomeCategory.SALARY);
  }, [transType])

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
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingX:2,
          maxHeight:330,
          "& > :not(style)": { m: 1},
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
            {createSelectOptions()}
          </Select>
        </FormControl>
        <TextField id="demo-helper-text-misaligned" label="Amount" onChange={e=>setAmount(e.target.value)}/>
        <TextField id="demo-helper-text-misaligned" label="Note" onChange={e=>setNotes(e.target.value)}/>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Done</Button>
          <Button variant="contained" onClick={addTransaction()}>Add</Button>
        </Stack>
      </Paper>
      <Paper sx={{maxHeight:330}}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
       />
      </Paper>

    </Container>
  );
};
