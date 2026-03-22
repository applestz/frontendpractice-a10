import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type BookState = {
    bookItems: BookingItem[]
}

const initialState: BookState = { bookItems: []}

export const bookSlice = createSlice ({
    name: "Book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            const duplicateIndex = state.bookItems.findIndex(obj => 
                obj.venue === action.payload.venue &&
                obj.bookDate === action.payload.bookDate
            )
            if(duplicateIndex === -1) {
                state.bookItems.push(action.payload)
            } else {
                state.bookItems[duplicateIndex] = action.payload
            }
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=> {
            const remainItems = state.bookItems.filter( obj => {
                return ((obj.nameLastname !== action.payload.nameLastname) 
                || (obj.tel !== action.payload.tel)
                || (obj.venue !== action.payload.venue)
                || (obj.bookDate !== action.payload.bookDate))
            })
            state.bookItems = remainItems
        }
    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer