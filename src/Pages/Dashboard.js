// import React, { useEffect, useState } from "react";
// import StatCard from "../containers/DashboardContainers/Summary/StatCard";
// import { useDispatch, useSelector } from "react-redux";
// import { Typography } from "@material-ui/core";
// import WeeklyChart from "../containers/DashboardContainers/Weekly/WeeklyChart";
// import OrderUpdates from "../containers/DashboardContainers/Weekly/OrderUpdates";
// import RevenueStats from "../containers/DashboardContainers/Weekly/RevenueStats";
// import Top5Employees from "../containers/DashboardContainers/Monthly/Top5Employees";
// import Top5DeenCustomers from "../containers/DashboardContainers/Customer/Top5DeenCustomers";
// import { setDashboard } from "../redux/actions/dashboardActions";
// import useFetch from "../funcrions/DataFetchers";
// import Top5OrderCustomers from "../containers/DashboardContainers/Customer/Top5OrderCustomers";
// import { read } from "original-fs";
// import axios from "axios";
// import { constants } from "../Helpers/constantsFile";

import { Typography } from "@material-ui/core";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { constants } from "../Helpers/constantsFile";

// const Dashboard = () => {
//   const dashboard = useSelector((state) => state.dashboard.dashboard);

//   const dispatch = useDispatch()
//   const [state, setState] = useState(1)
//   // dispatch(setDashboard(useFetch("dashboard", state, "dashboard")))

//   const myDate = [
//     {label: "total users", value: 100, isMoney: false},
//     {label: "recievable", value: 20, isMoney: false},
//     {label: "net profit", value: 400, isMoney: false},
//     {label: "total fee", value: 600, isMoney: false},
 
// ]

// const [customers, setCustomers] = useState()

//   const myFunction = async() => {
//     return alert("I am asleep")
//     const response = await axios.get(`${constants.baseUrl}/customers/user-customers-with-transactions/`, 
//     {
//       headers: {
//         'authorization': constants.token
//        },
//     }).then(res => {
//       setCustomers(res.data?.data?.customers)
//       console.log(res.data?.data?.customers)
//     })
//   }

//   const updateCustomers = (customer) => {
//     if (customer?.type == "dhexe")
//     axios.patch(`${constants.baseUrl}/customers/${customer._id}`, {
//   type: "deynle"
//   },
//   {
//     headers: {
//       'authorization': constants.token
//      },
//   })
//   }

//   const getCustomers = () => {
//     customers?.forEach(updateCustomers)
//   }

//   return (
//     <>
//           <Typography style={{ fontWeight: "600", fontSize: "25px",
//           padding: "0px 20px"}}>
//         {" "}
//         Dashboard is coming soon!!!
//       </Typography>
//       <button onClick={() => myFunction()}> Click</button>
//       <button onClick={() => getCustomers()}> Get</button>
//       </>
    // <div
    //   id="uni"
    //   style={{
    //     height: "100%",
    //     width: "95%",
    //     margin: "0px auto",
    //     display: "flex",
    //     gap: "32px",
    //     flexDirection: "column",
    //   }}
    // >
    //   <Typography style={{ fontWeight: "600", fontSize: "25px" }}>
    //     {" "}
    //     Dashboard{" "}
    //   </Typography>
    //   <div
    //     style={{
    //       display: "flex",
    //       gap: "20px",
    //       width: "100%",
    //       flexWrap: "wrap",
    //     }}
    //   >
    //     {dashboard?.overview.map((d, index) => (
    //       <StatCard value={d} key={index} type = "summary"/>
    //     ))}
    //     {/* {!dashboard?.overview.map((d, index) => (
    //       <StatCard value={d} key={index} type = "summary"/>
    //     ))} */}

    //   </div>

    //   <Typography
    //     style={{
    //       fontWeight: "600",
    //       color: "#928E8E",
    //       fontSize: "25px",
    //       marginTop: "40px",
    //     }}
    //   >
    //     Monthly Statistics
    //   </Typography>

    //   <div
    //     style={{
    //       display: "flex",
    //       gap: "20px",
    //       width: "100%",
    //       flexWrap: "wrap",
    //     }}
    //   >
    //     {dashboard?.thisMonth.map((d, index) => (
    //       <StatCard value={d} key={index} type = "month"/>
    //     ))}
    //     {/* {!dashboard?.overview.map((d, index) => (
    //       <StatCard value={d} key={index} type = "summary"/>
    //     ))} */}

    //   </div>

    //   <Typography
    //     style={{
    //       fontWeight: "600",
    //       color: "#928E8E",
    //       fontSize: "25px",
    //       marginTop: "40px",
    //     }}
    //   >
    //     User Statistics
    //   </Typography> 

    //      <div
    //     style={{
    //       display: "flex",
    //       width: "98.5%",
    //       gap: "50px",
    //       flexWrap: "wrap",
    //     }}
    //   >
    //     <Top5DeenCustomers  /> 
    //     <Top5OrderCustomers  /> 
    //     </div>
    // </div>
//   );
// };

// export default Dashboard;


const ReadUserTransactions = () => {

  const [userTrans, setUserTrans] = useState()
  const today = new Date()
  const token = useSelector(state => state.token.token)

  const readUserTrans = () => {
    axios.get(`${constants.baseUrl}/user-transactions`, 
    {
       headers: {
         'authorization': token
       },
     }).then((res) => {
          console.log(res?.data?.data)
          setUserTrans(res?.data?.data?.transactions)
     }).catch((err) => {
       alert(err.response.data.message);
     });
  }

  useEffect(() => {
    readUserTrans()
  }, [])

  let monthlyArray = []
  userTrans?.map(tran => {
    if (moment(tran.date).format("YYYY-MM") == moment(today).format("YYYY-MM"))
    if (tran.description?.substring(0, 7) == "Monthly")
    monthlyArray.push(tran)
  })

  let totalMonthly = 0
  monthlyArray?.map(m => {
    totalMonthly += m.credit
  })

  let smsArray = []
  userTrans?.map(tran => {
    if (moment(tran.date).format("YYYY-MM-DD") > "2024-01-11")
    if (tran.description?.substring(0, 3) == "SMS")
    smsArray.push(tran)
  })

  let totalSMS = 0
  smsArray?.map(m => {
    totalSMS += m.credit
  })

  return (

    <div style = {{width: "93%", margin: "20px auto"}}>

      <div style = {{width: "100%", display: "flex", flexDirection: "column",
    gap: "12px"}}>
      <Typography style = {{fontSize: "18px", fontWeight: "bold", color: "#6D6D6D"}}>
        MONTHLY BILL </Typography>
        {monthlyArray?.map((tran, index) => {
          if (moment(tran.date).format("YYYY-MM") == moment(today).format("YYYY-MM"))
          if (tran.description?.substring(0, 7) == "Monthly")
          return <div style = {{ display: "flex",
          cursor: "pointer",
          flexDirection: "row",
          padding: "15px",
          alignItems: "center",
          borderRadius: "10px", background:"white"}}>

            <Typography style = {{fontSize: "16px", flex: 0.2, color: "grey"}}> {index + 1}.</Typography>
            <Typography style = {{fontSize: "16px", flex: 2}}> {tran.user?.name}</Typography>
            <Typography style = {{fontSize: "16px", flex: 1,}}> {tran.description?.substring(0, 7)}</Typography>
            <Typography style = {{fontSize: "16px", flex: 1}}> {moment(tran.date).format("YYYY-MM-DD")}</Typography>
            <Typography style = {{fontSize: "16px", fontWeight: "normal", flex: 0.5}}> ${tran.credit}</Typography>
          
            </div>
        })}
        <div style = {{display: "flex", flexDirection: "row", gap: "10px",
      alignSelf: "end"}}>
        <Typography style = {{fontSize: "20px", flex: 0.2, color: "grey"}}> total:</Typography>
        <Typography style = {{fontSize: "20px", flex: 0.2, fontWeight: "bold"}}> ${totalMonthly}</Typography>
        </div>


<Typography style = {{fontSize: "18px", fontWeight: "bold", color: "#6D6D6D",
marginTop:"25px"}}>
        SMS PURCHASE </Typography>
        {smsArray?.reverse()?.map((tran, index) => {
          if (tran.description?.substring(0, 7) == "SMS Pur")
          return <div style = {{ display: "flex",
          cursor: "pointer",
          flexDirection: "row",
          padding: "15px",
          alignItems: "center",
          borderRadius: "10px", background:"white"}}>
            
            <Typography style = {{fontSize: "16px", flex: 0.2, color: "grey"}}> {index + 1}.</Typography>
            <Typography style = {{fontSize: "16px", flex: 2}}> {tran.user?.name}</Typography>
            <Typography style = {{fontSize: "16px", flex: 1}}> {tran.description?.substring(0, 12)}</Typography>
            <Typography style = {{fontSize: "16px", flex: 1}}> {moment(tran.date).format("YYYY-MM-DD")}</Typography>
            <Typography style = {{fontSize: "16px", fontWeight: "normal", flex: 1}}> ${tran.credit}</Typography>
          
            </div>
        })}
          <div style = {{display: "flex", flexDirection: "row", gap: "10px",
      alignSelf: "end"}}>
        <Typography style = {{fontSize: "20px", flex: 0.2, color: "grey"}}> total:</Typography>
        <Typography style = {{fontSize: "20px", flex: 0.2, fontWeight: "bold"}}> ${totalSMS}</Typography>
        </div>
      </div>
      
    </div>
  )
}

export default ReadUserTransactions