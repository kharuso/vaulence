import React from 'react'
import './About.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import Header from '../../components/Header'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident recusandae quae laborum voluptatem minus maiores sit reprehenderit velit sint minima. 
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur recusandae earum, alias et quasi. Laboriosam, molestias sit est iusto voluptatibus quibusdam eos dolorem iste eius aut quasi minus pariatur nisi dolorum beatae fugit ullam ipsa quidem! Aperiam, eligendi cupiditate.</p>
    
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur recusandae earum, alias et quasi. Laboriosam, molestias sit est iusto voluptatibus quibusdam eos dolorem iste eius aut quasi minus pariatur nisi dolorum beatae fugit ullam ipsa quidem! Aperiam, eligendi cupiditate.</p>
    
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur recusandae earum, alias et quasi. Laboriosam, molestias sit est iusto voluptatibus quibusdam eos dolorem iste eius aut quasi minus pariatur nisi dolorum beatae fugit ullam ipsa quidem! Aperiam, eligendi cupiditate.</p>
    
          </div>
        </div>
      </section>
    </>
  )
}

export default About
