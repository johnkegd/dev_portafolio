
import React, { Component } from "react";
import Slider from "react-slick";
import Section from "./Section";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const baseURl ="https://www.plattas.ch/img/logos";
// eslint-disable-next-line react/prefer-stateless-function
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay:true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      cssEase: "linear",
      swipeToSlide: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Section.Header name="Anothers Skills and Courses" />
        <Slider {...settings}>
          
          <div>
            <img src={`${baseURl  }/java-se-2015.png`} alt="logo" />
            <span text-align="center">Java SE 2015</span>
          </div>
          <div>
            <img src={`${baseURl  }/java-se-2019.png`} alt="logo" />
            <span text-align="center">Java SE 2019</span>
          </div>
          <div>
            <img src={`${baseURl  }/java-poo.png`} alt="logo" />
            <span text-align="center">Java POO</span>
          </div>
          <div>
            <img src={`${baseURl  }/java-basico.png`} alt="logo" />
            <span text-align="center">Java Basic</span>
          </div>
          <div>
            <img src={`${baseURl  }/java-se-2015.png`} alt="logo" />
            <span text-align="center">Java Data Persisten</span>
          </div>
          <div>
            <img src={`${baseURl  }/github.png`} alt="logo" />
            <span text-align="center">Github</span>
          </div>
          <div>
            <img src={`${baseURl  }/gitlab.png`} alt="logo" />
            <span text-align="center">Gitlab</span>
          </div>
          <div>
            <img src={`${baseURl  }/html.png`} alt="logo" />
            <span text-align="center">Html5</span>
          </div>
          <div>
            <img src={`${baseURl  }/css.png`} alt="logo" />
            <span text-align="center">Css 3</span>
          </div>
          <div>
            <img src={`${baseURl  }/javascript.png`} alt="logo" />
            <span text-align="center">Javascript</span>
          </div>
          <div>
            <img src={`${baseURl  }/react.png`} alt="logo" />
            <span text-align="center">React Framework</span>
          </div>
          <div>
            <img src={`${baseURl  }/terminal.png`} alt="logo" />
            <span text-align="center">Terminal Windows</span>
          </div>
          <div>
            <img src={`${baseURl  }/seo.png`} alt="logo" />
            <span text-align="center">Seo</span>
          </div>
          <div>
            <img src={`${baseURl  }/excel.png`} alt="logo" />
            <span text-align="center">Excel</span>
          </div>
          <div>
            <img src={`${baseURl  }/inges-carrera.png`} alt="logo" />
            <span text-align="center">English</span>
          </div>
          <div>
            <img src={`${baseURl  }/aleman-b1.png`} alt="logo" />
            <span text-align="center">German</span>
          </div>
          <div>
            <img src={`${baseURl  }/photoshop.png`} alt="logo" />
            <span text-align="center">Photoshop</span>
          </div>
        </Slider>
      </div>
    );
  }
}

