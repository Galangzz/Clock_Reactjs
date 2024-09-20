
import CurrentTime from '../components/CurrentTime.jsx';
import Navbar from '../components/ui/Navbar.jsx';
import Wrapp from '../components/ui/Wrapp.jsx';


function Home(){
    return (
        <>
        <div className="flex-col bg-blue-600 min-h-screen justify-center ">
            <Navbar/>
            <Wrapp title="Clock">
                <CurrentTime></CurrentTime>
            </Wrapp>
        </div>
        </>
    );
}

export default Home;