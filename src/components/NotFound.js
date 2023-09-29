import Button from 'react-bootstrap/Button';




const NotFound = ({ onNotFound }) => {
    return (
        <div className='not__found'>
            <div className='not__found__text'>
                <h1>no results</h1>
                <Button variant="light" onClick={() => onNotFound()}>back to main</Button>
            </div>
        </div>
    )

}

export default NotFound;