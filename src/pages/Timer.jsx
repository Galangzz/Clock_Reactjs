import Timers from "../components/Timers";
import Navbar from "../components/ui/Navbar";
import Wrapp from "../components/ui/Wrapp";

function Timer(){
  return(
    <>
      <div className="flex-col bg-blue-600 min-h-screen justify-center ">
          <Navbar/>
          <Wrapp title="Timer">
              <Timers></Timers>
          </Wrapp>
      </div>
    </>
  );
}

export default Timer;