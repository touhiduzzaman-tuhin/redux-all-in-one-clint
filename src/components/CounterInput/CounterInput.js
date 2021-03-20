import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { counterDecrement, counterIncrement } from '../../redux/counterInput/counterInputAction';

const CounterInput = (props) => {
    console.log(props);
    // const {number, inputIncrement, inputDecrement} = props;
    const handleIncrement = () => {

    }
    const handleDecrement = () => {

    }
    return (
        <div align='center' className='container'>
            <h3 className='my-5'>Result Value : {}</h3>
            <form>
                <div className='form-group'>
                    <input type="number" name="number" id="number" placeholder='Enter Any Number' className='form-control' required/>
                </div>
                <div className='form-group'>
                    <Button variant='success' onClick={handleIncrement()}>
                        Value Increase
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant='danger' onClick={handleDecrement()}>
                        Value Decrease
                    </Button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        number : state.number.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputIncrement : (value) => dispatch(counterIncrement(value)),
        inputDecrement : (value) => dispatch(counterDecrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterInput);