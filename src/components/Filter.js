import React from "react";

function Filter(props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandeler(title){
        setCategory(title);
    }


    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 mx-auto justify-center">
            {filterData.map(function(data){
                return (
                    <button key = {data.id}
                    className={`text-lg px-2 py-1 rounded-md font-medium bg-bgDark text-white hover:bg-opacity-50 border-2 transition-all duration-300 
                    ${category === data.title ? 
                    ("bg-opacity-60 border-white") : 
                    ("bg-opacity-40 border-transparent")}
                    `} onClick={() => filterHandeler(data.title)}>
                        {data.title}
                    </button>
                );
            })}
        </div>
    );
}

export default Filter;