import React from "react"; 
import { Link } from "react-router-dom";


function TopNav() {
    return(
    <nav className=" flex items-center justify-between flex-wrap bg-indigo-700 p-6">
  <div className="  flex items-center flex-shrink-0 text-white mr-6">
  <div>
  <svg className= "fill-current h-5 w-5" viewBox="0 0 333.33 333.33"> <path d="M52.65 152.84l114.01-83.18 114.01 83.18v160.05H52.65V152.84zm53.89 20.46h40.16v124.79h119.17V160.66l-99.21-73.09-99.21 73.09v137.43h39.09V173.3zm84.2 0h-29.79v36.28h29.79V173.3zm0 79.03h-29.79v-36.28h29.79v36.28zm6.25 0h29.79v-36.28h-29.79v36.28zm0-79.03h29.79v36.28h-29.79V173.3zm38.34-125.67h51.81v62.36l33.68 25.04v57.7H290.4v-44.04L166.65 56.7 42.9 148.69v44.04H12.49v-57.71L166.65 20.43l68.67 51.04V47.63z" /></svg>
  </div>
    <span className="font-semibold text-xl tracking-tight ml-1">Research Home</span>
  </div>

  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Library</Link>
      <Link to="/New Project" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">New Study</Link>
      <Link to="/Tools" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Tools</Link>
      <Link to="/Admin" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Admin</Link>
      <Link to="/FullReports" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Full Reports</Link>
    </div>
    <div className="flex flex-row-reverse">
      <Link to= "/SignIn" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign-in</Link>
      <img className="w-10 h-10 rounded-full mr-4 border-solid border-4 border-green-400" src="https://pbs.twimg.com/profile_images/1248780370180538370/Ud6V-M1D_400x400.jpg "alt="Avatar" />
   </div>
  </div>
</nav>
)
}

export default TopNav; 