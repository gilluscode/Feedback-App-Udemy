import PropTypes from 'prop-types';



// Passing Props
function Header({text, bgColor, textColor}) {
    // Passing styling as a variable
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}


// An Alternative to give values to props
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: "#ff6a95",
}

// As per lecture. It may not be used. As a checking mechanism
Header.prototype = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header