"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Body({fillterPrompt}) {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(users);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                setUsers(data.users);
            }
            catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    const fillteredData = users.filter(user => 
        user.username.toLowerCase().match(fillterPrompt.toLowerCase())
    );
    console.log("fillterdData :",fillteredData);

    const displayData = fillteredData? fillteredData : users;

    return (
        <div className='flex justify-center bg-gradient-to-b from-blue-200 to-violet-200 min-h-screen font-bold font-mono'>
            {loading? (
                <h1 className='text-4xl my-10 text-black'>Loading...</h1>
            ) : (
                <div className='grid grid-cols-5'>
                    {displayData.map((val,index) => (
                        <Link key={index} href={`/userInfo/[id]`} as={`/userInfo/${index + 1}`}
                         className='h-[200] text-center bg-white bg-opacity-60 m-5 rounded-md px-2 py-1 shadow-xl'>
                            <Image src={val.image} alt={val.firstName + 'image'} width={300} height={300}/>
                            <h2 className='text-xl text-black my-5'>{val.username}</h2>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Body