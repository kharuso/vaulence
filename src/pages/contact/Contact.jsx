import './Contact.css'
import HeaderImage from  '../../images/header_bg_2.jpg'
import Header from '../../components/Header'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'


const Contact = () => {
  return (
    <>
      <Header title="Get In touch" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ut dolorem aperiam adipisci, voluptates itaque id dignissimos labore perspiciatis totam.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="#" target='_blank' rel='noreferrer noopener'><AiOutlineMail/></a>
            <a href="#" target='_blank' rel='noreferrer noopener'><AiOutlineWhatsApp/></a>
            <a href="#" target='_blank' rel='noreferrer noopener'><AiOutlineMessage/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
