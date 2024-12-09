'use client'
import Image from "next/image";
import Table from "../../components/Table";
import Link from "next/link";
import { Filter } from "@/components/Filter";
import { useEffect, useState } from "react";
const axios = require('axios');


export default function Home() {

  const [searchedName, setSearchedName] = useState('')
  const [loading, setLoading] = useState(true);
  const [names, setNames] = useState([])


  // useEffect(() => {
  //   // let featchedData = []

  //   async function getUsers() {
  //     setLoading(true) //set loading 
  //     try {
  //       const response = await axios.get('http://syrianprisoners-back.point-dev.net/api/prisoner');
  //       const featchedNames = response.data.data
  //       setNewData(featchedNames)
  //       // console.log(newData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     finally {
  //       setLoading(false) //if get all data now remove the loading state
  //     }
  //   }

  //   console.log('getting all data')
  //   getUsers()
  // }, [])

  useEffect(() => {

    const getPrison = async (name) => {
      setLoading(true) //if get all data now remove the loading state
      console.log('loading befor featching', loading);
      // Define the data you want to send in the request body


      // Define the URL for your GET request
      const url = 'http://syrianprisoners-back.point-dev.net/api/prisoner';

      // Define the params to include in the request
      const params = {
        full_name: name,
      };


      try {
        // Send a GET request with headers
        const response = await axios.get(url, { params });

        // Handle the response
        let names = response.data
        setNames(names)
        setLoading(false) //if get all data now remove the loading state
        console.log('loading after featching', loading);


      } catch (error) {
        // Handle any errors
        console.error('Error:', error);
      }
      finally {
      }

    };

    // setTimeout(() => getPrison(name, middleName, lastName), 3000)
    setTimeout(() => getPrison(searchedName), 400)
    // console.log("there is a change here ")
    // sendDataWithHeaders();


  }, [searchedName])




  const changeNameHandler = (e) => {
    setTimeout(async () => {
      setSearchedName(e.target.value)
      console.log("firstName", searchedName)
    }, 300)
  }



  return (
    <div>
      <div className="bg-slate-800">
        <Link href={'/'} className=" btn  m-4 btn-primary" >
          <Image src={'/imgs/back.png'} width={30} height={30} alt="back arrow" />
          <div className=" "> العودة للصفحة الرئيسية</div>
        </Link>
      </div>

      <div
        className="hero min-h-lvh "
        style={{
          backgroundImage: "url('/imgs/freeSyria.png')",
        }}>
        <div className="hero-overlay bg-opacity-75 "></div>
        <div className="hero-content text-neutral-content  text-center ">
          <div className="text-base max-w-xs lg:max-w-screen-xl ">
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold leading-relaxed"> اسماء المعتقلين <span className="text-green-600"> المحريين</span> بعون الله ثم المعارضة السورية   <span className="text-green-600"> الحرة</span></h1>

            <div className="  bg-white p-10 rounded-lg">
              <div className="text-black py-10 text-2xl" >قم بادخال الاسم و اسم الاب والكنية لمحاولة ايجاد المحررين </div>
              <div className="flex align-middle justify-around">
                <input
                  onChange={changeNameHandler}
                  type="text"
                  placeholder=" ادخل الاسم الكامل او الكنية"
                  className="input input-bordered input-success w-1/2 max-w-xs text-red-600" />

              </div>

              {loading ? <div className="text-black">

                <p>الرجاء الانتظار</p>
                <span span className="loading loading-bars loading-lg text-success"></span>
              </div>
                : <Table data={names}></Table>}
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
