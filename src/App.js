import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App () {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


    async function fetchData(){
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // Save data into a variable
        setCourses(output.data);
      }catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    useEffect(function(){
      fetchData();
    }, [])



  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2 min-bg-[100%]">
        <div>
          <Filter category= {category} setCategory= {setCategory} filterData= {filterData}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner></Spinner>) : (<Cards courses= {courses} category= {category}></Cards>)
          }
        </div>
      </div>
      
    </div>
  );
};

export default App;
