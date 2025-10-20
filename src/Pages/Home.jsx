import React from 'react';
import slide from '../assets/images/Sajek.png'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Home = () => {
    return (
  <div className="grid grid-cols-12 place-items-center mt-10">
    <div className='col-span-8'>
      <h1 className="text-5xl font-bold text-white">Cox's bazar</h1>
      <p className="py-6 text-white">
        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
      </p>
      <button className="btn btn-primary text-gray-900 border-none bg-[#F9A51A]"> Booking <FaLongArrowAltRight></FaLongArrowAltRight></button>
    </div>
    <div className='col-span-4'>
        <img
      src={slide}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
  </div>
    );
};

export default Home;