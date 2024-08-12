import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-14'>
      <nav class="w-full h-14 bg-slate-400 flex justify-between items-center px-4 md:px-4">
        <div class="font-bold text-lg bg-red-600 text-white  px-2 py-2 rounded-xl cursor-pointer">Tejas Dotkar</div>
        <ul class="flex text-black font-bold p-5">
            <li class="mx-[10px] cursor-pointer p-4 hover:bg-red-500 hover:text-white">Home</li>
            <li class="mx-[10px] cursor-pointer p-4 hover:bg-red-500 hover:text-white">About</li>
            <li class="mx-[10px] cursor-pointer p-4 hover:bg-red-500 hover:text-white">Projects</li>
            <li class="mx-[10px] cursor-pointer p-4 hover:bg-red-500 hover:text-white">Achievements</li>
            <li class="mx-[10px] cursor-pointer p-4 hover:bg-red-500 hover:text-white">Contact</li>
        </ul>
    </nav>
    </div>
  )
}
