    import Button from './ui/Button';
    import { useState, useEffect } from 'react';

    const Timers = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => {
        if (!isRunning && (hours > 0 || minutes > 0 || seconds > 0)) {
        setIsRunning(true);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    useEffect(() => {
        let interval = null;

        if (isRunning) {
        interval = setInterval(() => {
            if (seconds > 0) {
            setSeconds((prevSeconds) => prevSeconds - 1);
            } 
            else if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
            } 
            else if (hours > 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
            } 
            else {
            setIsRunning(false);
            }
        }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds, minutes, hours]);

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
