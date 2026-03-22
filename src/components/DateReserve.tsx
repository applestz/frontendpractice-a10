"use client"
import {DatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider} from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {Select, MenuItem, TextField} from "@mui/material"
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"

export default function DateReserve() {

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if (nameLastname && tel && venue && bookDate) {
            const item:BookingItem = {
                nameLastname: nameLastname,
                tel: tel,
                venue: venue,
                bookDate: dayjs(bookDate).format('YYYY/MM/DD'),
            }
            dispatch(addBooking(item))
        }
    }

    const [nameLastname, setNameLastname] = useState<string | null>(null)
    const [tel, setTel] = useState<string | null>(null)
    const [venue, setVenue] = useState<string>('Bloom')
    const [bookDate, setBookDate] = useState<Dayjs | null>(null)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameLastname(event.target.value)
    }
    const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTel(event.target.value)
    }
    const handleVenueChange = (event: any) => {
        setVenue(event.target.value)
    }
    const handleBookDateChange = (value: Dayjs | null) => {
        setBookDate(value)
    }
    return (
        <div className="bg-slate-100 rounded-lg gap-x-5 gap-y-5
        w-fit px-10 py-5 flex flex-col justify-center">
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" value={nameLastname} onChange={handleNameChange}/>
            <TextField variant="standard" name="Contact-Number" label="Contact-Number" value={tel} onChange={handleTelChange}/>
            <Select variant="standard" name="venue" label="venue" id="venue" value={venue} onChange={handleVenueChange}
            className="h-[2em] w-[200px]">
                <MenuItem value='Bloom'>The Bloom Pavilion</MenuItem>
                <MenuItem value='Spark'>Spark Space</MenuItem>
                <MenuItem value='GrandTable'>The Grand Table</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={bookDate} onChange={handleBookDateChange}/>
            </LocalizationProvider>
            <button name="Book Venue"
            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={makeBooking}>
                Book Venue
            </button>
        </div>
    )
}