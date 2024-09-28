"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

function page() {

    const params = useParams();
    console.log(params)
    console.log('exist href : ', `https://dummyjson.com/user/${params.id}`)

    const [user, SetData] = useState([])
    const [loading, SetLoading] = useState(false)

    console.log(user)

    useEffect(() => {
        const fetchData = async () => {
            SetLoading(true);
            try {
                const response = await fetch(`https://dummyjson.com/user/${params.id}`);
                const data = await response.json();
                SetData(data);
            }
            catch (error) {
                console.log(error);
            }
            SetLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className="bg-gradient-to-b from-blue-200 to-violet-200 min-h-screen p-24">
            <Link href={"/"} className='bg-rose-600 px-6 py-2 rounded-xl'>Back</Link>
            <div className='flex justify-center text-black'>
                <div className='bg-white bg-opacity-70 rounded-xl shadow-md p-12 flex justify-center items-center'>
                    <div className='flex flex-col items-center shadow-lg p-2 mr-5'>
                        <Image alt={user.firstName + " " + user.lastName} src={user.image} width={216} height={216} />
                        <h1 className='bg-slate-700 px-4 py-1 text-white rounded-md text-4xl'>{user.username}</h1>
                    </div>
                    <div className='text-center'>
                        <div>
                            <h1><b>Name:</b> {user.firstName} {user.lastName} {user.maidenName == "" ? (<></>) : (<>({user.maidenName})</>)}</h1>
                            <h2><b>Birth-Date:</b> {user.birthDate} <b>Age:</b>  {user.age}</h2>
                            <h2><b>Weight:</b> {user.weight} kg.  <b>Height:</b> {user.height} cm.</h2>
                            <h2><b>Gender:</b> {user.gender}</h2>
                        </div>
                        <div className='mt-5'>
                            <center><h1><b>Contact</b></h1></center>
                            <h1><b>Adress:</b> {user.address?.address}, {user.address?.city}, {user.address?.state}</h1>
                            <h1><b>E-mail:</b> {user.email}</h1>
                            <h1><b>Phone:</b> {user.phone}</h1>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default page