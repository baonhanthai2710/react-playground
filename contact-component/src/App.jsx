import Contact from "./Contact"

import MrWhikersonImg from "./assets/mr-whiskerson.jpg"
import FelixImg from "./assets/felix.jpg"
import FluffykinsImg from "./assets/fluffykins.jpg"
import PumpkinImg from "./assets/pumpkin.jpg"

function Main() {
  return (
      <div className="contacts">
        <Contact
          img={MrWhikersonImg}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={FelixImg}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img={FluffykinsImg}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact 
          img={PumpkinImg}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />         
      </div>
  )
}

export default Main