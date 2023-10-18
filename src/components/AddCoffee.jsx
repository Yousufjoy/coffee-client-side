import Swal from "sweetalert2";

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

    //send data to the server

    fetch("http://localhost:5000/coffee", {
      // eta korar jonno just google e Uploading JSON data likhe search dile pawa jabe doc
      method: "POST",
      headers: {
        "content-type": "application/json", // Ki dhoroner data pathabo jehetu json type
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // insertedId eta pacchi amra dat k console log korle
          Swal.fire({
            icon: "success",
            title: "Coffee Added Successfully!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
              defaultValue="Name"
            />
          </div>
          <div className="join md:w-1/2 ml-4">
            <input
              type="text"
              name="quantity"
              className="input input-bordered join-item w-full"
              defaultValue="Quantity"
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
              defaultValue="Supplier Name"
            />
          </div>
          <div className="join md:w-1/2 ml-4">
            <input
              type="text"
              name="taste"
              className="input input-bordered join-item w-full"
              defaultValue="Taste"
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
              defaultValue="Category"
            />
          </div>
          <div className="join md:w-1/2 ml-4">
            <input
              type="text"
              name="details"
              className="input input-bordered join-item w-full"
              defaultValue="Details"
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
              defaultValue="Photo URL"
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
