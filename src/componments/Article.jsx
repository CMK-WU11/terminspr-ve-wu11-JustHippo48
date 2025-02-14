import { serverFetch } from "@/lib/serverFetch"
import Image from "next/image";

export default async function Article() {
    
    
    const data = await serverFetch("http://localhost:4000/api/v1/activities")
    
    return (
        <article className="atikel">
            {data.map((data) => (
                <>
                    <div className="billeder-container">
                        <Image src={data.asset.url} key={data.asset.id} alt="billeder af folk der danser" width="300" height="100" className="aktivitet-billeder"></Image>
                    </div>
                    <div className="pink-farve"></div>
                    <div className="tekst-container">
                        <p className="tekst-atikel">{data.name}</p>
                        <p className="tekst-atikel">{data.minAge}-{data.maxAge} år</p>

                    </div>
                
                </>
            ))}
        </article>
    )
}