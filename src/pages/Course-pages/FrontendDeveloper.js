import React from "react";
import "../course-css/course.scss";
import "../course-css/button.scss";
import Certificate from "../certificate";
import Pricebox from "../Pricebox";
import { Products } from "../Products";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Accordion } from "rsuite";
import ChooseAcadeasy from "../ChooseAcadeasy";

import StartFirebase from "../firebaseconfig_products";
import { ref, onValue, query, orderByChild, equalTo } from "firebase/database";
const db = StartFirebase();

export class FrontendDeveloper extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbref = query(
      ref(db, "Courses"),
      orderByChild("name"),
      equalTo("Frontend Developer")
    );

    onValue(dbref, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <>
        <div className="courses-container">
          {this.state.tableData.map((row, index) => {
            return (
              <>
                <div className="courses-banner">
                  <div className="courses-banner-details">
                    <h1>{row.data.name}</h1>
                    <p>{row.data.description}</p>
                    <a href="#payment">
                      <div id="button-container" className="button-container">
                        <button class="learn-more">
                          <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                          </span>
                          <span class="button-text">
                            Enroll for this program
                          </span>
                        </button>
                      </div>
                    </a>
                    <Link
                      className="download-brochure"
                      to="/files/Frontend_Developer_Brochure.pdf"
                      target="_blank"
                      download
                    >
                      Brochure <FaDownload size={20} />
                    </Link>
                    <div className="courses-rating-box">
                      <div className="courses-rating-box-rating">
                        {row.data.rating}
                      </div>
                      <div className="courses-rating-box-star">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="product-rating-star"
                        >
                          <path
                            fill="#FFD43B"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="product-rating-star"
                        >
                          <path
                            fill="#FFD43B"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="product-rating-star"
                        >
                          <path
                            fill="#FFD43B"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="product-rating-star"
                        >
                          <path
                            fill="#FFD43B"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="product-rating-star"
                        >
                          <path
                            fill="#FFD43B"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                      </div>
                      <div className="courses-rating-box-learners">
                        {row.data.learners}+ learners
                      </div>
                    </div>
                  </div>
                  <div className="courses-banner-img">
                    <AnimatedOnScroll animationIn="tada">
                      <img src={row.data.imageSrc} alt={row.data.name}></img>
                    </AnimatedOnScroll>
                  </div>
                </div>

                <ChooseAcadeasy />
                
                <AnimatedOnScroll animationIn="fadeInDownBig">
                  <div className="curriculum-body">
                    <h4>CURRICULUM</h4>

                    <Accordion>
                      <Accordion.Panel header="HTML">
                        <ul className="curriculum-topics">
                          <li>
                            <span>•</span>Introduction to HTML
                          </li>
                          <li>
                            <span>•</span>Writing Semantic HTML
                          </li>
                          <li>
                            <span>•</span>HTML Tags
                          </li>
                          <li>
                            <span>•</span>Forms and Validations
                          </li>
                        </ul>
                      </Accordion.Panel>
                      <Accordion.Panel header="CSS">
                        <ul className="curriculum-topics">
                          <li>
                            <span>•</span>Learn the Basics
                          </li>
                          <li>
                            <span>•</span>Making Layouts
                          </li>
                          <li>
                            <span>•</span>Flex Box
                          </li>
                          <li>
                            <span>•</span>Grid in CSS
                          </li>
                          <li>
                            <span>•</span>Media Queries
                          </li>
                          <li>
                            <span>•</span>Responsive Web Design
                          </li>
                        </ul>
                      </Accordion.Panel>
                      <Accordion.Panel header="BOOTSTARP">
                        <ul className="curriculum-topics">
                          <li>
                            <span>•</span>Using Bootstap
                          </li>
                          <li>
                            <span>•</span>Bootstap templates/designs
                          </li>
                          <li>
                            <span>•</span>Responsive Web Design
                          </li>
                        </ul>
                      </Accordion.Panel>
                      <Accordion.Panel header="JAVASCRIPT">
                        <ul className="curriculum-topics">
                          <li>
                            <span>•</span>Introduction to Javascript
                          </li>
                          <li>
                            <span>•</span>Functions and Objects
                          </li>
                          <li>
                            <span>•</span>Selectors
                          </li>
                          <li>
                            <span>•</span>Event Listener in Javascript
                          </li>
                          <li>
                            <span>•</span>DOM Manipulation
                          </li>
                        </ul>
                      </Accordion.Panel>
                      <Accordion.Panel header="GIT & GITHUB">
                        <ul className="curriculum-topics">
                          <li>
                            <span>•</span>Starting with Git & Github
                          </li>
                          <li>
                            <span>•</span>Git Push & Pull
                          </li>
                          <li>
                            <span>•</span>Open source contribution
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion>
                  </div>
                </AnimatedOnScroll>
                <Pricebox />
                <Certificate />
                <Products />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
