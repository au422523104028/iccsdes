function Footer() {

  return (
    <>
      <footer>
        <div className=" lg:h-[274px] bg-red-700  text-white ">
          <div className="lg:flex justify-center items-center lg:pt-15 pl-25" >
            <div className="lg:pr-40">
              <h1 className="lg:text-3xl  p-2 namdhinggo-extrabold text-xl  ">ICCSDES</h1>
            </div>
            <div className="lg:pr-15 lg:pl-15">
              <h1 className="text-xl">Quick Links</h1>
              <div className="p-2">
                <li>About the Conference</li>
                <li>Scope </li>
                <li>Organization Committee</li>
                <li>Editorial Board</li>
              </div>
            </div>
            <div className="lg:pr-15 lg:pl-15">
              <h1 className="text-xl">Registration Guide</h1>
              <div className="p-2">
                <li>Key Dates</li>
                <li>Registration Details</li>
                <li>Paper submission</li>
              </div>
            </div>
            <div className="lg:pr-15 lg:pl-15">
              <h1 className="text-xl">Contact Info</h1>
              <div className="p-2">
                <p> Beijing, China</p>
                <p> iccsdes.conference@gmail.com</p>
                <p>+91 8870212121</p>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-center items-center">
            <h1>© 2025 ICCSDES.  All Rights Reserved.</h1>
          </div>
        </div>
      </footer>

    </>

  )
}
export default Footer;