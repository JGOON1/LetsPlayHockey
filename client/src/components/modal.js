import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
// import Checkbox from "../../Checkbox/Checkbox";
import Select from "react-select";
import { position, shot, skillLevel, days, notice } from "../../src/constants";


const mapArray = (arr, state) => {
    let newArr = [];
    arr.map((key, i) => {
        newArr.push({
            state: state,
            label: key,
            value: i
        });
    });
    return newArr;
};



    const ModalPage = props => {
        const [modal, setModal] = useState(false);

        const toggle = () => {
            setModal(!modal)
        };

        return (
            <MDBContainer >
                <MDBBtn gradient="blue" onClick={toggle}>Edit Profile</MDBBtn>
                <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
                    {/* <MDBModalHeader toggle={toggle}>Update Profile</MDBModalHeader> */}
                    <MDBModalBody className="mx-4">

                        <div className="text-center">
                            <h3 className="dark-grey-text mb-5">
                                <strong>Update Profile</strong>
                            </h3>
                        </div>
                        <hr />

                        <div className="row drop-down">
                            <div className="text-center">
                                <h4>Position: </h4>
                            </div>
                            <div className="position-select">
                                <Select
                                    placeholder="Position"
                                    options={mapArray(position, "position")}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <hr />

                        <div className="row drop-down">
                            <div className="text-center">
                                <h4>Shot: </h4>
                            </div>
                            <div className="position-select">
                                <Select
                                    placeholder="Shot"
                                    options={mapArray(shot, "shot")}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <hr />

                        <div className="row drop-down">
                            <div className="text-center">
                                <h4>Skill Level: </h4>
                            </div>
                            <div className="position-select">
                                <Select
                                    placeholder="Skill Level"
                                    options={mapArray(skillLevel, "skillLevel")}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <hr />

                        <div className="row drop-down">
                            <div className="text-center">
                                <h4>Availability: </h4>
                            </div>
                            <div className="position-select">
                                <Select
                                    placeholder="Availability"
                                    options={mapArray(days, "availability")}
                                    onChange={props.handleChange}
                                    isMulti
                                />
                            </div>
                        </div>
                        <hr />

                        <div className="row drop-down">
                            <div className="text-center">
                                <h4>Notice Needed: </h4>
                            </div>
                            <div className="position-select">
                                <Select
                                    placeholder="Notice Needed"
                                    options={mapArray(notice, "notice")}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <hr />

                        <div className="row">


                        </div>

                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="danger" onClick={toggle} size="sm">Cancel</MDBBtn>
                        <MDBBtn color="primary" size="sm">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );

    }

    export default ModalPage;