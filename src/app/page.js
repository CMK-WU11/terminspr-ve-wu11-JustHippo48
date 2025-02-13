import Logo from "@/componments/Logo";
import "../stylesheets/start.css"
import Link from "next/link";


export default function Home() {

  
  return (
    <>
      <main>
        <div className="billede">
          <div className="logo-container">
            <Logo></Logo>
          </div>
          <div className="button-container">
            <Link href={"/akiviteter"}>
              <button className="start-Button">Kom i gang</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
