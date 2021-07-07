import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( inputValue.trim().length > 2) {
            setCategories(e => [inputValue, ...e])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-control"
                required
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
