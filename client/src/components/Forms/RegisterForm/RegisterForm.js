import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import "./registerForm.css";

const RegisterForm = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Register</strong>
                </h3>
              </div>
              
              <input
                className="register-input form-control"
                placeholder="Email Address"
                type="email"
                value={props.user.email ? props.user.email : ""}
                onChange={e =>
                  props.setUser({ ...props.user, email: e.target.value })
                }
              />
              <input
                className="register-input form-control"
                type="text"
                placeholder="Username"
                value={props.user.username ? props.user.username : ""}
                onChange={e =>
                  props.setUser({ ...props.user, username: e.target.value })
                }
              />
              <input
                className="register-input form-control"
                placeholder="Password"
                type="password"
                value={props.user.password ? props.user.password : ""}
                onChange={e =>
                  props.setUser({ ...props.user, password: e.target.value })
                }
              />
              <input
                className="register-input form-control"
                placeholder="Confirm Password"
                type="password"
                value={props.user.passwordConfirm ? props.user.passwordConfirm : ""}
                onChange={e =>
                  props.setUser({ ...props.user, passwordConfirm: e.target.value })
                }
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  id="next-submit"
                  onClick={props.nextStep}
                >
                  Next
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterForm;