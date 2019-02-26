import React from 'react'

const Search = ({handleSubmit}) => (
    <div className="col-sm-12">
        <form onSubmit={handleSubmit}>            
        <label for="basic-url">Search appointments</label>
        <div className="input-group col-sm-6">
            <input type="text" name="query" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            <button type="submit" class="btn btn-info offset-sm-1">Search</button>
        </div>
        </form>
    </div>
)

export default Search