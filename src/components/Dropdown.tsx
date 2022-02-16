import React from "react";
import '../styles/Dropdown.scss';

type dropdownProps = {
    label: string,
}

const Dropdown = ({ label }: dropdownProps): JSX.Element => {

    return (
        <div className="dropdown">
            <p className="dropdown__label">{label}</p>
            <select>
                <option>Value</option>
            </select>
        </div>
    )
}

export default Dropdown;