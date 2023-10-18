const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = { name, quantity, supplier, taste, category, photo };

    console.log(newCoffee);
  };

  return (
    <div className=" bg-[#F5F3F0] p-24">
      <h2 className=" text-3xl font-extrabold">Add a coffee!</h2>
      <form onSubmit={handleAddCoffee}>
        {/* Name And quantity Row */}
        <div className=" md:flex mb-8">
          <div className="join md:w-1/2">
            <input
              type="text"
              name="name"
              className="input input-bordered join-item w-full"
              placeholder="Name"
            />
          </div>
          <div className="join md:w-1/2 ml-4">
            <input
              type="text"
              name="quantity"
              className="input input-bordered join-item w-full"
              placeholder="Quantity"
            />
          </div>
        </div>
        {/*Supplier Row */}
        <div className=" md:flex mb-8">
          <div className="join md:w-1/2">
            <input
              type="text"
              name="supplier"
              className="input input-bordered join-item w-full"
              placeholder="Supplier Name"
            />
          </div>
          <div className="join md:w-1/2 ml-4">
            <input
              type="text"
              name="taste"
              className="input input-bordered join-item w-full"
              placeholder="Taste"
            />
          </div>
        </div>
        {/* Category and details row */}
        <div className=" md:flex mb-8">
          <div className="join md:w-1/2">
            <input
              type="text"
              name="category"
              className="input input-bordered join-item w-full"
              placeholder="Category"
            />
          </div>
          <div className="join md:w-1/2 ml-4">
            <input
              type="text"
              name="details"
              className="input input-bordered join-item w-full"
              placeholder="Details"
            />
          </div>
        </div>
        {/* form photo url row */}
        <div className="">
          <div className="join w-full">
            <input
              type="text"
              name="photo"
              className="input input-bordered join-item w-full"
              placeholder="Photo URL"
            />
          </div>
        </div>
        <div className=" mt-5">
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-slate-700 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
