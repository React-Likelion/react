import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../style/components/Counsulting/CardNews.css';

function CardNews({title, text, img, link}) {
    return (
        <Card className='cardborder'>
            <Card.Img variant="top" src={`${img}`} className='cardImg'/>
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>{title}</Card.Title>
                <Card.Text className='cardText'>
                    {text}
                </Card.Text>
            </Card.Body>
            <Button variant="primary" className='cardBotton'><a className='cardBtn' href={`${link}`}>Click here</a></Button>
        </Card>
    );
}

export default CardNews;