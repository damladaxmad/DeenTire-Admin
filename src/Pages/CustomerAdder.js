// import React, { useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { TextareaAutosize } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function CustomerAdder() {
//   const [customerData, setCustomerData] = useState({ name: '', number: '' });
//   const { transcript, resetTranscript } = useSpeechRecognition();

//   const handleAddCustomer = () => {
//     const nameRegex = /name of ([A-Za-z\s]+)/i;
//     const numberRegex = /number of (\d+)/i;

//     const nameMatch = transcript.match(nameRegex);
//     const numberMatch = transcript.match(numberRegex);

//     if (nameMatch && numberMatch) {
//       const name = nameMatch[1].trim();
//       const number = numberMatch[1].trim();

//       setCustomerData({ name, number });
//       // Here, you can add the customer to your database or perform desired actions
//       console.log('Added Customer:', { name, number });
//     } else {
//       console.log('Invalid command. Please try again.');
//     }
//   };

//   const startListening = () => {
//     SpeechRecognition.startListening({ continuous: true });
//   };

//   return (
//     <div>
//       <button onClick={startListening}>Start Listening</button>
//       <p>{transcript}</p>
//       <button onClick={handleAddCustomer}>Add Customer</button>
//     </div>
//   );
// }

// export default CustomerAdder;


const CustomerAdder = () => {
  
  const [inputText, setInputText] = useState('');
  const [adjust, setAdjust] = useState(false)

  const [customers, setCustomers] = useState()
  const readUserCustomers = (id) => {
    axios.get(`https://deentire-api-rj2w.onrender.com/api/v1/customers/adjust-customers-balance-by-userId/${inputText}`, 
    {
       headers: {
         'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTcwNDQ4ODU1NCwiZXhwIjoxNzA3MDgwNTU0fQ.K-iHFwhEG5rFN8PF6vsRDeQeo0XEj63vIu8pk_dSc7E"
       },
     }).then((res) => {
          console.log(res?.data?.data)
          setAdjust(true)
          // setCustomers(res?.data?.data?.customers)
     }).catch((err) => {
       alert(err.response.data.message);
     });
  }

  const calculateGeneratedBalance = (transactions) => {
    return transactions.reduce((total, transaction) => {
      return total + (transaction.debit - transaction.credit);
    }, 0);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


  return (

    <div>
      <TextareaAutosize type="text" value={inputText} onChange={handleInputChange} 
      style = {{width: "100px"}}/>
      <button onClick={()=> readUserCustomers()}> adjust</button>
      {adjust ? <p style = {{color: "green", fontWeight: "bold"}}> ADJUSTED</p> : <p > NOT ADJUSTED</p>}
      <Iimaan />
    </div>

    //    <div>
    //   <h2>Customer Details</h2>
    //   <ul>
    //     {customers?.map((customer, index) => {
    //       const generatedBalance = calculateGeneratedBalance(customer.transactions);

    //       return (
    //         <div style = {{display: "flex", flexDirection: "row", gap: "10px"}}>
    //           <h3>{customer.name}</h3>
    //           <p>Balance: {customer.balance}</p>
    //           <p>Generated Balance: {generatedBalance}</p>
    //           {/* Check if the balance matches the generated balance */}
    //           {customer.balance === generatedBalance ? (
    //             <p style = {{color: "green"}}>MATCH</p>
    //           ) : (
    //             <p style = {{color: "red"}}>NO MATCH</p>
    //           )}
    //         </div>
    //       );
    //     })}
    //   </ul>
    // </div>

  )
}


function App(){
  const notify = () => {
    toast.success(<div> <p style={{margin: "0px"}}> new customer added</p> 
    <p style={{margin: "0px"}}> deen: $100</p></div>, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}


const Iimaan = () => {

  const [customers, setCustomers] = useState()
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
  const closeUserCustomers = (customer) => {
    console.log(customer)
    axios.patch(`https://deentire-api-rj2w.onrender.com/api/v1/customers/${customer.id}`, 
   {
    status: "closed"
   }, {
       headers: {
         'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTcwNDg3NDI1NSwiZXhwIjoxNzA3NDY2MjU1fQ.-UzzqrpE-U0YqM8BROjFXPBgyM1O4X1Kq3JHKbizxcA"
       },
     }).then((res) => {
          console.log(res?.data?.data)
     }).catch((err) => {
       alert(err.response.data.message);
     });
  }

  const beforeCreate = () => {
    customers.forEach((customer, index) => {
      const modifiedCustomer = {user: '659bed3ff70c8764e735dbb1', 
    name: customer.name, phone: customer.phone, type: customer?.type };
      createUserCustomers(modifiedCustomer);
    });
  };

  return (
    <div>
      <button onClick={()=> readUserCustomers()}> read customers</button>
      <button onClick={()=> beforeCreate()}> create customers</button>

      {customers?.map(customer => {
        return <div>
          <p> {customer.name}</p>
          <p> {customer.phone}</p>
          </div>
      })}
    </div>
  )
}

export default CustomerAdder;
