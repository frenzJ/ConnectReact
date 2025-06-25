import PropTypes from 'prop-types';

function Buttons({name = "Button"}){
    return (
        <div className='buttonBox'>
            <button className='button' type='submit'>{name}</button>
        </div>
    )
}

Buttons.propTypes = {  
    name: PropTypes.string
};

export default Buttons;