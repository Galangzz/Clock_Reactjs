// File: src/Stopwatch.js
import { useState, useEffect } from 'react';
import Button from './ui/Button';

function Stopwatches() {
  // State untuk menyimpan waktu dalam milidetik
  const [time, setTime] = useState(0);
  // State untuk mengelola apakah stopwatch aktif atau tidak
  const [isActive, setIsActive] = useState(false);
  // State untuk mengelola apakah stopwatch sedang berjalan atau di-reset
  const [isRunning, setIsRunning] = useState(false);

  // Menggunakan useEffect untuk mengatur interval stopwatch
  useEffect(() => {
    let interval = null;

    if (isActive && isRunning) {
      // Interval untuk menambah waktu setiap 10 milidetik
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      // Hentikan interval jika stopwatch tidak aktif
      clearInterval(interval);
    }

    // Bersihkan interval saat komponen dilepas atau state berubah
    return () => clearInterval(interval);
  }, [isActive, isRunning]);

  // Fungsi untuk memulai atau menghentikan stopwatch
  const startStop = () => {
    setIsActive(!isActive);
    setIsRunning(true);
  };

  // Fungsi untuk mereset stopwatch
  const reset = () => {
    setIsActive(false);
    setTime(0);
    setIsRunning(false);
  };

  // Format waktu menjadi jam:menit:detik:milidetik
  const formatTime = () => {
    let hours =  Math.floor(time / (1000 * 60 * 60))
    let minutes = Math.floor(time / (1000 * 60) % 60);
    let seconds =  Math.floor(time / 1000 % 60 );
    let getMilliseconds = Math.floor(time % 1000 / 10 );
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    getMilliseconds = (getMilliseconds < 10) ? "0" + getMilliseconds : getMilliseconds;

    return (
      <>
        {`${hours}:${minutes}:${seconds}:${getMilliseconds}`}
      </>
    );
  };

  return (
    <div>
      {/* <h1>Stopwatch</h1> */}
      <p className="font-mono font-semibold text-5xl">{formatTime()}</p>
      <div className="flex gap-5 pt-4 justify-center items-center">
      <Button 
      variant = "text-red-500 font-bold" 
      onClick={startStop}
      Hover = "hover:bg-slate-400  active:bg-slate-200"
      >
        {isActive ? 'Pause' : 'Start'}
      </Button>
      <Button 
      variant = "text-green-800 font-bold" 
      onClick={reset}
      Hover = "hover:bg-slate-400  active:bg-slate-200"
      
      >
        Reset
      </Button>
      </div>

    </div>
  );
}

export default Stopwatches;
