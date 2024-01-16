import { Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const Analysis = () => {

    const [customers, setCustomers] = useState()

    const data = [
        {name: "ISKAASHI SUPERMARKET", phone: "0616549198",
    customers: 45, date: "2023/11/23"}
    ]

    const readCustomer = () => {
        axios.get("https://sharp-hamilton.45-90-223-247.plesk.page/api/v1/customers/user-customers-with-transactions/655dc1ae4e623d6f42b21f85", 
       {
          headers: {
            'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTY5OTI2ODYyOSwiZXhwIjoxNzAxODYwNjI5fQ.GrJPxq0BfJkXH4vil9an3vt5eo_LXY60LcGuui656bg"
          },
        }).then((res) => {
             alert("Successfully Read")
             console.log(res?.data?.data)
             setCustomers(res?.data?.data?.customers)
        }).catch((err) => {
          alert(err.response.data.message);
        });
      }

    

    return <div style = {{
        width: "95%",
        margin: "20px auto",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
    }}>
       {data?.map(d => {
        return <div style = {{background: "white", borderRadius: "10px",
        width: "31%", padding: "15px", display: "flex", flexDirection: "column",
        gap: "15px"}}>

            <div style = {{display: "flex", flexDirection: "column",
        gap: "0px"}}>
            <Typography style =  {{fontSize: "18px",
        fontWeight: "bold"}}> {d.name}</Typography>
            <Typography style =  {{fontSize: "18px",
        fontWeight: "normal", color: "#888484"}}> {d.phone}</Typography>
        </div>
            <div style = {{display: "flex", flexDirection: "column",
        gap: "0px"}}>
            <Typography style =  {{fontSize: "16px",
        fontWeight: "normal"}}> customers number: {d.customers}</Typography>
            <Typography style =  {{fontSize: "16px",
        fontWeight: "normal", color: "#888484"}}> {d.date}</Typography>
        </div>

            </div>
       })}
    </div>
}

export default Analysis