import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';
import { validateIsbn } from '../../../services/books'
import { Container, Video, ScanMarker } from './styles';

function Scanner({ onScan }) {
    let scannerAtteps = 0;

    const onDetected = result => {
        Quagga.offDetected(onDetected); // * It will stop our function when find a code

        const isbn = result.codeResult.code;
        console.log(isbn);

        if (validateIsbn(isbn)) {
            onScan(isbn);
            return;
        } else {
            if (scannerAtteps >= 5) {
                alert("Wasn't possible to read your code, please try again!")
            }
        }

        scannerAtteps++;
        Quagga.onDetected(onDetected);
    }

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {  // *check if your browser can open the camera
            Quagga.init(
                {
                    inputStream: {
                        name: "Live",
                        type: "LiveStream",
                        target: document.querySelector("#video"),
                        constraints: {
                            facingMode: "environment",
                        },
                    },
                    numOfWorkers: 1,
                    locate: true,
                    decoder: {
                        readers: ["ean_reader"],
                    }
                },
                err => {
                    if (err) {
                        console.error(err);
                        alert("Error to open the camera, give the right permision");
                        return;
                    };
                    Quagga.start();
                }
            );
            Quagga.onDetected(onDetected);
        }
    }, []);

    return (
        <>
            <Video id="video" />
            <Container>
                <ScanMarker>
                    <img src="../../../../assets/scan-marker.png"
                        alt="Reader code"
                        width="260"
                        height="260"
                    />
                    <p className="label">Show your book code</p>
                </ScanMarker>
                <img className="logo"
                    src="../../../../assets/signature.png"
                    alt="Wanderson Castro"
                    width="137"
                    height="69"
                />
            </Container>
        </>
    );
}

Scanner.propTypes = {
    onScan: PropTypes.func,
}

export default Scanner;

