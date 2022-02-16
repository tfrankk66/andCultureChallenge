import React from "react";
import Dropdown from "./Dropdown";
import '../styles/Filter.scss'

const Filter = () => {

    return(
        <div className="filterContainer">
            <Dropdown label="States"/>
            <Dropdown label="Cities"/>
            <Dropdown label="Brewery Type"/>
        </div>
    )
}

export default Filter;