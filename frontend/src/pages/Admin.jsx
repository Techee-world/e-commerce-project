import React, { useState } from "react";

const AdminList = () => {
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    regularPrice: 0,
    discountPrice: 0,
    images: "",
  });
  function changeHandle(e) {
     if (e.target.files && e.target.files[0]) {
         setImageUrl(URL.createObjectURL(e.target.files[0]));
       setFormData(URL.createObjectURL(e.target.files[0]));
     }
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
        
      });
  }
  const formSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const respond = await fetch("/backend/addItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const dataItem = await respond.json();
      if (dataItem.success === false) {
        setError(dataItem.message);
        return;
      }
      alert('items adding is successful')
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="md:pb-20">
      <main className="p-3 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">
          Create a Listing
        </h1>
        <form
          onSubmit={formSubmitHandle}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="flex flex-col gap-4 flex-1">
            <input
              onChange={changeHandle}
              value={formData.name}
              type="text"
              placeholder="Name"
              className="border p-3 rounded-lg"
              id="name"
              required
            />
            <textarea
              onChange={changeHandle}
              value={formData.description}
              type="text"
              placeholder="Description"
              className="border p-3 rounded-lg"
              id="description"
              required
            />
            <div className="flex gap-6 flex-wrap">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <input
                    onChange={changeHandle}
                    value={formData.regularPrice}
                    type="number"
                    id="regularPrice"
                    required
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <div className="flex flex-col items-center">
                    <p>Regular price</p>
                    <span className="text-xs">($ / month)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    onChange={changeHandle}
                    value={formData.discountPrice}
                    type="number"
                    id="discountPrice"
                    required
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <div className="flex flex-col items-center">
                    <p>Discounted price</p>
                    <span className="text-xs">($ / month)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-4">
              <p className="font-semibold">
                Images:
                <span className="font-normal text-gray-600 ml-2">
                  The first image will be the cover (max 6)
                </span>
              </p>
              <div className="flex gap-2">
                <input
                //   onChange={onImageChange}
                  onChange={changeHandle}
                  className="p-3 border border-gray-300 rounded w-full"
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                />

                <img src={imageUrl} className="w-16 h-16 " alt="image" />
              </div>
              <button
                type="submit"
                className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
              >
                list items
              </button>
              {error && <p className="text-red-700 text-sm">{error}</p>}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AdminList;
