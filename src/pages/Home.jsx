import Header from "../components/header/Header"
import NewArrival from "../components/home/NewArrival"
import Brands from "../components/home/Brands"
import Collection from "../components/home/Collection"
export default function Home() {
    return (
        <>
        <Header/>
        <main className="max-w-7xl mx-auto">
          <NewArrival/>
          <Brands/>
          <Collection/>
        </main>
       
        </>
      
    )
}