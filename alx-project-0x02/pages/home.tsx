import { Card } from "@/components/common/Card"
import { Header } from "@/components/layout/Header"

export default function Home() {
    return <>
        <section>
            <Header />
            <h1>This is Home page</h1>
            <Card title="item1" content="hello am her to..." />
        </section>
    </>
}