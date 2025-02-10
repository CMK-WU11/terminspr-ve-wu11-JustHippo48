import { serverFetch } from "@/lib/serverFetch"

export default async function Article() {
    
    
    const data = await serverFetch("http://localhost:4000/api/v1/activities")
    
    console.log(data);
    return (
        <article>
            {data.map((data) => (
                <>
                    <img src="" alt="" />
                    <div>
                        <p>{data.name}</p>
                        <p>{data.minAge}-{data.maxAge} år</p>
                    </div>
                
                </>
            ))}
        </article>
    )
}