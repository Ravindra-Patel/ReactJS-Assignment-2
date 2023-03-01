const Model = ({ cars }) => {
    return (
      <div>
        {!cars && (
          <div class="flex mainDiv jw-full mx-auto p-6 ">
            <div class="mx-auto flex-column w-full">
              <h1 class="text-2xl font-bold mt-0  mb-2">No Data Available!!!</h1>
            </div>
          </div>
        )}
        {cars?.map((car) => (
          <div
            key={car.Model_Name}
            class="flex my-4 max-w-2xl p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <p class="font-normal w-[20%] m-5 text-gray-700 dark:text-gray-400">
              <b>ID:</b> {car.Make_ID}
            </p>
            <p class="font-normal w-[40%] m-5 text-gray-700 dark:text-gray-400">
              <b>Make:</b> {car.Make_Name}
            </p>
            <p class="font-normal w-[40%] m-5 text-gray-700 dark:text-gray-400">
              <b>Model:</b> {car.Model_Name}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Model;
  