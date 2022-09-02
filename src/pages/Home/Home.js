import SpeedDial from "@mui/material/SpeedDial";
import AddIcon from "@mui/icons-material/Add";
import "./Home.css";
import { Container, Paper, Divider } from "@mui/material";
export const Home = () => {
  const handleclick = () => {
    console.log("clicked");
  };

  return (
    <Container sx={{ "& > :not(style)": { m: 1 } }}>
      <Paper className="card income" sx={{ "& > :not(style)"  : { m: 1 } }}>
        <div className="name">Income</div>
        <div className="value">$40</div>
      </Paper>
      <Paper className="card expense" sx={{ "& > :not(style)": { m: 1 } }}>
        <div className="name">Expense</div>
        <div className="value">$40</div>
      </Paper>
      <Divider />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 72, right: 16 }}
        icon={<AddIcon />}
        onClick={handleclick}
      ></SpeedDial>
    </Container>
  );
};
