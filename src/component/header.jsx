import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <header >
        <div className=" flex  bg-white  justify-between p-2  w-[100%] fixed shadow-lg/50 ">
          <div className='text-xl p-1 text-blue-900'>
            <h1 className="text-4xl  text-red-600 p-2 namdhinggo-extrabold">ICCSDES</h1>
          </div>
          <div className="flex lg:font-size: xl-large hidden md:font-size-xl  lg:flex">
            <Link to="/" className="  text-red-600 p-4">Home</Link>
            <Link to="/" className=" text-red-600 p-4">AboutUs</Link>
            <Link to="/" className=" text-red-600 p-4">Author’s Desk</Link>
            <Link to="/" className=" text-red-600 p-4">Contact Us</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;