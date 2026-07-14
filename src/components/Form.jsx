import React from "react";

const Form = () => {
  return (
    <section className="py-12 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center uppercase mb-8">
          Get In Touch
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#f6815e] hover:bg-[#e96f4a] text-white font-semibold py-3 rounded-full uppercase transition duration-300"
          >
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;