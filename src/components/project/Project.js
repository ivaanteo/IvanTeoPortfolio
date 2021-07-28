import Slider from "react-slick";
import classes from "./Project.module.css";

import profilePic from "../../assets/formalPhoto.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = (props) => {
  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={classes.projectContainer}>
        <div className={classes.descContainer}>
          <h1>
            <span>{props.title}</span>
          </h1>
          {props.desc}
        </div>
        <div className={classes.descContainer}>
          <h1>Tech Used</h1>
          {props.techDesc}
        </div>
      </div>
      <Slider {...settings}>
        {props.imgs.map((img) => (
          <div key={img.key} className={classes.carouselContainer}>
            <img
              className={classes.carouselImg}
              src={img.img}
              alt="Picture"
            ></img>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Project;
