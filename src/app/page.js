import Gallary from "./components/Gallary/page";
import Banner from "./components/banner/page";
import Facilities from "./components/facilities/page";
import Food from "./components/food/page";
import Footer from "./components/footer/page";
import Manager from "./components/ourManager/page";
import Rooms from "./components/rooms/page";



export default function Home() {
  
  return (
    <main>
    <Banner />
    <Manager />
    <Gallary />
    <Rooms />
    <Facilities />
    <Food />
    <Footer />
    </main>
  )
}
