import './App.css';
import { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, getDocs } from '@firebase/firestore'

function App() {

  const [news,setNews] = useState([])
  const usersCollectionRef = collection(db,"News")

  useEffect(()=>{

      const getNews = async ()=>{
        const data = await getDocs(usersCollectionRef)
        setNews(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      }
      getNews() 
  },[usersCollectionRef])

  return (
    <div className="App">
      {
        news.map((data,id)=>(
          <div key={id}>
            <h1>{data.title}</h1>
            <p>{data.news}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
