import { Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { constants } from "../../../Helpers/constantsFile"

const UserCustomers = (props) => {

  const [customers, setCustomers] = useState()

  let total = 0
  customers?.map(c => {
    total += c.balance
  })

  useEffect(()=> {
    const readUserCustomers = (id) => {
      axios.get(`${constants.baseUrl}/customers/user-customers-with-transactions/${props.instance._id}`, 
      {
         headers: {
           'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTcwNDQ4ODU1NCwiZXhwIjoxNzA3MDgwNTU0fQ.K-iHFwhEG5rFN8PF6vsRDeQeo0XEj63vIu8pk_dSc7E"
         },
       }).then((res) => {
            console.log(res?.data?.data)
            setCustomers(res?.data?.data?.customers)
       }).catch((err) => {
         alert(err.response.data.message);
       });
    }

    readUserCustomers()
  }, [])

  return (
    <div style = {{
      width: "95%",
      margin: "20px auto",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>

     <Typography style = {{fontWeight: "bold",
    fontSize: "18px"}}>User Customers</Typography>

{customers?.map((customer, index) => {
          
          return <div style = {{ display: "flex",
          cursor: "pointer",
          flexDirection: "row",
          padding: "15px",
          alignItems: "center",
          borderRadius: "10px", background:"white"}}>

            <Typography style = {{fontSize: "16px", flex: 0.2, color: "grey"}}> {index + 1}.</Typography>
            <Typography style = {{fontSize: "16px", flex: 2}}> {customer.name}</Typography>
            <Typography style = {{fontSize: "16px", flex: 1,}}> {customer.phone}</Typography>
            <Typography style = {{fontSize: "16px", flex: 1}}> {customer.balance?.toFixed(2)}</Typography>
          
            </div>
        })}

<div style = {{display: "flex", flexDirection: "row", gap: "10px",
      alignSelf: "end"}}>
        <Typography style = {{fontSize: "20px", flex: 0.2, color: "grey"}}> total:</Typography>
        <Typography style = {{fontSize: "20px", flex: 0.2, fontWeight: "bold"}}> ${total?.toFixed(2)}</Typography>
        </div>
    </div>
  )
}

export default UserCustomers