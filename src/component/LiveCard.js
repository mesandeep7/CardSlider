import React, { Component } from "react";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./LiveCard.css";
import CardImage from "./images/WhatsApp Image 2023-06-04 at 8.17.53 PM.jpeg";

export default class LiveCard extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
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
                <div className="container ContainerSection">
                    <h2> Explore Courses... </h2>
                    <Slider {...settings}>
                        <div className="CardMainSection">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <div className="LiveCardContent">
                                        <Card.Text>
                                            Live teacher interaction,full year,Live doubts,Live quiz.
                                        </Card.Text>
                                        <a href="#" className="CardParaSec">Join Now</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <div className="LiveCardContent">
                                        <Card.Text>
                                            Live teacher interaction,full year,Live doubts,Live quiz.
                                        </Card.Text>
                                        <a href="#" className="CardParaSec">Join Now</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <div className="LiveCardContent">
                                        <Card.Text>
                                            Live teacher interaction,full year,Live doubts,Live quiz.
                                        </Card.Text>
                                        <a href="#" className="CardParaSec">Join Now</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <div className="LiveCardContent">
                                        <Card.Text>
                                            Live teacher interaction,full year,Live doubts,Live quiz.
                                        </Card.Text>
                                        <a href="#" className="CardParaSec">Join Now</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <div className="LiveCardContent">
                                        <Card.Text>
                                            Live teacher interaction,full year,Live doubts,Live quiz.
                                        </Card.Text>
                                        <a href="#" className="CardParaSec">Join Now</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <div className="LiveCardContent">
                                        <Card.Text>
                                            Live teacher interaction,full year,Live doubts,Live quiz.
                                        </Card.Text>
                                        <a href="#" className="CardParaSec">Join Now</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </>
        );
    }
}
