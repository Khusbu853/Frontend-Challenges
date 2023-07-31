import { useEffect, useState } from "react"
import Card from "./Card"


const InfiniteScroll = () => {
    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
    },[page])

    const fetchData = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        const json = await data.json()
        setCard((prev) => [...prev, ...json])
        // console.log(json)
    }



    // Logic for scrolling:
    const handleInfiniteScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setPage((prev) => prev + 1)
            setLoading(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        // to clean up the event
        return () => window.removeEventListener("scroll", handleInfiniteScroll)

    },[])


  return (
    <>
    <h1 className="heading">Infinite Scroll</h1>
    <div className="card-container">
      {card.map((info) => (
        <Card key={info.id} info={info}/>
      ))}
    </div>

    {loading && <h1 className="load">Loading...</h1>}
    </>
  )
}

export default InfiniteScroll
