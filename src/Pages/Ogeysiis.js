import { Button, TextareaAutosize } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { constants } from "../Helpers/constantsFile";

const Ogeysiis = () => {
  const [inputText, setInputText] = useState('');

  const calculateTotal = () => {
    let total = 0;
    const regex = /\$([0-9.]+)/g; // Regular expression to match decimal numbers after $
    const matches = inputText.matchAll(regex);

    for (const match of matches) {
      total += parseFloat(match[1]); // Adding up the decimal numbers after $
    }

    return total.toFixed(2); // Return total with two decimal places
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div style = {{width: "95%",
    margin: "20px auto", display: "flex", flexDirection: "column",
    gap: "30px"}}>
      <TextareaAutosize type="text" value={inputText} onChange={handleInputChange} 
      style={{padding: "10px", width: "200px"}}/>
     
      <Button
      onClick={() => alert(`Total: $${calculateTotal()}`)}
        style={{
          width: "200px",
          fontSize: "16px",
          backgroundColor: "#19274B" ,
          fontWeight: "600",
          color: "white",
          height: "40px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {" "}
        Calculate
      </Button>

      <ReadAndWrite />

    </div>
  );
};

const ReadAndWrite = () => {

    const [customers, setCustomers] = useState()

    let shares = []
    customers?.map((customer) => {
        if (customer?.type == "kaashle") shares.push(customer)
    })

    const readUserCustomers = (id) => {
      axios.get(`https://deentire-api-rj2w.onrender.com/api/v1/customers/get-customers-by-user/user-id`, 
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
    const createUserCustomers = (customer) => {
      console.log(customer)
      axios.post(`https://deentire-api-rj2w.onrender.com/api/v1/customers/${customer.id}`,
      {
         headers: {
           'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTcwNDQ4ODU1NCwiZXhwIjoxNzA3MDgwNTU0fQ.K-iHFwhEG5rFN8PF6vsRDeQeo0XEj63vIu8pk_dSc7E"
         },
       }).then((res) => {
            console.log(res?.data?.data)
       }).catch((err) => {
         alert(err.response.data.message);
       });
    }

    const loopAndUpload = async (element) => {
      console.log(element)
        const response = await axios.patch(`${constants.baseUrl}/customers/${element.id}`,
        {status: "closed"},
        {
          headers: {
            "authorization": constants.token
          }
        })
        console.log(response)
        // const response2 = await axios.post(`https://deentire-api-rj2w.onrender.com/api/v1/transactions`,
        // { user: "user-id",
        // customer: response.data?.data?.createdCustomer?._id,
        // description: "Total",
        // debit: element.balance,
        // date: "2024/01/13"},
        // {
        //   headers: {
        //     "authorization": constants.token
        //   }
        // })

        // console.log(response2)
      }
  
    const beforeCreate = () => {
      shares?.forEach((customer, index) => {
        const modifiedCustomer = {
          // user: '65af6e1850e320a8770ca4d0', 
      name: customer.name, phone: customer.phone, type: "deynle",
      id: customer?._id
     };
        loopAndUpload(modifiedCustomer);
      });
    };
  
    return (
      <div>
        <button onClick={()=> readUserCustomers()}> read customers</button>
        <button onClick={()=> beforeCreate()}> create customers</button>
  
        {shares?.map(share => {
          return <div style = {{display: "flex", flexDirection: "row",
          gap: "20px", width: "100%"}}>
            <p> {share.name}</p>
            <p> {share.phone}</p>
            <p> {share.type}</p>
            <p> {share.balance}</p>
            </div>
        })}
      </div>
    )
  }



export default Ogeysiis;