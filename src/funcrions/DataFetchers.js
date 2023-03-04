import { useState, useEffect } from "react";
import { constants } from "../Helpers/constantsFile";
import axios from "axios";
const useFetch = (url, change = "hi", name) => {
      const [data, setData] = useState(null);
      useEffect(() => {
        const fetchData = async() => {
            const response = await axios
            .get(`${constants.baseUrl}/${url}`, {
              headers: {
                'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE5N2IzN2Y1ZjE2NzQxMDliZjIyYSIsImlhdCI6MTY3Nzk0NTEyOSwiZXhwIjoxNjgwNTM3MTI5fQ.eN83KKn3-NQgeTaMIWIbMGt2CVXTvx3ln44zoH5pLB8"
                },
            }).then((res)=>{
                setData(res.data.data[name])
            })
            .catch((err) => {
              alert(err.response?.data?.message);
            });
        }
       fetchData()
      }, [url, change]);
      return data;
};
export default useFetch;