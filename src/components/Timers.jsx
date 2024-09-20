    // import { useState, useEffect } from 'react';
    import Button from './ui/Button';

    // const Timers = () => {
    //     const [hours, setHours] = useState(0);
    //     const [minutes, setMinutes] = useState(0);
    //     const [seconds, setSeconds] = useState(0);
    //     const [isRunning, setIsRunning] = useState(false);

    //     // useEffect(() => {
    //     // let interval;
    //     // if (isRunning && time > 0) {
    //     //     interval = setInterval(() => {
    //     //     setTime((prevTime) => prevTime - 1);
    //     //     }, 1000);
    //     // } else if (time === 0) {
    //     //     setIsRunning(false);
    //     // }
    //     // return () => clearInterval(interval);
    //     // }, [isRunning, time]);

    //     useEffect(() => {
    //         let interval = null;
        
    //         // Jika isRunning true, jalankan countdown
    //         if (isRunning == true) {
    //           interval = setInterval(() => {
    //             // Jika detik lebih dari 0, kurangi 1 detik
    //             if (seconds > 0) {
    //               setSeconds((prevSeconds) => prevSeconds - 1);
    //             } 
    //             // Jika detik mencapai 0 dan menit lebih dari 0, kurangi menit, dan set detik ke 59
    //             else if (minutes > 0) {
    //               setMinutes((prevMinutes) => prevMinutes - 1);
    //               setSeconds(59);
    //             } 
    //             // Jika menit mencapai 0 dan jam lebih dari 0, kurangi jam, set menit ke 59, dan detik ke 59
    //             else if (hours > 0) {
    //               setHours((prevHours) => prevHours - 1);
    //               setMinutes(59);
    //               setSeconds(59);
    //             } 
    //             // Jika jam, menit, dan detik mencapai 0, hentikan timer
    //             else {
    //               setIsRunning(false);
    //             }
    //           }, 1000);
    //         }
    //     // Bersihkan interval saat component unmount atau sebelum efek dijalankan lagi
    //     return () => clearInterval(interval);
    //   }, [isRunning, seconds, minutes, hours]);

    //     const handleChange = (setter) => (e) => {
    //         const value = parseInt(e.target.value);
    //         setter(Math.max(0, value));
    //     };

    //     const handleStartStop = () => {
    //         if(!isRunning && (hours > 0 || minutes > 0 || seconds > 0)){
    //             setIsRunning(!isRunning);
    //         }else{
    //             setIsRunning(!isRunning);
    //         }
    //     };

    //     const handleReset = () => {
    //     setIsRunning(false);
    //     setHours(0);
    //     setMinutes(0);
    //     setSeconds(0);
        
    //     };

    //     return (
    //     <div>
    //         <form action="#" className="flex gap-2 ">

    //         {/* <input
    //             type="number"
    //             value=""
    //             placeholder="HOURS"
    //             autoComplete="off"
    //             onChange={(e) => setTime(parseInt(e.target.value) || 0)}
    //             disabled={isRunning}
    //             className="flex text-center justify-center w-20 h-10 border border-red-300  text-sm bg-transparent  outline-none"
    //             />
    //         <input
    //             type="number"
    //             value=""
    //             placeholder="MINUTES"
    //             autoComplete="off"
    //             onChange={(e) => setTime(parseInt(e.target.value) || 0)}
    //             disabled={isRunning}
    //             className="flex text-center justify-center w-20 h-10 border border-red-300  text-sm bg-transparent  outline-none"
    //             /> */}
    //         <input
    //             type="number"
    //             autoComplete="off"
    //             placeholder="SECONDS"
    //             value={seconds}
    //             onChange={handleChange(setSeconds)}
    //             disabled={isRunning}
    //             className="flex text-center justify-center w-20 h-10 border border-red-300  text-sm bg-transparent  outline-none"
    //             />
    //         {seconds}
    //         </form>
    //         {/* <p>{time} seconds</p> */}
    //         <Button onClick = {handleStartStop} disabled = {hours === 0 || minutes === 0 || seconds === 0}>
    //             {isRunning ? 'Stop' : 'Start'}
    //         </Button>
    //         <Button onClick = {handleReset} disabled = {hours === 0 || minutes === 0 || seconds === 0}>
    //             Reset
    //         </Button>
    //     </div>
    //     );
    // };

    import { useState, useEffect } from 'react';

    const Timers = () => {
    // Inisialisasi state untuk jam, menit, dan detik
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Fungsi untuk memulai timer
    const startTimer = () => {
        if (!isRunning && (hours > 0 || minutes > 0 || seconds > 0)) {
        setIsRunning(true);
        }
    };

    // Fungsi untuk menghentikan timer
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Fungsi untuk mereset timer
    const resetTimer = () => {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    useEffect(() => {
        let interval = null;

        // Jika isRunning true, jalankan countdown
        if (isRunning) {
        interval = setInterval(() => {
            // Jika detik lebih dari 0, kurangi 1 detik
            if (seconds > 0) {
            setSeconds((prevSeconds) => prevSeconds - 1);
            } 
            // Jika detik mencapai 0 dan menit lebih dari 0, kurangi menit, dan set detik ke 59
            else if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
            } 
            // Jika menit mencapai 0 dan jam lebih dari 0, kurangi jam, set menit ke 59, dan detik ke 59
            else if (hours > 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
            } 
            // Jika jam, menit, dan detik mencapai 0, hentikan timer
            else {
            setIsRunning(false);
            }
        }, 1000);
        }

        // Bersihkan interval saat component unmount atau sebelum efek dijalankan lagi
        return () => clearInterval(interval);
    }, [isRunning, seconds, minutes, hours]);

    // Fungsi untuk mengubah nilai input dengan batasan 0-59 untuk menit dan detik
    const handleChange = (setter) => (e) => {
        const value = parseInt(e.target.value);
        setter(Math.max(0, value));
    };

    return (
        <div >
        <div className="flex gap-2 pb-5">
            <input
            type="number"
            value={hours}
            onChange={handleChange(setHours)}
            disabled={isRunning}
            className="flex text-center justify-center w-20 h-10 border border-red-300  text-2xl bg-transparent  outline-none"
            />
            : 
            <input
            type="number"
            value={minutes}
            onChange={handleChange(setMinutes)}
            disabled={isRunning}
            className="flex text-center justify-center w-20 h-10 border border-red-300  text-2xl  bg-transparent  outline-none"
            
            />
            : 
            <input
            type="number"
            value={seconds}
            onChange={handleChange(setSeconds)}
            disabled={isRunning}
            className="flex text-center justify-center w-20 h-10 border border-red-300  text-2xl bg-transparent  outline-none"
            
            />
        </div>
        <div className="flex gap-3 items-center justify-center">

            <Button 
            onClick = {startTimer} 
            disabled = {isRunning}
            variant = "text-red-500 font-bold" 
            Hover = "hover:bg-slate-400  active:bg-slate-200"
            
            >
                Start
            </Button>
            <Button 
            onClick = {stopTimer} 
            disabled = {!isRunning}
            variant = "text-pink-800 font-bold" 
            Hover = "hover:bg-slate-400  active:bg-slate-250"
            >
                Stop
            </Button>
            <Button onClick = {resetTimer}
            variant = "text-green-800 font-bold" 
            Hover = "hover:bg-slate-400  active:bg-slate-200"
            > 
                Reset
            </Button>
        
        </div>
        </div>
    );
    };




    export default Timers;
