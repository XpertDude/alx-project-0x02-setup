import Button from "@/components/common/Button";
import { Header } from "@/components/layout/Header";

export default function About () {
    return <>
    <section>
        <Header />
        <h1>This is About page</h1>
        <Button size="text-1xl p-1 mt-5" shape="rounded-2xl" title="click me"/>
        <Button size="text-2xl p-3 mt-5" shape="rounded-3xl" title="click me"/>
        <Button size="text-3xl p-5 mt-5" shape="rounded-full" title="click me"/>
    </section>
    </>
}