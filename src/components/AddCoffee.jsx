const AddCoffee = () => {
  return (
    <>
      <h2>Add a coffee!</h2>
      <form>
        <div className=" flex ">
          <div className="join">
            <input
              type="text"
              className="input input-bordered join-item"
              placeholder="Name"
            />
            <button className="btn join-item rounded-r-full">Add</button>
          </div>
          <div className="join">
            <input
              type="text"
              className="input input-bordered join-item"
              placeholder="Quantity"
            />
            <button className="btn join-item rounded-r-full">Add</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCoffee;
