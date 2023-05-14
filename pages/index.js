import Content from "@/components/Content";
import TopCard from "@/components/TopCard";

const style = {
    wrapper: `bg-gray-100 min-h-screen`,
};

export default function Home() {
    return (
        <>
            <main className={style.wrapper}>
                <Content />
                <TopCard />
            </main>
        </>
    );
}
