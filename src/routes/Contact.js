import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center ">
        <form
          method="POST"
          action="https://getform.io/f/55af859d-585d-4c63-b0f8-9c729657077c"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="text-white ">
            <p className="text-5xl border-b-4  border-yellow-400 inline text-gray-400  ">
              CONTACT
            </p>
            <p className=" my-4 text-xl">
              // Submit the form below or shoot me an email -
              renuuu157@gmail.com
            </p>
          </div>
          <input
            name="name"
            className="bg-slate-200 p-2 rounded-sm"
            type="text"
            placeholder="Name"
          ></input>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="bg-slate-200 p-2 rounded-sm my-2"
          ></input>
          <textarea
            name="message"
            className="bg-slate-200 p-2 rounded-sm my-2"
            rows={10}
            placeholder="Message"
          ></textarea>
          <input
            name="phone no."
            type="number"
            placeholder="Phone number"
            className="bg-slate-200 p-2 rounded-sm my-2"
          ></input>

          <button className="text-white bg-2 bg-pink-600 w-[30%] rounded-full p-4 font-bold mx-auto my-8 ">
            Let's Collaborate
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
