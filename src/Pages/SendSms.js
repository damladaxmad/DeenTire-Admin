import { Button, CircularProgress, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { constants } from "../Helpers/constantsFile";
import axios from "axios";
import SmsSuccess from "../containers/SMSContainers/SmsSuccess";
import Loading from "../containers/SMSContainers/Loaidng";

import { TextareaAutosize } from "@material-ui/core";

const SendSMS = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const activeUser = useSelector((state) => state.activeUser.activeUser);
  const customers = useSelector((state) => state.users.users);
  const [showSuccess, setShowSuccess] = useState(false)
  const [successData, setSuccessData] = useState()
  const [loading, setLoading] = useState(false)
  const token = useSelector(state => state.token.token)

  let loopCustomers = []
  customers?.map(customer => {
    if (customer?.notify == "loop") loopCustomers.push(customer)
  })

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSelectCustomer = (customerId) => {
    const updatedSelectedCustomers = [...selectedCustomers];
    const index = updatedSelectedCustomers.indexOf(customerId);

    if (index > -1) {
      updatedSelectedCustomers.splice(index, 1);
    } else {
      updatedSelectedCustomers.push(customerId);
    }

    setSelectedCustomers(updatedSelectedCustomers);
  };

  const handleSelectAllCustomers = () => {
    const allCustomerIds = loopCustomers.map((customer) => customer._id);
    setSelectedCustomers(
      selectedCustomers.length === allCustomerIds.length ? [] : allCustomerIds
    );
  };

  const handleSendSMS = () => {
    setLoading(true)
    const customersToSendSMS = customers.filter((customer) =>
      selectedCustomers.includes(customer._id)
    );

    const updatedCustomers = customersToSendSMS.map((customer) => ({
      ...customer,
      customerType: 'deynle',
    }));

    axios
      .post(
        `${constants.baseUrl}/sms/custom-sms`,
        {
          "smsUserName": "tacabtire",
          "smsPassword": "mj1w7fWibNis7p1zvlJRkQ==",
          "customers": updatedCustomers,
          "senderId": "TACABTIRE",
          "userId": "63b197b37f5f1674109bf22a",
          "userPassword": "12345",
          "message": "Shirkadda waxey ku ogeysiineysaa inuu app-ka isxerayo Maanta hadii aadan Hadda iska bixin lacagta. 09/01/2024"
          },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        setSuccessData(res.data?.data)
        setLoading(false)
        setSelectedCustomers([])
        setShowSuccess(true)
      })
      .catch((err) => {
        setLoading(false)
        alert(err.response.data.message);
        setSelectedCustomers([])
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "92%",
        margin: "20px auto",
      }}
    >
    {loading && <Loading /> }

      {showSuccess && <SmsSuccess successData = {successData} hideModal = {()=> {
        setShowSuccess(false)
      }}/>}
      <div
        style={{
          background: "white",
          padding: "20px",
          width: "100%",
          borderRadius: "10px 10px 0px 0px",
          alignItems: "center",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "row",
          gap: "50px",
        }}
      >
        <input
          type="text"
          placeholder="Search customers"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: "400px",
            height: "45px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            background: "#EFF0F6",
            border: "none",
          }}
        />

        <label>
          <input
            type="checkbox"
            onChange={handleSelectAllCustomers}
            checked={selectedCustomers.length === customers.length}
            id="smsCheck"
            style={{
              transform: "scale(1.5)",
              cursor: "pointer",
              marginRight: "15px",
            }}
          />
          Select All{" "}
          {selectedCustomers.length > 0 && `(${selectedCustomers.length})`}
        </label>

        <Button
          onClick={handleSendSMS}
          style={{
            width: "130px",
            marginLeft: "auto",
            fontSize: "16px",
            backgroundColor: "#03656F",
            fontWeight: "600",
            color: "white",
            height: "40px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send SMS
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {loopCustomers
          .filter(
            (customer) => 
              customer.name.toLowerCase().includes(searchTerm) ||
              customer.phone.toLowerCase().includes(searchTerm)
          )
          .map((customer) => (
            <div
              key={customer._id}
              style={{
                backgroundColor: selectedCustomers.includes(customer?._id)
                  ? "#CDEBEE"
                  : null,
                border: "1px solid grey",
                display: "flex",
                cursor: "pointer",
                flexDirection: "row",
                gap: "30px",
                padding: "15px 25px",
                borderRadius: "10px",
              }}
              onClick={() => handleSelectCustomer(customer._id)}
            >
              <input
                type="checkbox"
                checked={selectedCustomers.includes(customer._id)}
                onChange={() => handleSelectCustomer(customer._id)}
                id="smsCheck"
                style={{ transform: "scale(1.5)", cursor: "pointer" }}
              />
              <Typography style={{ fontSize: "16px", flex: 1 }}>
                {customer.name}
              </Typography>
              <Typography style={{ fontSize: "16px", flex: 1 }}>
                {customer.username}
              </Typography>
              <Typography style={{ fontSize: "16px", flex: 1 }}>
                {customer.phone}
              </Typography>
              <Typography style={{ fontSize: "16px", flex: 1 }}>
                {customer.notify}
              </Typography>
             
            </div>
          ))}
      </div>
    </div>
  );
};

export default SendSMS;


// const SendSMS = () => {
//   let options = [1, 2, 3]
//   const [win, setWin] = useState(0)
//   const [loss, setLoss] = useState(0)
//   const [sWin, setSWin] = useState(0)
//   const [sLoss, setSLoss] = useState(0)

//   const reset = () => {
//     setWin(0)
//     setLoss(0)
//     setSWin(0)
//     setSLoss(0)
//   }
 
//   const stickFun = () => { 
//   for (let i = 1; i <= 1000; i++) {

//     const randomWin = options[Math.floor(Math.random() * options.length)];
  
//     const randomGuess = Math.floor(Math.random() * options.length) + 1;
  
//     if (randomGuess === randomWin) {
//       setWin(win => win + 1)
//     } else {
//       setLoss(loss => loss + 1)
//     }
//   }
//   }
//   const switchFun = () => { 
//   for (let i = 1; i <= 1000; i++) {

//     const randomWin = options[Math.floor(Math.random() * options.length)];
//   const firstGuess = Math.floor(Math.random() * options.length) + 1;

//   const winningDoor = options.find(option => option === randomWin);
//   const selectedDoor = options.find(option => option === firstGuess);

//   let revealedOption;

//   // Find the revealed door that is not the winning door and not the selected door
//   for (const door of options) {
//     if (door !== winningDoor && door !== selectedDoor) {
//       revealedOption = door;
//       break;
//     }
//   }

//   const remainingOptionAfterReveal = options.filter(
//     option => option !== revealedOption && option !== selectedDoor
//   );

//   const switchedGuess = remainingOptionAfterReveal[0];

//   if (switchedGuess === randomWin) {
//       setSWin(win => win + 1)
//     } else {
//       setSLoss(loss => loss + 1)
//     }
//     options = [1, 2, 3];
//   }
//   }

//   const totalGames = (win + loss) || 0;
//   const winPercentage = (win / totalGames) * 100;
//   const lossPercentage = (loss / totalGames) * 100;

//   const totalSGames = ( sWin + sLoss ) || 0;
//   const winSPercentage = (sWin / totalSGames) * 100;
//   const lossSPercentage = (sLoss / totalSGames) * 100;

//   return (
//     <div style = {{display: "flex", flexDirection: "column", gap: "10px"}}>
//       <h1> STICK SECTION:</h1>
//       <p> WIN: {winPercentage?.toFixed(0)}%</p>
//       <p> LOSS: {lossPercentage.toFixed(0)}%</p>
//       <h1> SWITCH SECTION:</h1>
//       <p> WIN: {winSPercentage?.toFixed(0)}%</p>
//       <p> LOSS: {lossSPercentage.toFixed(0)}%</p>

//       <button onClick={()=> stickFun()}> Generate stick</button>
//       <button onClick={()=> switchFun()}> Generate switch</button>
//       <button onClick={()=> reset()}> RESET</button>
//     </div>
//   )
// }

// export default SendSMS







