import axios from "axios";
import { useState } from "react";
import { constants } from "../Helpers/constantsFile";

const Ogeysiis = () => {

    const [customers, setCustomers] = useState()

    let shares = []
    customers?.map((customer) => {
        if (customer?.type == "dhexe") shares.push(customer)
    })

    const readUserCustomers = (id) => {
      axios.get(`https://deentire-api-rj2w.onrender.com/api/v1/customers/get-customers-by-user/64e5cce0e22d3b6d2bd74800`, 
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
      axios.post(`https://deentire-api-rj2w.onrender.com/api/v1/customers`, 
     customer,
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
        const response = await axios.post(`${constants.baseUrl}/customers`,
       element,
        {
          headers: {
            "authorization": constants.token
          }
        })
        console.log(response)
        const response2 = await axios.post(`https://deentire-api-rj2w.onrender.com/api/v1/transactions`,
        { user: "user-id",
        customer: response.data?.data?.createdCustomer?._id,
        description: "Total",
        debit: element.balance,
        date: "2024/01/13"},
        {
          headers: {
            "authorization": constants.token
          }
        })

        console.log(response2)
      }
  
    const beforeCreate = () => {
      shares?.forEach((customer, index) => {
        const modifiedCustomer = {user: 'user-id', 
      name: customer.name, phone: customer.phone, type: "dhexe",
    balance: customer.balance };
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


export default Ogeysiis