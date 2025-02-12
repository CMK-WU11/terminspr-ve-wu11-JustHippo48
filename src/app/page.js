import "../stylesheets/start.css"
import Link from "next/link";


export default function Home() {

  
  return (
    <>
      <main>
        <div className="main">
          <Link href={"/akiviteter"}>
            <button className="start-Button">Kom i gang</button>
          </Link>
        </div>
      </main>
    </>
  );
}
