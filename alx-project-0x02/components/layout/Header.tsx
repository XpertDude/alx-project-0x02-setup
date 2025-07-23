import Link from "next/link"

 const Header = () => {
    return (
        <>
            <nav className="w-full h-11 p-2 text-black bg-white flex justify-between items-center">
                <div>Header</div>
                <ul className="w-50 flex justify-around">
                    <Link href="/home">Home</Link>
                    <Link href="/posts">Posts</Link>
                    <Link href="/about">About</Link>
                </ul>
            </nav>
        </>
    )
}

export default Header