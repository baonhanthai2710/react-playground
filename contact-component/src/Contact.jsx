import { IoIosMail } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"

function Contact (props) {
    return (
        <>
          <article className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    < FaPhoneAlt size={14} style={{ marginRight: "8px" }}/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <IoIosMail size={14} style={{ marginRight: "8px" }}/>
                    <p>{props.email}</p>
                </div>
            </article>
        </>
    )
}

export default Contact