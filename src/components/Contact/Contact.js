import { Button, Item } from "./Contact.styled";
import PropTypes from "prop-types";

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
    return (
        <Item>
            <p>&#9742; {name} {number}</p>
            <Button type="button" onClick={()=>onDelete(id)}>Delete</Button>
    </Item>
)
}

Contact.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
        id: PropTypes.string.isRequired,
    }).isRequired
}