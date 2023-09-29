import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerItem() {
    return (
        <Spinner className='spinner' animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}
