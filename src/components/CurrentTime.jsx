
import { useState, useEffect } from 'react';

function CurrentTime() {
  // State untuk menyimpan waktu saat ini
  const [time, setTime] = useState(new Date());

  // useEffect untuk memperbarui waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen dilepas
    return () => clearInterval(timer);
  }, []);

  // Format waktu sebagai jam:menit:detik
  const formattedTime = time.toLocaleTimeString();

  return (
    <>
      <p className="font-bold pb-3 px-8 text-slate-300">{formattedTime}</p>
    </>
    
  );
}

export default CurrentTime;
