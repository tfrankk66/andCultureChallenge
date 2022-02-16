import React from "react";
import '../styles/Modal.scss';
import GoogleMapReact from 'google-map-react';
import { isTemplateExpression } from "typescript";

type modalProps = {
    info: {
        name: string;
        address: string;
        long: string;
        lat: string;
    },
    isOpen: boolean;
    togOpen: Function;
}

type markerProps = {
    lat: number;
    lng: number;
    text: string
}

const MarkerComp = ({ lat, lng, text }: markerProps) => <div>{text}</div>

const Modal = ({ info, isOpen, togOpen }: modalProps): JSX.Element => {
    const showModal = isOpen ? "modal display-block" : "modal display-none";
    const center = { lat: 55.56, lng: 45.8 };
    const zoom = 11;

    return (
        <div className={showModal}>
            <section className="modal-main">
                <p>{isOpen}</p>
                <p>{info.name}</p>
                <p>{info.address}</p>
                <p>{info.long}</p>
                <p>{info.lat}</p>
                <GoogleMapReact defaultCenter={center} defaultZoom={zoom} bootstrapURLKeys={{ key: "AIzaSyAFfqfzrLoBI_jj7GY1JQDvg-yWK0uVuGo" }}>
                    <MarkerComp lat={116.202929}
                        lng={43.618516}
                        text={'Kreyser Avrora'} />
                </GoogleMapReact>
                <button type="button" onClick={() => togOpen(false)}>Close</button>
            </section>
        </div>
    )
}

export default Modal;