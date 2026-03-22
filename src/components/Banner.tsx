'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner() {
    const covers = ['/cover.jpg', '/cover2.jpg', '/cover3.jpg', '/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const { data: session } = useSession()
    console.log(session?.user.token)

    return (
        <div className='block p-[5px] m-[0] w-[100vw] h-[80vh] relative'
         onClick={()=>{setIndex((index+1)%4)}}>
            <Image
            src={covers[index]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className='text-white relative top-[100px] z-20 text-center'>
                <h1 className='text-4xl font-bold pb-[10px]'>where every event finds its venue</h1>
                <h3 className='text-l font-bold'>
                    Finding the perfect venue has never been easier.
                    Whether it's a wedding, coporate event, or private party,
                    we connecting people to the perfect place.
                </h3>
                {
                session?
                <div className='text-center my-20 font-semibold text-white text-3xl'>
                    Hello {session.user?.name}
                </div>
                : null
            }
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{ e.stopPropagation(); router.push('/venue')}}
            >
                Select Venue
            </button>
        </div>
    )
}