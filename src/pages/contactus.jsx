import { useState } from "react";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectSubject: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      selectSubject: "",
      message: "",
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <div className="relative mb-50 border-t-3 mt-10 border-gray-200 pb-10 pt-10 top-20 text-slate-900">
      <div className="mt-10 w-1/2 ml-auto mr-auto pb-10 ">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Any question or remark? Just write us a message!
        </p>
      </div>
      <div className=" flex w-5/6 h-150 mt-3 shadow-sm bg-white mx-auto">
        <div className="h-full w-1/2 bg-[#0362F4] pl-10  rounded-bl-lg rounded-tr-lg rounded-tl-lg ">
          <div className="mt-10 w-3/4 flex flex-col items-start">
            <h1 className="text-white text-2xl font-bold mb-1">
              Contact Information
            </h1>
            <p className="text-gray-300">Say something to start a live chat!</p>
          </div>
        </div>
        <div className=" h-full w-3/4 rounded-tr-lg rounded-br-lg">
          <form onSubmit={handleSubmit} className="p-10">
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1 items-start">
                <label htmlFor="firstName">First Name:</label>
                <input
                  className="border-b-2 border-gray-200 outline-none w-70"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex flex-col space-y-1 items-start">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  className="border-b-2 border-gray-200 outline-none w-70"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1 items-start ">
                <label htmlFor="email">Email:</label>
                <input
                  className="border-b-2 border-gray-200 outline-none w-70"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex flex-col space-y-1 items-start">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  className="border-b-2 border-gray-200 outline-none w-70"
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            {/*--- Radio Button Section */}
            <div className=" mt-10">
              <p className="w-30">Select Subject?</p>
              <div className="radio-group flex gap-2 mt-3">
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="selectSubject"
                    value="General Inquiry"
                    checked={formData.selectSubject == "General Inquiry"}
                  ></input>
                  General Inquiry
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="selectSubject"
                    value="General Inquiry"
                    checked={formData.selectSubject == "General Inquiry"}
                  ></input>
                  General Inquiry
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="selectSubject"
                    value="General Inquiry"
                    checked={formData.selectSubject == "General Inquiry"}
                  ></input>
                  General Inquiry
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="selectSubject"
                    value="General Inquiry"
                    checked={formData.selectSubject == "General Inquiry"}
                  ></input>
                  General Inquiry
                </label>
              </div>
            </div>
            {/*--- Message Section */}
            <div className="flex gap-5 flex-col items-start mt-10">
              <label htmlFor="message">Message</label>
              <textarea
                className="w-full pb-1 border-b-2 border-gray-200 h-10 outline-none"
                placeholder="Write your message."
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="bg-[#0362F4] text-white px-6 rounded mt-10 ml-105 py-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
