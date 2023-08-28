import Banner from "./components/banner/page";
import Facilities from "./components/facilities/page";
import Footer from "./components/footer/page";
import Rooms from "./components/rooms/page";



export default function Home() {
  
  return (
    <main>
    <Banner />
    <Rooms />
    <Facilities />
    <Footer />
    </main>
  )
}
