import { useState } from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";


function App() {

  const defaultHomeValue = 200000

  const [data, setData] = useState({
    homeValue: defaultHomeValue,
    downPayment: defaultHomeValue * 0.2,
    loanAmount: defaultHomeValue * 0.8,
    loanTerm: 30,
    interestRate: 5.0,
  })

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
