import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/count/countAction';

const Counter = (props) => {
    console.log(props);
    const {increment, decrement, value} = props;
    return (
        <div align='center' className='container'>
            <h3 className='my-5'>Result Value : {value}</h3>
            <Button variant='success' onClick={increment}>
                Increment
            </Button>
            &nbsp; &nbsp;
            <Button variant='danger' onClick={decrement}>
                Decrement
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        value : state.value.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch(increment()),
        decrement : () => dispatch(decrement())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);