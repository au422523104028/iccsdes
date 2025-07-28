function Aboutus() {
    return (
        <>
            <section>
                <div className="h-[400px] bg-center bg-cover flex justify-center items-center" style={{backgroundImage:"url('/image/Rectangle 4326.png')"}}>
                    {/* <div>
                        <img className="w-[1920px] h-[348] pt-25" src="//image/Rectangle 4326.png" alt="" />
                    </div> */}
                    <div className="flex justify-center items-center">
                        <h1 className="lg:text-[36px] text-3xl text-red-500 namdhinggo-extrabold">About Us</h1>
                    </div>
                </div>
                <div className="w-full lg:flex-row lg:px-50 lg:py-30 flex flex-col-reverse ">
                    <div className="lg:w-1/2 p-5">
                        <img src="/image/Rectangle 4321.png" alt="" />
                    </div>
                    <div className="lg:w-1/2 p-5">
                        <h1 className=" text-red-600 text-4xl  lg:text-[36px] namdhinggo-extrabold">About Our Conference</h1>
                        <hr className="border-t-4 border-red-600 my-4 " />
                        <h1 className="lg:text-[32px] text-2xl pb-5 namdhinggo-extrabold">Shaping the Future of Digital Ecosystems</h1>
                        <p className=" pb-4 leading-[30px] text-justify">Our conference brings together global experts to explore innovations in computer science and digital ecosystems. It serves as a platform for sharing research, exchanging ideas, and promoting collaboration across disciplines to address technological challenges and shape the future of digital innovation.</p>
                        <p className=" pb-4 leading-[30px] text-justify">The event features keynote sessions, technical presentations, workshops, and expert panels. Topics include artificial intelligence, cybersecurity, cloud computing, and IoT. Attendees gain insights, showcase work, and build connections that support academic growth, industry relevance, and technological advancement.</p>
                        <p className=" pb-4 leading-[30px] text-justify">We aim to foster impactful dialogue and practical solutions through research and collaboration. Our mission is to support innovation, bridge academia and industry, and inspire participants to contribute meaningfully to the evolving landscape of digital ecosystems and smart technologies.</p>
                    </div>
                </div>
                <div className="bg-rose-200 lg:h-140 pb-5  lg:mt-10 lg:pt-10  ">
          <div className="max-w-[1500px] mx-auto">
            <h1 className="text-3xl  text-red-600  text-center  capitalize lg:p-4 p-2 namdhinggo-extrabold">Join Us at ICCSDES 2025</h1>
            <p className="  capitalize text-center p-2 inter-semibold inter-regular">Be a part of ICCSDES and experience a global platform for innovation, research, and collaboration.
              <br />
              Engage with leading minds and shape the future of digital technologies.</p>
            <div className="flex flex-col md:flex-row  justify-center items-center space-y-2 p-4 gap-5">
              <div className="flex gap-2 items-center">
                <img className=" lg:w-10 w-9 object-contain" src="/image/Location.png" alt="" />
                <h1 className="capitalize lg:text-2xl lg:p-5">Beijing , China</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img className="lg:w-10 w-9 object-contain" src="/image/Calendar.png" alt="" />
                <h1 className="capitalize lg:text-2xl lg:p-5">28th to 30th September, 2025</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img className="lg:w-10 w-9 object-contain " src="/image/Clock.png" alt="" />
                <h1 className="capitalize lg:text-2xl lg:p-5">9:00 AM – 5:00 PM</h1>
              </div>
            </div>
            <div className="mx-auto lg:h-[220px] lg:w-[1000px] bg-white rounded-2xl lg:p-5  h-47 w-90 p-2 ">
              <h1 className="capitalize lg:text-3xl  text-red-600 text-center font-medium namdhinggo-extrabold">Ready to Join the Innovation ?</h1>
              <p className="text-center lg:p-5 capitalize p-1 inter-regular text-gray-700">Connect with global experts and explore groundbreaking ideas in computer science and digital ecosystems. Be part of the movement shaping tomorrow’s technology.</p>
              <div className="flex bg-red-600 w-fit lg:rounded-xl  rounded  justify-center     py-2 px-2 mx-auto  ">
                <button type="submit" className=' text-white lg:text-xl ' >Register now</button>
                <img className="lg:w-10 object-contain w-6 p-1" src="/image/Right Arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
            </section>
        </>
    )
}
export default Aboutus;