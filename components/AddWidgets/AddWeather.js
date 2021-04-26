import React, { useState } from "react";
import Button from "../Buttons/Button";
import AddWidgetForm from "../Layouts/AddWidgetForm";
import openweather from "../../pages/api/openweather";
export default function AddWeather({ onAdd, defaultValue }) {
  const [checkError, setCheckError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      // call api
      try {
        const res = await openweather.get("/data/2.5/weather", {
          params: {
            q: e.target.title.value,
            units: "metric",
          },
        });

        // destructuring array
        const { data } = res;
        // console.log("data : ", data);
        // console.log("data name : ", data.name); 
        // console.log("data description : ", data.weather[0].description); 
        // console.log("data temp : ", data.main.temp); 
        onAdd("weather", data);

      } catch {
  
        // const data = {
        //     id, //id: id
        //     date: realTime,
        //     type,
        //     value,
        //   };
    
        onAdd("weatherNF", e.target.title.value);
        console.log("City not found!");
      }
    }
  };
  return (
    <div>
      <h2 className="text-xl mb-2">Add Weather</h2>
      <form onSubmit={onSubmit} className="flex">
        <div className="flex-1 mr-1">
          <input
            type="text"
            name="title"
            className="w-full px-2.5 py-1 focus:outline-none rounded-md"
            defaultValue={defaultValue}
            placeholder="Enter text"
          />
        </div>
        <Button>Add</Button>
      </form>
      <p className="text-red-600 text-xs mt-1">{checkError}</p>
    </div>
  );
}

{
  /* <AddWidgetForm
      title="Add Weather"
      onSubmit={onSubmit}
      type="text"
      checkError={checkError}
    /> */
}
