import React from "react";
import '../styles/ListItem.scss'

type itemProps = {
    name: string;
    type: string;
    address: string;
    site: string;
    long: string;
    lat: string;
    updateInfo: Function;
    togModal: Function;
}

type modalInfo = {
    name: string;
    address: string;
    long: string;
    lat: string;
    updateInfo: Function;
    togModal: Function;
}

const openModal = ({ name, address, long, lat, updateInfo, togModal }: modalInfo) => {
    updateInfo({ name, address, long, lat });
    togModal(true);
}

const ListItem = ({ name, type, address, site, long, lat, updateInfo, togModal }: itemProps): JSX.Element => {

    return (
        <div className="listitem">
            <h1 className="listitem__header">{name}</h1>
            <div className="listitem__info">
                <p className="listitem__text">Type: {type}</p>
                <p className="listitem__text">Address: {address}</p>
                {site != null && <a href={site} className="listitem__text--link">Website URL: {site}</a>}
            </div>
            <button onClick={() => openModal({ name, address, long, lat, updateInfo, togModal })}>open Modal</button>
        </div>
    );
}

export default ListItem;