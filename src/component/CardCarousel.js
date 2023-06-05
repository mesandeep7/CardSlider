import React, { Component } from "react";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardCarousel.css";
import CardImage from "./images/WhatsApp Image 2023-06-04 at 8.17.53 PM.jpeg";

export default class Responsive extends Component {
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
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <Card.Title>CBSE(2023-24)</Card.Title>
                                    <Card.Text>
                                        Live teacher interaction,full year,Live doubts,Live quiz.
                                    </Card.Text>
                                    <Card.Title>₹2,500/-</Card.Title>
                                    <Button classsName="CardButton " variant="warning">
                                        View Course Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <Card.Title>CBSE(2023-24)</Card.Title>
                                    <Card.Text>
                                        Live teacher interaction,full year,Live doubts,Live quiz.
                                    </Card.Text>
                                    <Card.Title>₹2,500/-</Card.Title>
                                    <Button classsName="CardButton" variant="warning">
                                        View Course Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <Card.Title>CBSE(2023-24)</Card.Title>
                                    <Card.Text>
                                        Live teacher interaction,full year,Live doubts,Live quiz.
                                    </Card.Text>
                                    <Card.Title>₹2,500/-</Card.Title>
                                    <Button classsName="CardButton" variant="warning">
                                        View Course Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <Card.Title>CBSE(2023-24)</Card.Title>
                                    <Card.Text>
                                        Live teacher interaction,full year,Live doubts,Live quiz.
                                    </Card.Text>
                                    <Card.Title>₹2,500/-</Card.Title>
                                    <Button classsName="CardButton" variant="warning">
                                        View Course Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <Card.Title>CBSE(2023-24)</Card.Title>
                                    <Card.Text>
                                        Live teacher interaction,full year,Live doubts,Live quiz.
                                    </Card.Text>
                                    <Card.Title>₹2,500/-</Card.Title>
                                    <Button classsName="CardButton" variant="warning">
                                        View Course Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body className="CardTitle ">
                                    <p> Class 10</p>
                                    <Card.Title>CBSE(2023-24)</Card.Title>
                                    <Card.Text>
                                        Live teacher interaction,full year,Live doubts,Live quiz.
                                    </Card.Text>
                                    <Card.Title>₹2,500/-</Card.Title>
                                    <Button classsName="CardButton" variant="warning">
                                        View Course Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </>
        );
    }
}
