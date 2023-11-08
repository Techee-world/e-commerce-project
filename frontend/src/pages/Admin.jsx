import React, { useState } from "react";

const AdminList = () => {
  const [files, setFiles] = useState();
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    regularPrice: 0,
    discountPrice: 0,
    images:''
  });
function changeHandle(e){
    setFormData({
      ...formData,
      [e.target.id]: e.target.value 
    });
}
 async function formSubmitHandle(e){
    // e.preventDefault();
    // try {
    //     const res = await fetch('/backend/addItem',{
    //         method : 'POST',
    //         headers : {'Content-Type': 'application/'},
    //         body : JSON.stringify(formData)
    //     })
    //     const data = await res.json();
    //     if (data.success === false) {
    //       setError(data.message);
    //       return;
    //     }
    // } catch (error) {
    //     setError(error.message)
    // }
}
console.log(formData,',,formData.,,');
console.log(imageUrl, ",,img.,,");
  return (
    <div className="md:pb-20">
      <main className="p-3 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">
          Create a Listing
        </h1>
        <form onClick={formSubmitHandle} className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <input
              onChange={changeHandle}
              value={formData.name}
              type="text"
              placeholder="Name"
              className="border p-3 rounded-lg"
              id="name"
              maxLength="62"
              minLength="10"
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
                    min="50"
                    max="10000000"
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
                    min="0"
                    max="10000000"
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
                  onChange={(e) => setFiles(e.target.files[0])}
                  className="p-3 border border-gray-300 rounded w-full"
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                />
                <span
                  className="border w-6 p-1 bg-red-300  cursor-pointer"
                  onClick={() => {
                    files && setImageUrl(URL.createObjectURL(files));
                  }}
                >
                  <img
                    className="w-6 pt-6 "
                    src="https://cdn-icons-png.flaticon.com/128/8151/8151726.png"
                    alt=""
                  />
                </span>
                <img src={imageUrl} className="w-16 h-16 " alt="image" />
              </div>
              <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
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
