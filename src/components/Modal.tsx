import React from "react";
import '../styles/Modal.scss';
import GoogleMapReact from 'google-map-react';

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

const MarkerComp = ({ lat, lng, text }: markerProps) => <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
}}>{text}</div>

const Modal = ({ info, isOpen, togOpen }: modalProps): JSX.Element => {
    const showModal = isOpen ? "modal display-block" : "modal display-none";
    const center = { lat: 31, lng: -100.00 };
    const zoom = 4;

    return (
        <div className={showModal}>
            <section className="modal-main">
                <p>{isOpen}</p>
                <p>{info.name}</p>
                <p>{info.address}</p>
                <p>{info.long}</p>
                <p>{info.lat}</p>
                <GoogleMapReact defaultCenter={center} defaultZoom={zoom} bootstrapURLKeys={{ key: "testing" }}>
                    <MarkerComp lat={Number(info.lat)}
                        lng={Number(info.long)}
                        text={info.name} />
                </GoogleMapReact>
                <button type="button" onClick={() => togOpen(false)}>Close</button>
            </section>
        </div>
    )
}

export default Modal;