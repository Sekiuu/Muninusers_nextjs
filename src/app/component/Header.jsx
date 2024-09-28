"use client"

import React, { useState, useEffect } from 'react'

function Header({setFilterPrompt}) {

    const [searchInput, setSearchInput] = useState("");

    const inputHandle = (e) => {
        setSearchInput(e.target.value);
    }
    const formHandle = (e) => {
        e.preventDefault();
        //set filterprompt in page.js
        setFilterPrompt(searchInput);
        console.log(`search promt: ${searchInput}`);
    }

    return (
        <header className='bg-gradient-to-r from-cyan-500 via-blue-400 to-violet-400 h-[300px] flex justify-center items-center'>
            <div className='text-right font-mono'>
                <h1 className='text-4xl text-white'>Wellcome to Munin&apos;s Users Finder</h1>
                <p className='text0-white'>Get everyone&apos; info here.</p>
                <form onSubmit={formHandle} className='flex flex-row justify-center my-4'>
                    <input type='text' onChange={inputHandle} className='text-black w-full border-slate-600 border-2
                     rounded-md px-2 py-0.5 mx-2' placeholder='search...' />
                    <button type='submit' className='bg-rose-500 px-2 py-0.5 rounded-xl'>Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header