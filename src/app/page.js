import Gallary from "./components/Gallary/page";
import Banner from "./components/banner/page";
import Facilities from "./components/facilities/page";
import FeedBack from "./components/feedback/page";
import Food from "./components/food/page";
import Footer from "./components/footer/page";
import Offer from "./components/offer/page";
import Manager from "./components/ourManager/page";
import Rooms from "./components/rooms/page";
import Roomss from "./roomss/page";



export default function Home() {
  
  return (
    <main>
    <Banner />
    <Manager />
    <Gallary />
    <Roomss />
    <Offer />
    <Facilities />
    <Food />
    <FeedBack />
    <Footer />
    </main>
  )
}
