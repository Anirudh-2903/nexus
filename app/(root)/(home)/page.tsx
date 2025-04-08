"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // This will only run on the client side
    const updateTimeAndDate = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      }));
      setDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }));
    };

    // Update immediately
    updateTimeAndDate();
    
    // Update every minute to keep time current
    const interval = setInterval(updateTimeAndDate, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex flex-col size-full gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className="h-full flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Ready to connect ?</h2>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-4xl lg:text-7xl">{time}</h1>
            <p className="font-medium text-sky-1 text-lg lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home;
