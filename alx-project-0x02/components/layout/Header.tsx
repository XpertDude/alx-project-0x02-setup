import Link from "next/link"

export const Header = () => {
    return (
        <>
            <div>Header</div>
            <ul>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                </ul>
        </>
    )
}
