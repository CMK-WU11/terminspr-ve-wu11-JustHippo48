import { serverFetch } from "@/lib/serverFetch"
import Image from "next/image";

export default async function Article() {
    
    
    const data = await serverFetch("http://localhost:4000/api/v1/activities")
    
    console.log(data);
    return (
        <article>
            {data.map((data) => (
                <>
                    <Image src={data.asset.url} key={data.asset.id} alt="billeder af folk der danser" width="500" height="500"></Image>
                    <div>
                        <p>{data.name}</p>
                        <p>{data.minAge}-{data.maxAge} år</p>
                    </div>
                
                </>
            ))}
        </article>
    )
}