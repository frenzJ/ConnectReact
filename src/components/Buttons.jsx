import PropTypes from 'prop-types';

function Buttons({name = "Button", className = "Button", type = "", onClick = ""}){
    return (
            <button className={className} type={type} onClick={onClick}>{name}</button>
    )
}

Buttons.propTypes = { 
    name: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.string
};

export default Buttons;