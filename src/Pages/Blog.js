import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigantionBar from "../Components/Navbar/TheNavigantionBar";
import "./Blog.css";

import blogImg from "../Resources/Images/Blog/blogImg.png";

import boy_addressing from "../Resources/Images/Blog/boy_addressing.png";
import Footer from "../Components/Footer/Footer";
function Blog() {
  return (
    <Container fluid className="px-0" style={{ overflowX: "hidden" }}>
      <TheNavigantionBar></TheNavigantionBar>
      <div className="boplg_main_image">
        <img src={blogImg} alt="..."></img>
      </div>
      <Container>
        <Row className="blog_com_main_wrapper">
          <Col>
            <div className="blog_main_heading">
              <h4>the story so far</h4>
            </div>
            <div className="blog_main_para">
              <p>
                A question that we ask ourselves frequently: what will direct us
                to be the spearheads? Where we create a strong influence in
                guiding the gaming industry to the top of entertainment. Ever
                since Aurelian Origins got its feet on the ground in February
                2021, its guiding purpose has been to develop high-quality games
                with unique features that will bring fantasy and reality in
                tune.
              </p>
            </div>
            <div className="blog_main_para">
              <p>
                The journey kick-started with the idea of developing a top-class
                one of a kind game that will create ripples of transformation in
                the Pakistani game industry. It was seemingly impossible to
                start such a groundbreaking project with limited resources. But
                the whole team came together and took a leap of faith and put
                all their efforts into initiating and mega project. The team
                began working from scratch and supported each other through a
                struggle to be the best version of themselves. Meetings,
                discussions, and brainstorming of ideas - everything possible
                was done to materialize the dream. All available resources were
                gathered and with much enthusiasm and passion we launched the
                mega project
              </p>
            </div>
            <div className="blog_main_para">
              <p>
                It’s clearly not an easy feat- to push your team out of their
                comfort zone in order to be unique and versatile. The common
                goal that brings us together is the passion to develop a
                marvelous game and to be the number one in the gaming industry.
                It is necessary to keep reminding the team of the purpose so as
                not to drift away from the vision. In that light, our first
                workshop conducted as ‘Aurelian Vision and Purpose’ clearly
                defined the core idea of Aurelian Origins. Subsequently, the
                team was ready to comply with the purpose using all their energy
                and passion. Empowerment brings unbelievable changes that
                increase human work efficiency and this happened in our case.
                Everyone was now fully involved and engaged in each activity to
                get the best out of talent.
              </p>
            </div>
            <div className="blog_main_para">
              <p>
                Aurelian Origins has always put employees at the forefront. A
                people-oriented culture helps to facilitate productive and clear
                interaction between coworkers that encourages them to perform
                better. We believe employees are partners in our vision and our
                biggest asset. In order to become a high performance team we
                need to have clarity of purpose down to the janitor every
                individual in the company needs to know why we exist.
              </p>
            </div>
            <div className="blog_main_para">
              <p>
                Belief has an incredible power to take you to heights. You just
                need to learn, plan, and implement the knowledge regardless of
                resource constraints. Success does not have any limit until and
                unless fear of failure is holding you back. For founders who
                have planned to initiate any business are advised to have faith
                and belief.
              </p>
            </div>
            <div className="blog_main_img">
              <img src={boy_addressing} alt="..."></img>
            </div>

            <div className="blog_main_para">
              <p>
                It’s clearly not an easy feat- to push your team out of their
                comfort zone in order to be unique and versatile. The common
                goal that brings us together is the passion to develop a
                marvelous game and to be the number one in the gaming industry.
                It is necessary to keep reminding the team of the purpose so as
                not to drift away from the vision. In that light, our first
                workshop conducted as ‘Aurelian Vision and Purpose’ clearly
                defined the core idea of Aurelian Origins. Subsequently, the
                team was ready to comply with the purpose using all their energy
                and passion. Empowerment brings unbelievable changes that
                increase human work efficiency and this happened in our case.
                Everyone was now fully involved and engaged in each activity to
                get the best out of talent.
              </p>
            </div>

            <div className="blog_main_para">
              <p>
                Aurelian Origins has always put employees at the forefront. A
                people-oriented culture helps to facilitate productive and clear
                interaction between coworkers that encourages them to perform
                better. We believe employees are partners in our vision and our
                biggest asset. In order to become a high performance team we
                need to have clarity of purpose down to the janitor every
                individual in the company needs to know why we exist.
              </p>
            </div>

            <div className="blog_main_para">
              <p>
                Belief has an incredible power to take you to heights. You just
                need to learn, plan, and implement the knowledge regardless of
                resource constraints. Success does not have any limit until and
                unless fear of failure is holding you back. For founders who
                have planned to initiate any business are advised to have faith
                and belief.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
}

export default Blog;
