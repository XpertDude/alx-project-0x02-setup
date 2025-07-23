import Button from "@/components/common/Button";
import { Header } from "@/components/layout/Header";

export default function About () {

    return <>
    <section>
        <Header />
        <h1>This is About page</h1>
        <Button size={`small`} shape="rounded-2xl" title="click me"/>
        <Button size={`medium`} shape="rounded-3xl" title="click me"/>
        <Button size={`large`} shape="rounded-full" title="click me"/>
    </section>
    </>
}