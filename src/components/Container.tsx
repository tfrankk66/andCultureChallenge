import React, { useState, useEffect } from "react";
import '../styles/Container.scss';
import Filter from "./Filter";
import ListContainer from "./ListContainer";
import axios from "axios";

const Container = (): JSX.Element => {
    return (
        <div className="container">
            <Filter />
            <ListContainer />
        </div>
    )
}
export default Container;