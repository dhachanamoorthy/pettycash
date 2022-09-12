import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { TextField, Paper, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers";
import { Transx } from "../../constants/Transx";
import { Expense,Income } from "../../constants/Category";
export const Report = () => {
  const [value, setValue] = useState(dayjs());
  let transactions = [
    {
      id:1,
      category:Expense.BILLS,
      transType:Transx.EXPENSE,
      amount:500,
      notes:"electricity"
    },
    {
      id:2,
      category:Expense.BILLS,
      transType:Transx.EXPENSE,
      amount:500,
      notes:""
    },
    {
      id:3,
      category:Expense.ENTERTAINMENT,
      transType:Transx.EXPENSE,
      amount:200,
      notes:"movie"
    },
    {
      id:4,
      category:Expense.FOOD,
      transType:Transx.EXPENSE,
      amount:300,
      notes:"electricity"
    },
    {
        id:1,
        category:Expense.BILLS,
        transType:Transx.EXPENSE,
        amount:500,
        notes:"electricity"
      },
      {
        id:2,
        category:Expense.BILLS,
        transType:Transx.EXPENSE,
        amount:500,
        notes:""
      },
      {
        id:3,
        category:Expense.ENTERTAINMENT,
        transType:Transx.EXPENSE,
        amount:200,
        notes:"movie"
      },
      {
        id:4,
        category:Expense.FOOD,
        transType:Transx.EXPENSE,
        amount:300,
        notes:"electricity"
      }
  ];
  let [transactionId, setTransactionId] = useState(transactions.length);
  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "category",
      headerName: "Category",
      width: 90,
      editable: true,
    },
    {
      field: "transType",
      headerName: "Type",
      width: 90,
      editable: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 80,
      editable: true,
    },
  ];

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Container>
      <Paper sx={{width:"100%", mt: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CalendarPicker
            // displayStaticWrapperAs="mobile"
            date={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            dayOfWeekFormatter={(day) => `${day}.`}
            // toolbarFormat="ddd DD MMMM"
            // showToolbar
          />
        </LocalizationProvider>
      </Paper>
      <Paper sx={{height:330, mt: 1 }}>
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
