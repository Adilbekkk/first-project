import Navbar from "../components/NavBar"
import Header from "../components/Header"
import Journals from "../components/Journals"
import Text from "../components/Text"


export default function Home(){
    return( 
    <div>
      <Navbar/>
      <Header/>
      <Journals/>
      <div className="splitter"></div>
      <Text/>
       
    </div>

       );
}