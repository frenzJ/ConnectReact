import PropTypes from 'prop-types';

function Buttons({name = "Button", className = "Button", type = ""}){
    return (
            <button className={className} type={type}>{name}</button>
    )
}

Buttons.propTypes = { 
    name: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string
};

export default Buttons;