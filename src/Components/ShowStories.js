
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import "./ShowStories.css"


// import colorSharp from "../images/banner-bg.png"
import { Link } from 'react-router-dom';

export const ShowingStories = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Stories</h2>
              <p>There are numerous captivating and exquisite stories that you can relish reading.
                They encompass a wide range of genres, such as humor, mystery, and those with practical insights.
                These stories offer not only entertainment but also valuable lessons and knowledge.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <Link to='/stories'>  frontend development</Link>
                </div>
               
                <div className="item">
                  <Link to='/stories'>  frontend development</Link>
                </div>
                
                <div className="item">
                  <Link to='/stories'>  frontend development</Link>
                </div>
                
                <div className="item">
                  <Link to='/stories'>  frontend development</Link>
                </div>
                
                <div className="item">
                  <Link to='/stories'>  frontend development</Link>
                </div>
                
                <div className="item">
                  <Link to='/stories'>  frontend development</Link>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}