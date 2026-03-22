'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList() {

    const venueItems = useAppSelector( (state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            {
                venueItems.length == 0 ? 'No Venue Booking'
                : venueItems.map((bookItem)=>(
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 px-2"
                    key={bookItem.venue}>
                        <div className="text-xl">Name: {bookItem.nameLastname}</div>
                        <div className="text-sm">Contact Number: {bookItem.tel}</div>
                        <div className="text-sm">Venue: {bookItem.venue}</div>
                        <div className="text-md">Book Date: {bookItem.bookDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600
                        px-3 py-2 text-white shadow-sm" 
                        onClick={()=>dispatch(removeBooking(bookItem))}>
                            Cancel the booking
                        </button>
                    </div>
                ))  
            }
        </>
    )
}