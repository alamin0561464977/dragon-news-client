import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const newsDetails = useLoaderData();
    const { title, image_url, details } = newsDetails;
    return (
        <div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>{details}</Card.Text>
            </Card.Body>
        </div>
    );
};

export default NewsDetails;