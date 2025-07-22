import Link from "next/link"

export const Header = () => {
    return (
        <>
            <nav className="w-full h-11 p-2 text-black bg-white flex justify-between items-center">
                <div>Header</div>
                <ul className="w-50 flex justify-around">
                    <Link href="/home">Home</Link>
                    <Link href="/about">About</Link>
                </ul>
            </nav>
        </>
    )
}
