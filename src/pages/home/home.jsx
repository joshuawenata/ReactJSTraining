import {useQuery} from "@apollo/client"
import { ALL_ANIME } from "../../lib/queries/AllAnime";
import Card, {CardImage, CardDetail} from "../../components/card/card";
import { useState } from "react";

export default function Home(){
    const [fav,setfav] = useState([]);
    const{loading, error, data} = useQuery(ALL_ANIME,{
        variables:{
            page:1,
            perpage:50,
        }
    })
    if(loading) return <h1>Loading...</h1>
    if(!loading) console.log(data);

    const handleFav = (query) =>{
        let newArr = [...fav];
        let found = fav.indexOf(query)
        if(found === -1){
            newArr.push(query);
        }else{
            newArr.splice(found,1);
        }
        setfav(newArr);
    }

    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,minmax(0,1fr))",
        gap: "1rem",
        width: "100%",
        backgroundColor: "#DDFFEE",
    }}>{data.Page.media.map((anime, i)=>{
        let isFav = fav.indexOf(anime.id)!== -1
        return <Card key={anime.id}>
            <CardImage src={anime.coverImage.large}/>
            <CardDetail>
                <div style={{
                    display: "flex",
                    justifyContent:"space-between",
                    alignItems: "start"
                }}>
                    <div>{anime.title.romaji}</div>
                    <button onClick={()=>handleFav(anime.id)} style={{border: "none", backgroundColor: isFav?"#ff0000":"#7289da", color:"white"}}>{isFav?"-":"+"}</button>
                </div>
            </CardDetail>
        </Card>
    })}</div>
}