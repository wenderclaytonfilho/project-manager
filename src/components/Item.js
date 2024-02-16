import PropTypes from 'prop-types'

function Item({title, publish_date}){
    
    return(
        <>
        <li>{title} - {publish_date}</li>
        </>
    )
}

Item.propTypes = {
    title:PropTypes.string.isRequired,
    publish_date:PropTypes.number.isRequired,
}

Item.defaultProps ={
    title : "Title required",
    publish_date : 0,
}
export default Item