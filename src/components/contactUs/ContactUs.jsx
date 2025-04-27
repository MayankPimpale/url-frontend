import React from "react";
import { assets } from "../../assets/assets";

function ContactUs() {

    return (

        <div className="container mx-auto flex justify-between items-center gap-12 px-64 py-10 min-h-[90vh] max-lg:flex-col-reverse">
  {/* Contact Form */}
  <div className="w-full max-w-md border border-gray-300 p-6 rounded-xl shadow-md bg-white">
    <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Get in Touch</h2>

    <form action="#" className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-base mb-1 font-medium" htmlFor="fname">First Name</label>
        <input className="px-3 py-2 border border-gray-300 outline-none rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400" type="text" placeholder="FirstName" id="fname" />
      </div>

      <div className="flex flex-col">
        <label className="text-base mb-1 font-medium" htmlFor="lname">Last Name</label>
        <input className="px-3 py-2 border border-gray-300 outline-none rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400" type="text" placeholder="LastName" id="lname" />
      </div>

      <div className="flex flex-col">
        <label className="text-base mb-1 font-medium" htmlFor="email">Email</label>
        <input className="px-3 py-2 border border-gray-300 outline-none rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400" type="email" placeholder="example@email.com" id="email" />
      </div>

      <div className="flex flex-col">
        <label className="text-base mb-1 font-medium" htmlFor="phonenumber">Phone Number</label>
        <input className="px-3 py-2 border border-gray-300 outline-none rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400" type="text" placeholder="+91 12345 67890" id="phonenumber" />
      </div>

      <div className="flex flex-col">
        <label className="text-base mb-1 font-medium" htmlFor="textarea">How can we help you?</label>
        <textarea className="px-3 py-2 border border-gray-300 outline-none rounded-md bg-gray-100 resize-none focus:ring-2 focus:ring-blue-400" id="textarea" rows="4" placeholder="Let us know what you're looking for..."></textarea>
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:scale-105 transition-all duration-300 font-medium">Submit</button>
    </form>
  </div>

  {/* Image Section */}
  <div className="w-full max-w-lg flex justify-center items-center">
    <img className="max-w-full h-auto object-contain" src={assets.contactUs} alt="Contact Us Illustration" />
  </div>
</div>

    )

}

export default ContactUs