import { UserProps } from "@/interfaces"

export default function UserCard({ id, name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } } }: UserProps){
    return (
        <div key={id} className="w-60 h-90 bg-orange-200 rounded-2xl text-black flex flex-col justify-center items-center p-2 ml-2">
            <div className="p-1">
                <h1><strong>name:</strong> {name}/ <strong>username:</strong> {username}</h1>
            </div>
            <div className="w-full h-70 bg-gray-500 rounded-2xl border-amber-100 p-2">
                <p>email: {email} </p>
                <ul>
                    <li>Street: {street} </li>
                    <li>suite: {suite} </li>
                    <li>city: {city} </li>
                    <li>zipcode: {zipcode} </li>
                </ul>
                <ul>
                    <li><strong>lat:</strong> {lat} </li>
                    <li><strong>lng</strong>: {lng} </li>
                </ul>
            </div>
        </div>
    )
}