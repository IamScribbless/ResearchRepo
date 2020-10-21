import React from "react"; 
import { Link } from "react-router-dom";
import Feedback from "../components/Feedback"; 
import Flow from "../components/Flow"; 
function TopNav() {
    return(
    <nav className="navbackground sticky flex flex-row items-center justify-between flex-wrap p-3">
  <div calassName="  flex items-center flex-row flex-shrink-0 text-white">
  <div>
  </div>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow  ml-4">
    <Link to="/">
    <span className=" text-logo-100 font-semibold text-xl tracking-tight mr-4  " >Research Home</span>
    </Link>
      <Link to="/" className=" blue block mt-4 lg:inline-block lg:mt-0 text-white font-semibold   mr-4">My Library</Link>
      <Link to="/NewStudy" className=" blue block mt-4 lg:inline-block lg:mt-0 text-white font-semibold  mr-4">New Study</Link>
      <Link to="/Flow" className="blue block mt-4 lg:inline-block lg:mt-0 text-white font-semibold   mr-4">Projects</Link>
      {/* <Link to="/Landing" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Landing Page</Link>*/}
      {/* <Link to="/TaskList" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Task List</Link> */}

    </div>
    <div className="flex flex-row-reverse">
<Feedback />
    <img className="w-10 h-10 rounded-full mr-4 border-solid border-4 mt-1" src="https://pbs.twimg.com/profile_images/1248780370180538370/Ud6V-M1D_400x400.jpg "alt="Avatar" />

   </div>
  </div>
</nav>
)
}

export default TopNav; 