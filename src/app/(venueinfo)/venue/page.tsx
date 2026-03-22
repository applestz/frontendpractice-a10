import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default function Venue() {
    const venues = getVenues()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Venue</h1>
            <VenueCatalog venuesJson={venues}/>
        </main>
    )
}