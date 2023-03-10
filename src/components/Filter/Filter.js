import { FormField } from "components/ContactForm/ContactForm.styled"
import { Input } from "./Filter.styled"
import PropTypes from "prop-types";

export const Filter = ({value, onFind}) => {
    return (
        <FormField>
            Find contacts by name
            <Input type="text" value={value} onChange={(e) => onFind(e.target.value)}></Input>
        </FormField>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFind: PropTypes.func.isRequired,
}