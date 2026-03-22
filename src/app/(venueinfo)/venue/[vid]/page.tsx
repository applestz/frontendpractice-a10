import getVenue from "@/libs/getVenue";
import Image from "next/image";

export default async function VenueDetailPage({params} : {params:Promise<{vid:string}>}) {
    const {vid} = await params;
    const venueDetail = await getVenue(vid)

    // // Mock Data for Demonstration Only
    // const mockVenueRepo = new Map()
    // mockVenueRepo.set("001", {name: "The Bloom Pavilion", image: "/bloom.jpg"})
    // mockVenueRepo.set("002", {name: "Spark Space", image: "/sparkspace.jpg"})
    // mockVenueRepo.set("003", {name: "The Grand Table", image: "/grandtable.jpg"})

    return (
        <main className="text-center p-5">
            <h1 className="text-3xl font-bold my-5">{venueDetail.data.name}</h1>
            <div className="flex flex-row my-10">
                <Image src={venueDetail.data.picture}
                alt="Car Image"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg w-[30%]"
                />
                <div className="flex flex-col text-left">
                    <div className="text-md mx-5">Name: {venueDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {venueDetail.data.address}</div>
                    <div className="text-md mx-5">District: {venueDetail.data.district}</div>
                    <div className="text-md mx-5">Province: {venueDetail.data.province}</div>
                    <div className="text-md mx-5">Postal code: {venueDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Tel: {venueDetail.data.tel}</div>
                    <div className="text-md mx-5">Daily Rate: {venueDetail.data.dailyrate}</div>
                </div>
            </div>
        </main>
    )
}