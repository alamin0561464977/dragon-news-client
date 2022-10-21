import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Link, useNavigate } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author } = news;
    const navigate = useNavigate();
    const handelNewsDetails = (category_id) => {
        navigate(`/news-details/${category_id}`)
    }
    return (
        <div onClick={() => handelNewsDetails(_id)} className='my-5 shadow'>
            <Card className="text-center">
                <Card.Header>
                    <div>
                        <div>
                            {/* <img roundedCircle src={author.img} alt="" /> */}
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length >= 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to='/'>mor details</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;