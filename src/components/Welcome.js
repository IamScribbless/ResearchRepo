import React from "react";

function Welcome() {
  const imgstyle = {
    width: "30%",
    height: "30%"
  };

  return (
    <div className="container mx-auto mt-12 border-3 border-gray-300 ">
      <section className=" flex flex-row ">
        <img
          style={imgstyle}
          className=" ml-48"
          src={
            "https://image.freepik.com/free-vector/usability-testing-concept-illustration_114360-2980.jpg"
          }
        ></img>

        <section className="flex flex-col mx-4 ">
          <p className="text-2xl font-bold text-black">
            Welcome to <b> Research Vault! </b>
          </p>{" "}
          <p className="mb-3">
            {" "}
            Research vault lets you organize, access, and share your research library, UX
            artifacts, project-deliverables, and insights in one place. The
            project is currently in development.{" "}
          </p>
          
          <button
            onClick={e => {
              e.preventDefault();
              window.location.href = "https:github.com/Kotin18/ResearchRepo";
            }}
            className="border bg-gray-800 border-gray-800 rounded-md px-1 py-6 my-1 mt-4 text-lg font-semibold text-white ml-2 mt-1 hover:bg-gray-700"
          >
            Visit Project GitHub
          </button>

      
      
        </section>
      </section>
    </div>
  );
}

export default Welcome;
