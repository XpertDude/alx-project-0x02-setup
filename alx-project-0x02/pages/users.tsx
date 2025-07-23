import UserCard from "@/components/common/ UserCard";
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces";

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return {
            props: {
                users: data
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                users: []
            }
        }
    }
}


interface UsersPageProps {
    users: UserProps[];
}

export default function users({ users }: UsersPageProps) {

    return (
        <>

            <Header />
            <main className="p-4 w-full h-full flex flex-col justify-center">
                <section className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center items-center">
                    {
                        users.map(user => {
                            return <UserCard
                                key={user.id}
                                id={user.id}
                                name={`${user.name}`}
                                username={`${user.username}`}
                                email={`${user.email}`}
                                address={{
                                    street: user.address.street,
                                    suite: user.address.suite,
                                    city: user.address.city,
                                    zipcode: user.address.zipcode,
                                    geo: {
                                        lat: user.address.geo.lat,
                                        lng: user.address.geo.lng
                                    }
                                }}
                            />
                        })
                    }
                </section>
            </main>
        </>
    )
}