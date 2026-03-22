'use client'

import DateReserve from "@/components/DateReserve";

export default function Booking() {
    // const session = await getServerSession(authOptions)
    // if (!session || !session.user.token) return null

    // const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            {/* <div className="bg-slate-100 m-5 p-5">
                <table className="table-auto border-separate border-spacing-2 text-black">
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{profile.data.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{profile.data.email}</td>
                        </tr>
                        <tr>
                            <td>Tel:</td>
                            <td>{profile.data.tel}</td>
                        </tr>
                        <tr>
                            <td>Member Since:</td>
                            <td>{createdAt.toString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            <div className="text-xl font-medium my-10">
                Venue Booking
            </div>
            <div className="w-fit space-y-2">
                <DateReserve/>
            </div>
        </main>
    )
}