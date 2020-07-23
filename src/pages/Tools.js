import React from "react"; 
import SearchBar from "../components/SearchBar";




function Tools() {
    return (  
        <div className="container mx-auto mt-12" >   
        <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

  <div className=" rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://blog.optimalworkshop.com/wp-content/uploads/2020/03/5-tips-for-running-an-effective-usability-test.png" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
     Build a Usability Test
    </div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>

  <div className=" rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://www.workana.com/i/wp-content/uploads/2019/02/buyer-personas.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
     Create a Persona
    </div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>


  <div className=" rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://ojjme2x5sm337cgpo2mhuny3-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/improve-interviewing-skills-featured.png" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
     Conduct User interviews
    </div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>

  

</div>
</div>   


    );
  }
  
  
  export default Tools;


