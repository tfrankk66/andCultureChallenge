import React from "react";
import '../styles/Title.scss';

type titleProps = {
    text: string;
}

const Title = ({text}: titleProps): JSX.Element => <h1>{text}</h1>

export default Title;