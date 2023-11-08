import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLog({ setLoginMail }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  function inputHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  async function adminSubmitHandle(event) {
    setLoginMail(formData);
    try {
      event.preventDefault();
      const respond = await fetch("/backend/adminLog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await respond.json();
      console.log(data, "data is that");
      if (data.success === false) {
        setErrors(data.message);
        return;
      }
      setErrors(null);
      navigate("/adminList");
    } catch (error) {
      setErrors(error.message);
    }
  }
  console.log(formData);
  return (
    <div>
      <main className="flex flex-col  justify-between">
        <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
          <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
            <div className="">
              <p className="text-4xl font-bold uppercase">admin login </p>
              <p>welcome admin</p>
            </div>

            <form onClick={adminSubmitHandle} className="mt-6 flex flex-col">
              <label className="mt-3">Email Address</label>
              <input
                onChange={inputHandler}
                className="mt-3 border px-4 py-2"
                type="email"
                placeholder="@mail.com..."
                name="email"
              />

              <label className="mt-5">Password</label>
              <input
                onChange={inputHandler}
                className="mt-3 border px-4 py-2"
                type="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                name="password"
              />

              <div className="mt-4 flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <label>
                    I have read and agree with
                    <a href="#" className="text-violet-900">
                      terms &amp; conditions
                    </a>
                  </label>
                </div>
              </div>

              <button className="my-5 w-full bg-violet-900 py-2 text-white">
                LOG IN
              </button>
            </form>
            <p className="text-center">
              Already have an account?
              <Link to="/adminSing">
                {" "}
                <span href="login.html" className="text-violet-900">
                  sign up
                </span>
              </Link>
            </p>
          </div>

          {errors && (
            <p className="text-center text-red-800 font-semibold">{errors}</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminLog;
