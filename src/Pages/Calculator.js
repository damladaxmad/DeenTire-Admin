// import { Button, TextField, Typography } from "@material-ui/core";
// import { useState } from "react";

// const Calculator = () => {
 
//     const [revenue, setRevenue] = useState()
//     const [income, setIncome] = useState({
//         axmad: 0,
//         group: 0
//     })

//     console.log(revenue)

//     const calculator = () => {
//         let axmad = (revenue / 100) * 27
//         let group = (revenue / 100) * 36.5
//         setIncome({
//             axmad: axmad,
//             group: group
//         })
//     }

//     const searchStyle = { width: "150px", height: "40px",
//     padding: "12px", fontSize: "16px", borderRadius: "8px",
//     background: "white", border: "1px solid black",
//   }

//   return (
//     <div
//       style={{
//         height: "100%",
//         width: "95%",
//         margin: "0px auto",
//         display: "flex",
//         gap: "32px",
//         flexDirection: "column",
//       }}
//     >
//       <Typography style={{ fontWeight: "600", fontSize: "25px" }}>
//         {" "}
//         Revenue Calculator{" "}
//       </Typography>

//      <div style = {{display: "flex", flexDirection: "row", gap: "15px"}}>

//       <input
//       type="number"
//       placeholder="Enter Revenue"
//       style={searchStyle}
//       onChange={(e) => setRevenue(e.target.value)}
//     />

    
// <Button
//           style={{
//             width: "135px",
//             fontSize: "16px",
//             background: "#19274B",
//             color: "white",
//           }}
//           type="submit"
//           variant="contained"
//           onClick = {calculator}
//         >
//           Calculate
//         </Button>
//      </div> 

//       <Team income = {income}/>
//     </div>
//   );
// };


// const Team = (props) => {
// console.log(props.income)

//   const data = [
//     { name: "Axmad Maxamad", value: props.income.axmad },
//     { name: "Cabdimajid Macalin", value: props.income.group },
//     { name: "Cabdullahi Axmad", value: props.income.group },
//   ];
//   return (
//     <div style={{ width: "30%" }}>
//       {data.map((d) => {
//         return (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               padding: "3px",
//             }}
//           >
//             <Typography
//               style={{
//                 fontSize: "18px",
//                 fontWeight: "bold",
//               }}
//             >
//               {" "}
//               {d.name}:
//             </Typography>
            
//             <Typography
//               style={{
//                 fontSize: "18px",
//               }}
//             >
//               {" "}
//               {d.value}
//             </Typography>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Calculator;

// import axios from "axios"
// import { constants } from "../Helpers/constantsFile"
// import { useState } from "react"


// const Calculator = () => {

//   const [customers, setCustomers] = useState([])
//   const [vendors, setVendors] = useState([])
//   const [transactions, setTransactions] = useState([])
  
//   const getCustomers = async () => {

//     // Notification.requestPermission().then(result => {
//     //   new Notification("This is the main event", {
//     //     body: "It is tiimeee! for you to shut the hell up!",
//     //     tag: "HI"
//     //   })
//     // })

//     const response = await axios
//     .get(`${constants.baseUrl}/user/migrate/63eca34269b83dac25e53732`, {
//       headers: {
//         'authorization': constants.token
//        },
//     }).then((res)=>{
//         // setData(res.data.data[name])
//         alert("Success")
//         setCustomers(res.data?.data?.customers)
//       setVendors(res.data?.data?.vendors)
//       setTransactions(res.data?.data?.transactions)
//     })
//     .catch((err) => {
//       alert(err.response?.data?.message);
//     });
//   }

//   console.log(transactions)
//   const storeCustomers = async () => {
//     const response = await axios
//     .post(`https://interesting-goldberg.45-90-223-247.plesk.page/api/v1/customer`, customers, {
//       headers: {
//         'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJmYzY1ZTg0ZjliYzJmYWIyMTc1NyIsImlhdCI6MTY4MTY2NzIzMCwiZXhwIjoxNjg5NDQzMjMwfQ.tYB35TEgaQFQ1D_-kcubSfQgcIJCG4PAtZUigDcHUxg"
//        },
//     }).then(res => {
//       alert("Successfully stored customers")
//     }).catch(err => {
//       alert(err.response?.data?.message)
//     })

//     const response2 = await axios
//     .post(`https://interesting-goldberg.45-90-223-247.plesk.page/api/v1/vendor`, vendors, {
//       headers: {
//         'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJmYzY1ZTg0ZjliYzJmYWIyMTc1NyIsImlhdCI6MTY4MTY2NzIzMCwiZXhwIjoxNjg5NDQzMjMwfQ.tYB35TEgaQFQ1D_-kcubSfQgcIJCG4PAtZUigDcHUxg"
//        },
//     }).then(res => {
//       alert("Successfully stored vendors")
//     }).catch(err => {
//       alert(err.response?.data?.message)
//     })

//     const response3 = await axios
//     .post(`https://interesting-goldberg.45-90-223-247.plesk.page/api/v1/transactions/create-multiple-transaction`, transactions, {
//       headers: {
//         'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJmYzY1ZTg0ZjliYzJmYWIyMTc1NyIsImlhdCI6MTY4MTY2NzIzMCwiZXhwIjoxNjg5NDQzMjMwfQ.tYB35TEgaQFQ1D_-kcubSfQgcIJCG4PAtZUigDcHUxg"
//        },
//     }).then(res => {
//       alert("Successfully stored transactions")
//     }).catch(err => {
//       alert(err.response?.data?.message)
//     })


//   }


//   return (
//     <div>
//       this is the main event
//       <button onClick={()=> getCustomers()}>
//         Get customers
//       </button>

//       <button onClick={()=> storeCustomers()}>
//         store them
//       </button>
//       </div>
//   )
// }

// export default Calculator









import { Button } from "@material-ui/core";
import axios from "axios";
import React, {useState} from "react";
import * as XLSX from 'xlsx'
import { constants } from "../Helpers/constantsFile";
import { DateRangeRounded, Description } from "@material-ui/icons";

const parentDivStyle = { display: "flex", alignItems: "center",
justifyContent: "space-between",  gap: "0px", padding: "20px",
background: "white", width: "95%", margin: "auto",
marginTop: "20px", borderRadius: "8px 8px 0px 0px",
flexDirection: "column"
}

const ImportProducts = () => {
    const [excelFile, setExcelFile]=useState(null);
    const [excelFileError, setExcelFileError]=useState(null);  
    const [excelData, setExcelData]=useState(null);
    const fileType=["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    let cashCustomers = []


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("It is called")
        if(excelFile!==null){
          console.log("in if again")
          try {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet=workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            const sheetName = 'Sheet1'; // Or use workbook.SheetNames[1] to target 'Sheet1' dynamically

            if (workbook.SheetNames.includes(sheetName)) {
              const worksheet = workbook.Sheets[sheetName];
              const data = XLSX.utils.sheet_to_json(worksheet);
              setExcelData(data);
            }
          } catch (error) {
            console.error('Error reading Excel file:', error);
            setExcelData(null); // Set data to null on error
          }
        }
        else{
          console.log("file is null")
          setExcelData(null);
        }
      }

     

    const handleFile = (e)=>{
        let selectedFile = e.target.files[0];
        console.log(selectedFile)
        if(selectedFile){
          // console.log(selectedFile.type);
          if(selectedFile&&fileType.includes(selectedFile.type)){
            let reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload=(e)=>{
              console.log(e)
              setExcelFileError(null);
              setExcelFile(e.target.result);
            } 
            
        }
        else{
            setExcelFileError('Please select only excel file types');
            setExcelFile(null);
        }
    }
    else{
        console.log('plz select your file');
    }
   
      }

      excelData?.map((data, index) => {
        if (index < 102) return
        if (!data["Customer"]) return
        cashCustomers.push({
          user: "659e770c8764e735ff40",
        name: data["Customer"],
        phone: data["Main Phone"]?.toString() || "0615000000",
        balance: data["Balance"],
        district: data.Area || "empty",
        type: "deynle"
        })
      })

      const loopAndUpload = async (element) => {
        const response = await axios.post(`${constants.baseUrl}/custome`,
       element,
        {
          headers: {
            "authorization": constants.token
          }
        })
        console.log(response)
        const response2 = await axios.post(`https://deentire-api-rj2w.onrender.com/api/v1/transacti`,
        { user: "659e7d50f70c8764e735ff40",
        customer: response.data?.data?.createdCustomer?._id,
        description: "Total",
        debit: element.balance,
        date: "2024/02/10"},
        {
          headers: {
            "authorization": constants.token
          }
        })

        console.log(response2)
      }


      const uploadHandler = async () =>  {

         cashCustomers?.forEach(loopAndUpload)
         
      }

      console.log(excelData)

      const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/deentire-application.appspot.com/o/LOGO%2Fcaalami.jpeg?alt=media&token=c98a3e2c-2b36-499e-9ba0-bae60a5a9832';
     

    return (

        <div style={parentDivStyle}>

      <form autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h5>Upload Excel file</h5></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Submit</button>
        </form>

        {excelData?.map(data => {
          if (!data["Customer"]) return
           return <div style={{display: "flex", gap: "20px",
            width: "40%", justifyContent: "space-between"}}>
                <p> {data['Customer']}</p>
                <p> {data['Main Phone']}</p>
                <p> {data['Area']}</p>
                <p> {data["Balance"]}</p>
             
            </div>
})}

        <Button onClick = {uploadHandler}
        variant = "contained" style = {{background: "blue"}}>
            Upload
        </Button>

        <div style={{ width: '100px', height: '300px', overflow: 'hidden' }}>
      <h2>Image from URL</h2>
      <img
        src={imageUrl}
        alt="Your Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>

        </div>


    )
}

export default ImportProducts
