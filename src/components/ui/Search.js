import React from 'react'

const Search = ({handleSubmit}) => (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor="query"/>
            <input name="query" type="text"/>

            <button type="submit" />
        </form>
    </div>
)

export default Search