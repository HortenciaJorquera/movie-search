import React from 'react'

export default function SearchBar() {
    return (
        <form action="" className="form">
            <label htmlFor="query" className="label">Movie Name</label>
            <input type="text" className="input" name="query" placeholder="i.e Forest Gump"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
