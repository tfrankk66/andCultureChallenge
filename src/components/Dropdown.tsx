import React from "react";

type dropdownProps = {
    label: string,
}

const Dropdown = ({label}: dropdownProps): JSX.Element => {

    return(
        <div>
            <p>{label}</p>
            <select>

            </select>
        </div>
    )
}

export default Dropdown;