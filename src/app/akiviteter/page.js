import Header from "@/componments/Header";
import "../../stylesheets/aktivitet.css";
import Article from "@/componments/Article";

export default function aktiviteter() {
    return (
        <>
            <Header title="aktiviteter"></Header>
            <main className="aktivitet-main">
                <Article></Article>
            </main>
        </>
    )
}