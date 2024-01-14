import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import './trainers.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
      <Header tile="Meet Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem magnam magni aspernatur itaque qui debitis velit!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({id, image, name, job, socials}) => {
           return   <Trainer key={id} image={image} name={name} socials={
            [
              {icon: <AiFillInstagram/>, link: socials[0]},
              {icon: <AiOutlineTwitter/>, link: socials[1]},
              {icon: <FaFacebook/>, link: socials[2]},
              {icon: <FaLinkedin/>, link: socials[3]}
            ]
          }/>
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers
