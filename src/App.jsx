// import { useEffect, useState } from 'react';
// import Card from './components/card/card'

import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Home from './pages/home/home';

export default function App(){
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>
    <Home/>
  </ApolloProvider>

  // let a = 11;
  // let el = "";

  // if(a%2===0)el = <div>genap</div>
  // else el = <div>ganjil</div>

  // return <h1>{el}</h1>

  // const peoples = [{
  //   name: "VA",
  //   gender: "F",
  //   icon: "🐢"
  // },{
  //   name: "AX",
  //   gender: "M",
  //   icon: "🐱"
  // },{
  //   name: "BS",
  //   gender: "M",
  //   icon: "🐵"
  // }]

  // // let number = 0;
  // const [number,setnumber] = useState(0);

  // const handleIncrement = ()=>{
  //   setnumber(number + 1);
  // }

  // useEffect(()=>{
  //   console.log("number changed!")
  // }, [number]);

  // return <div>
  //   {peoples.map((p,i)=>{
  //     // if(p.gender === "M") return <div className="dark-card">{p.name}{p.icon}</div>
  //     // return <div className="light-card">{p.name}{p.icon}</div>

  //     return <Card key={i} gender={p.gender}>{p.name}{p.icon}</Card>
  //   })}
  //   <h1>{number}</h1>
  //   <button onClick={handleIncrement}>+</button>
  // </div>
}

