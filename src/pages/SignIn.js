import React from "react"; 
function SignIn() {
    return (  
        <div>
    <div className="container mx-auto mt-12">
    
  </div>
  <form class=" w-1/2 mx-auto bg-indigo-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="">
          </input>
    </div>
    <div class="mb-6">
      <label class="block text-white text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="">
          </input>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-white hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>  



    );
  }
  
  
  export default SignIn;


