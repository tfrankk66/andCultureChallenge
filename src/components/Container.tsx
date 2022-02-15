import React from "react";
import '../styles/Container.scss';
import Filter from "./Filter";
import ListContainer from "./ListContainer";

const Container = (): JSX.Element => <div className="container">
    <Filter />
    <ListContainer />
</div>

export default Container;