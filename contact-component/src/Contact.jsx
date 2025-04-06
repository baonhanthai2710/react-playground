import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import MrWhikersonImg from "./assets/mr-whiskerson.jpg"
import FelixImg from "./assets/felix.jpg"
import FluffykinsImg from "./assets/fluffykins.jpg"
import PumpkinImg from "./assets/pumpkin.jpg"

function Contact () {
    return (
        <>
          <article className="contact-card">
                <img 
                    src={ MrWhikersonImg }
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    < FaPhoneAlt size={14} style={{ marginRight: "8px" }}/>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <IoIosMail size={14} style={{ marginRight: "8px" }}/>
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src={FelixImg}
                    alt="Photo of Fluffykins"
                />
                <h3>Fluffykins</h3>
                <div className="info-group">
                    < FaPhoneAlt size={14} style={{ marginRight: "8px" }}/>
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <IoIosMail size={14} style={{ marginRight: "8px" }}/>
                    <p>fluff@me.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src={ FelixImg }
                    alt="Photo of Felix"
                />
                <h3>Felix</h3>
                <div className="info-group">
                    < FaPhoneAlt size={14} style={{ marginRight: "8px" }}/>
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <IoIosMail size={14} style={{ marginRight: "8px" }}/>
                    <p>thecat@hotmail.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src={PumpkinImg}
                    alt="Photo of Pumpkin"
                />
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <IoIosMail size={14} style={{ marginRight: "8px" }}/>
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <IoIosMail size={14} style={{ marginRight: "8px" }}/>
                    <p>pumpkin@scrimba.com</p>
                </div>
            </article>
        </>
    )
}

export default Contact