import React from 'react'

const Home = () => {

  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });


  return (
    <section className='flex flex-col size-full gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className="h-full flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Upcoming Meeting at 12:30 PM</h2>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-4xl lg:text-7xl">{time}</h1>
            <p className="font-medium text-sky-1 text-lg lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;