import Navbar from "../components/ui/Navbar";
import Wrapp from "../components/ui/Wrapp";
import Stopwatches from "../components/Stopwatches";
function Stopwatch(){
    return(
        <>
        <div className="flex-col bg-blue-600 min-h-screen justify-center ">
            <Navbar/>
            <Wrapp title="Stopwatch">
                <Stopwatches></Stopwatches>
            </Wrapp>
        </div>
        </>
    );
}

export default Stopwatch;