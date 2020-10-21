import React from 'react'; 
import BackButton from '../components/BackButton'; 

function TaskList(){
    return(
        <div>
        <div className=" my-10 mx-24">
        <BackButton /> <br />
        <label htmlFor="StudyName" className="font-extrabold text-3xl"> New Usability Study </label>
      <hr />
      <br />
    <label htmlFor="StudyName" className="text-lg text-gray-700 font-semibold "> Study Name </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder=""
          // onChange={}
          // value={}
        />
      </div>
        <div className=" flex flex-col my-10 mx-24">
      <div className="container mx-auto mt-4" >
      <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Task #1</label>
        <input
          id="task1"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="task #1"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Scenario </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Scenario"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Success Definition </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="How is success for this task defined?"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Failure Definition </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="How is failure for this task defined?"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Post-task questions </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Follow up questions for users"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Other Notes </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder=""
          // onChange={}
          // value={}
        />
      </div>
          </div>


          <br />
          <hr />
          <br />
  <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div className=" font-bold text-gray-700 text-sm mb-2">
    <label htmlFor="task1"> Task #2</label>
    <input
        id=""
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="task #2"
        // onChange={}
        // value={}
    />
    </div>
    <div className=" font-bold text-gray-700 text-sm mb-2">
    <label htmlFor="task1"> Scenario </label>
    <input
        id=""
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Scenario"
        // onChange={}
        // value={}
    />
    </div>
    <div className=" font-bold text-gray-700 text-sm mb-2">
    <label htmlFor="task1"> Success Definition </label>
    <input
        id=""
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="How is success for this task defined?"
        // onChange={}
        // value={}
    />
    </div>


    <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Failure Definition </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="How is failure for this task defined?"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Post-task questions </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Follow up questions for users"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Other Notes </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder=""
          // onChange={}
          // value={}
        />
      </div>
          </div>

    <br />
          <hr />
          <br />
  <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div className=" font-bold text-gray-700 text-sm mb-2">
    <label htmlFor="task1"> Task #3</label>
    <input
        id=""
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="task #2"
        // onChange={}
        // value={}
    />
    </div>
    <div className=" font-bold text-gray-700 text-sm mb-2">
    <label htmlFor="task1"> Scenario </label>
    <input
        id=""
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Scenario"
        // onChange={}
        // value={}
    />
    </div>
    <div className=" font-bold text-gray-700 text-sm mb-2">
    <label htmlFor="task1"> Success Definition </label>
    <input
        id=""
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="How is success for this task defined?"
        // onChange={}
        // value={}
    />
    </div>


    <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Failure Definition </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="How is failure for this task defined?"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Post-task questions </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Follow up questions for users"
          // onChange={}
          // value={}
        />
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="task1"> Other Notes </label>
        <input
          id=""
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder=""
          // onChange={}
          // value={}
        />
      </div>
          </div>
          </div>
          </div>
          </div>
    );
}

export default TaskList; 