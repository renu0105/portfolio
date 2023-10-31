import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center ">
        <form action="" className="flex flex-col max-w-[600px] w-full">
          <div className="text-white ">
            <p className="text-5xl border-b-4  border-yellow-400 inline text-gray-400  ">
              CONTACT
            </p>
            <p className=" my-4 text-xl">
              // Submit The form Below Or Shoot Me Email
            </p>
          </div>
          <input type="text" placeholder="Name" className="p-2"></input>
          <input
            type="text"
            placeholder="Email"
            className="my-3 p-2 bg-blue-200"
          ></input>
          <textarea
            className="text-gray-500 p-2 py-6 "
            placeholder="Message"
          ></textarea>
          <input
            type="number"
            placeholder="Phone number"
            className="my-4 p-4"
          ></input>

          <button className="text-white bg-2 bg-pink-600 w-[20%] rounded-full p-4 font-bold mx-auto my-8 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
