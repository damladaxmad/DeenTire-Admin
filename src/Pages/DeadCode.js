// const ReadShit = () => {

//     const [customers, setCustomers] = useState()
//     const [kulmiyeTransactions, setKulmiyeTransactions] = useState()
  
//     let deentireCustomers = []
//     customers?.map(customer => {
//       if (customer?.user == "6552f1b4505b9ae9e76c8154") deentireCustomers.push(customer)
//     })
  
//     console.log(kulmiyeTransactions)
  
//     const readCustomer = () => {
//       axios.get("https://sharp-hamilton.45-90-223-247.plesk.page/api/v1/customers/user-customers-with-transactions/655dc1ae4e623d6f42b21f85", 
//      {
//         headers: {
//           'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTY5OTI2ODYyOSwiZXhwIjoxNzAxODYwNjI5fQ.GrJPxq0BfJkXH4vil9an3vt5eo_LXY60LcGuui656bg"
//         },
//       }).then((res) => {
//            alert("Successfully Read")
//            console.log(res?.data?.data)
//            setCustomers(res?.data?.data?.customers)
//       }).catch((err) => {
//         alert(err.response.data.message);
//       });
//     }
//     const readTransactions = () => {
//       axios.get("//interesting-goldberg.45-90-223-247.plesk.page/api/v1/vendors/vendors-with-transactions", 
//      {
//         headers: {
//           'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJmYzY1ZTg0ZjliYzJmYWIyMTc1NyIsImlhdCI6MTY5NDc2NTc0OSwiZXhwIjoxNzAyNTQxNzQ5fQ.D7nXjM35uxFmZt_CpTAQXUsg25VuWaWD1Ugyu48XKuI"
//           },
//       }).then((res) => {
//            alert("Successfully Read")
//            console.log(res?.data?.data)
//            setKulmiyeTransactions(res?.data?.data?.vendors)
//       }).catch((err) => {
//         alert(err.response.data.message);
//       });
//     }
  
//     const createVendors = (vendor) => {
//      axios.post(`//sharp-hamilton.45-90-223-247.plesk.page/api/v1/vendors`, 
//   {
    
//       "name": vendor.name,
//       "nationality": "Somali",
//       "district": vendor.district,
//       "phone": vendor.phone,
//       "vendorId": vendor.vendorId,
//       "user": "6552f1b4505b9ae9e76c8154",
//       "status": "open",
//       "created_at": vendor.created_at,
//       "updated_at": vendor.updated_at,
  
//   },
//      {
//         headers: {
//           'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTY5OTI2ODYyOSwiZXhwIjoxNzAxODYwNjI5fQ.GrJPxq0BfJkXH4vil9an3vt5eo_LXY60LcGuui656bg"
//           },
//       }).then((res) => {
//            alert("Successfully Created")
//       }).catch((err) => {
//         alert(err.response.data.message);
//         console.log(vendor)
//       });
//     }
//     const createShit = (tran) => {
//      axios.post(`//sharp-hamilton.45-90-223-247.plesk.page/api/v1/transactions`, 
//      {
//       "description": tran.description,
//       "transactionId":tran.transactionId,
//       "debit": tran.debit,
//       "credit": tran.credit,
//       "date": tran.date,
//       "vendor": tran.vendor,
//       "status": tran.status,
//       "created_at": tran.created_at,
//       "updated_at": tran.updated_at,
//       "__v": 0
//   },
//      {
//         headers: {
//           'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTY5OTI2ODYyOSwiZXhwIjoxNzAxODYwNjI5fQ.GrJPxq0BfJkXH4vil9an3vt5eo_LXY60LcGuui656bg"
//           },
//       }).then((res) => {
//           //  alert("Successfully Created")
//       }).catch((err) => {
//         alert(err.response.data.message);
//         console.log(tran)
//       });
//     }
  
//     const findCustomerByName = (customers, name) => {
//       return customers.find(customer => customer.name === name);
//     }
  
//     const stageTwo = (el) => {
//       // console.log(el)
//     }
  
//     const stageOne = (el) => {
//       let deentireCustomer = findCustomerByName(deentireCustomers, el.name)
//       if (deentireCustomer.name == "xawo shiq cali indhayare") {   
//         el.transactions.forEach(function(tran) {
//          tran["vendor"] = deentireCustomer?._id
//          tran["id"] = tran._id
//          delete tran._id
//         //  console.log(tran)
//          createShit(tran)
//       });
//       }
//     }
  
//     const beforeCreate = () => {
//       // deentireCustomers?.forEach(createVendors)
//       kulmiyeTransactions?.forEach(stageOne)
//     }
  
//     return (
//       <div>
  
//         Reading shit
  
//         <button onClick={()=> readCustomer()}> Read Cus</button>
//         {/* <button onClick={()=> readTransactions()}> Read Tans</button>
//         <button onClick={()=> beforeCreate()}> Create Shit</button> */}
//       </div>
//     )
//   }
  
//   export default ReadShit




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
  
    const beforeCreate = () => {
      customers.forEach((customer, index) => {
        const modifiedCustomer = {user: '659bed3ff70c8764e735dbb1', 
      name: customer.name, phone: customer.phone };
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
          user: "659e7d50f70c8764e735ff40",
        name: data["Customer"],
        phone: data["Main Phone"]?.toString() || "0615000000",
        balance: data["Balance"],
        district: data.Area || "empty",
        type: "deynle"
        })
      })

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