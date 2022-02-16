import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Modal from "./Modal";
import axios from "axios";
import '../styles/ListContainer.scss';
import { BreweryType } from "../models/Brewery_interface";

const ListContainer = () => {
    const [brewList, setBrewList] = useState<BreweryType[]>([]);
    const [modalInfo, setModalInfo] = useState({ name: "", address: "", long: "", lat: "" });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get<BreweryType[]>('https://api.openbrewerydb.org/breweries?per_page=50')
            .then((res) => {
                setBrewList(res.data);
            });
    });

    return (
        <div className="listcontainer">
            <Modal info={modalInfo} isOpen={open} togOpen={setOpen} />
            {brewList.map(item =>
                <ListItem
                    key={item.id}
                    name={item.name}
                    type={item.brewery_type}
                    address={item.street + ", " + item.city + ", " + item.state + " " + item.postal_code}
                    site={item.website_url}
                    updateInfo={setModalInfo}
                    lat={item.latitude}
                    long={item.longitude}
                    togModal={setOpen} />
            )}
        </div>
    )
}

export default ListContainer;