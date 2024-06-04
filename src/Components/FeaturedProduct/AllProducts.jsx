
const AllProducts = ({product}) => {
    return (
        <div>
           <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-4 mx-auto">
        
        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-1 xl:mt-10 max-w-7xl">
          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="flex items-center mt-6">
              <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Robbert" />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultency</span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default AllProducts;