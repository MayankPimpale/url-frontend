import React from 'react'

const About = () => {
  return (
    <div className="min-h-[87vh]">
  <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    {/* About Us Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Who We Are</h1>
        <p className="font-normal text-base leading-6 text-gray-600">
          We are a passionate team committed to simplifying how brands connect with their audience. With creativity and cutting-edge tech, 
          we build platforms that empower people to share, link, and engage seamlessly across the web.
        </p>
      </div>
    </div>

    {/* Our Story Section */}
    <div className="flex flex-col lg:flex-row justify-around gap-8 pt-12">
      <div className="w-full lg:w-5/12 flex flex-col justify-around">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Journey</h1>
        <p className="font-normal text-base leading-6 text-gray-600">
          Our story began with a simple idea: to make digital connections easier and more meaningful. From a small team with a big vision,
          we’ve grown into a company trusted by thousands. Our journey continues as we explore new ways to connect the world.
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default About