import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../style/components/Counsulting/CardNews.css';
import { Link } from 'react-router-dom';
function CardNews({title, text, img, link}) {
    console.log(link)
    return (
        <Card className='cardborder'>
            <Card.Img variant="top" src={`${img}`} className='cardImg'/>
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>{title}</Card.Title>
                <Card.Text className='cardText'>
                    {text}
                </Card.Text>
            </Card.Body>
            <Button variant="primary" className='cardBtn'><a className='cardBtn' href={`${link}`}>Click here</a></Button>
        </Card>
    );
}

export default CardNews;