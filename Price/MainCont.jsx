import Scripts from './Sripts'
import Car from "../images/Car.jpg"
import Cycle from "../images/Cycle.jpg"
import jet from "../images/Jet.jpg"
import Bike from "../images/Kawasaki.jpg"
import Head from './Header'
import luffy from "../images/luffy.webp"
import Content from "./Content"


export default function MainCont() {
  const vehicles = Content.map((cont) => {
    return <Scripts 
    key ={cont.id}
    img = {cont.img}
    name = {cont.name}
    price = {cont.price}
    />
    console.log(vehicles)
  })
  return (
    <>
      <Head
        img={luffy}
      />
      <main>
      {vehicles}
      </main>
    </>
  )
}