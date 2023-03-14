import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import Models from "../components/Models";
import useApi from "../hooks/useApi";

export default function Home({ carsData }) {
  // For using it wihtout pre rendering
  // const { error, loading, data } = useApi(
  //   "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
  //   "true"
  // );

  let [tempModel, setTempModel] = useState(" ");
  let [model, setModel] = useState("None");
  let [cars, setCars] = useState([]);
  let [showmodels, setShowModels] = useState(false);

  let handleModelSelection = (e) => {
    setShowModels(false);
    setTempModel(e.target.value);
  };

  let fetcModels = () => {
    setShowModels(true);
    setModel(tempModel);
  };

  //For using it with pre rendering
  const setCarsFunction = useCallback(() => {
    setCars(carsData);
  }, [carsData]);

  // For using it wihtout pre rendering
  // const setCarsFunction = useCallback(() => {
  //   setCars(data);
  // }, [data]);

  useEffect(() => {
    setCarsFunction();
  }, [setCarsFunction]);

  return (
    <div className="min-h-[81vh] md:min-h-[78vh] lg:min-h-[85vh]">
      <Dropdown
        handleModelSelection={handleModelSelection}
        fetchModels={fetcModels}
        cars={cars}
      />
      {showmodels && <Models model={model} showmodels={showmodels} />}
    </div>
  );
}

// Using getStaticProps(context) for per rendering

export async function getStaticProps(context) {
  let response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
  );

  console.log(response);
  let data = await response.json();
  let carsData = await data.Results;

  return {
    props: {
      carsData,
    },
  };
}
