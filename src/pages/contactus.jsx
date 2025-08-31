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
    <div className="relative mb-40 border-t-3 mt-10 border-gray-200 pb-10 pt-10 top-20 text-slate-900">
      <div className="mt-10 w-1/2 ml-auto mr-auto pb-10 ">
        <h1 className="text-3xl font-[700] mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Any question or remark? Just write us a message!
        </p>
      </div>
      <div className=" flex w-5/6 h-150 mt-3 shadow-[0_0_60px_30px_rgba(0,0,0,0.03)] rounded-lg bg-white mx-auto">
        <div className="h-full w-1/2 bg-[#0362F4] pl-10  rounded-bl-lg rounded-tr-lg rounded-tl-lg ">
          <div className="mt-10 w-3/4 flex flex-col items-start">
            <h1 className="text-white text-3xl font-bold mb-1">
              Contact Information
            </h1>
            <p className="text-[#C9C9C9]">
              Say something to start a live chat!
            </p>
            <div className="mt-20">
              <div className="flex gap-1 items-center mb-10">
                <img
                  src="public\Contactus-icons\Vector (1).png"
                  className="w-4.5 h-4.5"
                ></img>
                <img
                  src="public\Contactus-icons\Vector (2).png"
                  className="w-2 h-2 relative -left-3 -top-1.5 "
                ></img>
                <p className="text-[#ffffff]">+2348068073362</p>
              </div>
              <div className="flex gap-4 items-center mb-10">
                <img
                  src="public\Contactus-icons\Vector.png"
                  className="h-4"
                ></img>
                <p className="text-[#ffffff]">hostly@gmail.com</p>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  src="public\Contactus-icons\Vector (4).png"
                  className="-top-3 relative"
                ></img>
                <p className="text-[#ffffff] text-left">
                  132 Dartmouth street Boston,<br></br>Massachusettes 02156
                  united states
                </p>
              </div>
            </div>

            <div className="flex h-60 items-end w-103 ">
              <div className="items-center mb-5 gap-2 w-50 h-10 flex">
                <div className="flex">
                  <img
                    className="w-6 h-6"
                    src="public\Contactus-icons\Ellipse 795.png"
                  ></img>
                  <img
                    className="w-3 h-3 relative -left-4.5 top-1.5"
                    src="public\Contactus-icons\Vector (5).png"
                  ></img>
                </div>
                <div className="flex">
                  <img
                    className="w-6 h-6"
                    src="public\Contactus-icons\Ellipse 796.png"
                  ></img>
                  <img
                    className="w-3 h-3 relative -left-4.5 top-1.5"
                    src="public\Contactus-icons\Vector (6).png"
                  ></img>
                </div>
                <div className="flex">
                  <img
                    className=" w-6 h-6"
                    src="public\Contactus-icons\Ellipse 797.png"
                  ></img>
                  <img
                    className="w-3 h-3 relative -left-4.5 top-1.5"
                    src="public\Contactus-icons\Vector (7).png"
                  ></img>
                </div>
              </div>
              <div className="flex w-55 h-50">
                <img
                  className=" relative left-5.5 top-0.5"
                  src="public\Contactus-icons\Ellipse 793.png"
                ></img>
                <img
                  className=" relative -top-20 -left-60"
                  src="public\Contactus-icons\Ellipse 794.png"
                ></img>
              </div>
            </div>
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

      <div className="mt-30 mr-auto ml-auto w-4/5">
        <div className="rounded-[15px] py-20 px-10 gap-10 items-center flex flex-col bg-gradient-to-r from-[rgba(3,98,244,1)] to-[rgba(3,98,244,0.2)] w-full h-75">
          <h1 className="text-3xl font-semibold text-[rgba(45,46,46,1)]">
            Be among the first to experience next-gen hosting
          </h1>
          <p className="text-sm font-normal text-[rgba(45,46,46,1)]">
            Let's embody your beautiful idea together, simplify the way you
            vitualize your next big things.
          </p>
          <button className="bg-[#0362F4] w-[245px] text-[18px] text-white h-[56px] py-2 px-3 rounded-2xl ">
            Get early access now
          </button>
        </div>
      </div>
    </div>
  );
}
