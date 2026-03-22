'use client'
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {
    const ratingReducer = (venueList:Map<string, number>, action:{type: string, venueName: string, rating?: number})=>{
        switch(action.type) {
            case 'add': {
                return new Map(venueList.set(action.venueName, action.rating??0))
            }
            case 'remove': {
                venueList.delete(action.venueName)
                return new Map(venueList)
            }
            default: return venueList
        }
    }

    let defaultVenue = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ])

    const [venueList, dispatchRating] = useReducer(ratingReducer, defaultVenue)

    // Mock Data for Demonstration Only
    const mockVenueRepo = [
        {vid: "001", name: "The Bloom Pavilion", image: "/bloom.jpg"},
        {vid: "002", name: "Spark Space", image: "/sparkspace.jpg"},
        {vid: "003", name: "The Grand Table", image: "/grandtable.jpg"}
    ]

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row",
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                    {
                        mockVenueRepo.map((venueItem)=>(
                            <Link href={`/venue/${venueItem.vid}`} className="w-1/5" key={venueItem.vid}>
                                <Card venueName={venueItem.name} imgSrc={venueItem.image}
                                onRating={(venue:string, rating:number)=>dispatchRating({type:'add', venueName:venue, rating:rating})}/>
                            </Link>
                        ))
                    }
            </div>
            <div className="w-full text-xl font-medium">
                Venue List with Ratings : {venueList.size}
            </div>
            {Array.from(venueList.entries()).map(([venue, rating]) => (
                    <div key={venue} data-testid={venue}
                    onClick={()=>dispatchRating({type:'remove', venueName:venue, rating:rating})}>
                        {venue} : {rating}
                    </div>
                ))}
        </div>
    )
}