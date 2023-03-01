const Dropdown = ({ handleModelSelection, cars, fetchModels }) => {
    return (
      <div class="flex jw-full mx-auto bg-veryLightGray p-6">
        <div class="mx-auto flex-column w-full">
          <h1 class="text-2xl font-bold mt-0  mb-2">Makes</h1>
          <div class="flex-column w-full md:flex">
            <select
              onChange={handleModelSelection}
              class="border-2 w-full max-w-2xl border-black"
            >
              <option key="23est43" value="None" selected disabled>
                -- Select a model --
              </option>
              {cars?.map((car) => (
                <option key={car.Make_ID} value={car.Make_Name}>
                  {car.Make_Name}
                </option>
              ))}
            </select>
            <button
              class="bg-blue-500 mt-5 md:mt-0  md:ml-10 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              onClick={fetchModels}
            >
              Fetch Models
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dropdown;
  