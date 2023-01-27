import { Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

const Calculator = () => {
 
    const [revenue, setRevenue] = useState()
    const [income, setIncome] = useState({
        axmad: 0,
        group: 0
    })

    console.log(revenue)

    const calculator = () => {
        let axmad = (revenue / 100) * 27
        let group = (revenue / 100) * 36.5
        setIncome({
            axmad: axmad,
            group: group
        })
    }

    const searchStyle = { width: "150px", height: "40px",
    padding: "12px", fontSize: "16px", borderRadius: "8px",
    background: "white", border: "1px solid black",
  }

  return (
    <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        display: "flex",
        gap: "32px",
        flexDirection: "column",
      }}
    >
      <Typography style={{ fontWeight: "600", fontSize: "25px" }}>
        {" "}
        Revenue Calculator{" "}
      </Typography>

     <div style = {{display: "flex", flexDirection: "row", gap: "15px"}}>

      <input
      type="number"
      placeholder="Enter Revenue"
      style={searchStyle}
      onChange={(e) => setRevenue(e.target.value)}
    />

    
<Button
          style={{
            width: "135px",
            fontSize: "16px",
            background: "#19274B",
            color: "white",
          }}
          type="submit"
          variant="contained"
          onClick = {calculator}
        >
          Calculate
        </Button>
     </div> 

      <Team income = {income}/>
    </div>
  );
};




const Team = (props) => {
console.log(props.income)

  const data = [
    { name: "Axmad Maxamad", value: props.income.axmad },
    { name: "Cabdimajid Macalin", value: props.income.group },
    { name: "Cabdullahi Axmad", value: props.income.group },
  ];
  return (
    <div style={{ width: "30%" }}>
      {data.map((d) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "3px",
            }}
          >
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {" "}
              {d.name}:
            </Typography>
            <Typography
              style={{
                fontSize: "18px",
              }}
            >
              {" "}
              {d.value}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Calculator;
