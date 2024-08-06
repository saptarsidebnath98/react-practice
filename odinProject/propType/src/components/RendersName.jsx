import PropTypes from 'prop-types';
 
const RendersName = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

// RendersName.propTypes = {
//     name: PropTypes.string.isRequired,
// }

RendersName.propTypes = {
    name: PropTypes.string,
}

RendersName.defaultProps = {
    name: "Saptarsi",
}

export default RendersName
