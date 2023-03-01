import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import Models from "../components/Models";

export default function Home({ carsData }) {
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

  const setCarsFunction = useCallback(() => {
    setCars(carsData);
  }, [carsData]);

  useEffect(() => {
    setCarsFunction();
  }, [setCarsFunction]);

  return (
    <div className="min-h-[81vh] md:min-h-[78vh]">
      <Dropdown
        handleModelSelection={handleModelSelection}
        fetchModels={fetcModels}
        cars={cars}
      />
      {showmodels && <Models model={model} showmodels={showmodels} />}
    </div>
  );
}

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
