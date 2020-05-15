
import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Section from "./Section";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const CarouselContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  
`;


const baseURl ="https://www.plattas.ch/img/logos";
const baseView ="https://drive.google.com/open?id=";
// eslint-disable-next-line react/prefer-stateless-function
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots:false
          }
        }
      ]
    };
    return (
      <CarouselContainer>
        <Section.Header name=" Anothers Skills" />
        <Slider {...settings}>
          
          <div>
            <a href={`${baseView  }1RDZ9iysIaT_cCbAp3fRdbuPAm1qiiAN`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/java-se-2015.png`} alt="logo" />
            </a>
            <span text-align="center">Java SE 2015</span>
          </div>
          <div>
            <a href={`${baseView  }1Vppr7Vx5YJH4fl1mUEXajPtplTsfKa9F`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/java-se-2019.png`} alt="logo" />
            </a>
            <span text-align="center">Java SE 2019</span>
          </div>
          <div>
            <a href={`${baseView  }1VlSvk_TJV2o0iEzCoXw3fM9igUxWmGwh`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/java-poo.png`} alt="logo" />
            </a>
            <span text-align="center">Java POO</span>
          </div>
          <div>
            <a href={`${baseView  }1RDZ9iysIaT_cCbAp3fRdbuPAm1qiiAN_`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/java-basico.png`} alt="logo" />
            </a>
            <span text-align="center">Java Basic</span>
          </div>
          <div>
            <a href={`${baseView  }1QEtVFNdmOk7UsS7ETtoVT10jeMRM07oA`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/java-se-2015.png`} alt="logo" />
            </a>
            <span text-align="center">Java Data Persisten</span>
          </div>
          <div>
            <a href={`${baseView  }1weoc_LDgfeQB2913Yl13bxwGduVdKL0Z`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/github.png`} alt="logo" />
            </a>
            <span text-align="center">Github</span>
          </div>
          <div>
            <a href={`${baseView  }1weoc_LDgfeQB2913Yl13bxwGduVdKL0Z`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/gitlab.png`} alt="logo"  />
            </a>
            <span text-align="center">Gitlab</span>
          </div>
          <div>
            <a href={`${baseView  }1hl0pTkXlpmwoWF0wsoVLj6Z285-1EOvV`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/html.png`} alt="logo" />
            </a>
            <span text-align="center">Html5</span>
            
          </div>
          <div>
            <a href={`${baseView  }1_UnXV7uchyInqsC_bkaNEo5tQOlahrD5`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/css.png`} alt="logo" />
            </a>
            <span text-align="center">Css 3</span>
          </div>
          <div>
            <a href={`${baseView  }1SJDcpVlCoaunYBwgYVLSF369NkNTIewG`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/javascript.png`} alt="logo" />
            </a>
            <span text-align="center">Javascript</span>
          </div>
          <div>
            <a href={`${baseView  }`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/react.png`} alt="logo" />
            </a>
            <span text-align="center">React Framework</span>
          </div>
          <div>
            <a href={`${baseView  }10kjCFhtRtqd4qwGBYkD7_5IxsvFcWMHx`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/terminal.png`} alt="logo" />
            </a>
            <span text-align="center">Terminal Windows</span>
          </div>
          <div>
            <a href={`${baseView  }`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/seo.png`} alt="logo" />
            </a>
            <span text-align="center">Seo</span>
          </div>
          <div>
            <a href={`${baseView  }`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/excel.png`} alt="logo" />
            </a>
            <span text-align="center">Excel</span>
          </div>
          <div>
            <a href={`${baseView  }1FCuH7q9W0zcFjo6lwJ7i6pzWoTPlC53x`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/inges-carrera.png`} alt="logo" />
            </a>
            <span text-align="center">English</span>
          </div>
          <div>
            <a href={`${baseView  }1HN-Zf0R8OXPmWs6_Fog4NSq7Gp1KFAB1`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/aleman-b1.png`} alt="logo" />
            </a>
            <span text-align="center">German</span>
          </div>
          <div>
            <a href={`${baseView  }`} rel="noopener noreferrer" target="_blank">
              <img src={`${baseURl  }/photoshop.png`} alt="logo" />
            </a>
            <span text-align="center">Photoshop</span>
          </div>
        </Slider>

      </CarouselContainer>  
    );
  }
}

