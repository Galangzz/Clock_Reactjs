import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar= () =>{
    return (
        <div className="flex bg-blue-500 min-w-full justify-between px-2 drop-shadow-2xl sticky top-0">
                <div className="p-4">
                    <img className="h-10 w-10 rounded-full" src="../../public/image/clock.jpg" alt="clock" />
                </div>
                <div className="flex gap-2 p-4 font-bold justify-center items-center text-base ">
                    <Link to="/">
                        <Button>Clock</Button>
                    </Link>
                    <Link to="/timer">
                        <Button>Timer</Button>
                    </Link>
                    <Link to="/stopwatch">
                        <Button>Stopwatch</Button>
                    </Link>
                    
                </div>
            </div>
    );
}

export default Navbar;