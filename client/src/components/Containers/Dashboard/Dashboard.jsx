import React, { useState, useEffect } from "react";
import { withGlobalState } from "react-globally";
import { useHistory } from "react-router-dom";
import axios from "axios";
import defaultAvatar from "assets/images/default-avatar.jpg";
import UpdateProfileModal from "components/Modals/UpdateProfileModal";
import AddTeamModal from "components/Modals/AddTeamModal";
import CreateTeamModal from "components/Modals/CreateTeamModal";
import TeamTable from "components/Tables/TeamTable";
import GameTable from "components/Tables/GameTable";
import Tab from "components/Tab";
import Fab from "@material-ui/core/Fab";
import CameraIcon from "@material-ui/icons/CameraAlt";
import "./Dashboard.css";

const Dashboard = props => {
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState({});
  const [teams, setTeams] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const userId = props.globalState.userId;
    const token = props.globalState.authToken;

    if (token === "") {
      history.push("/");
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const fetchData = async () => {
      const response = await axios.get("/findUser", config);
      setUser(response.data);
      setTeams(response.data.teams);
      console.log(response);
    };
    fetchData();
  }, [history, props.globalState]);

  return (
    <div className="wrapper container">
      <div className="row">
        <div className="user-container col-4">
          <div className="avatar-container">
            <img
              id="avatar"
              alt=""
              src={user.avatar ? user.avatar : defaultAvatar}
            />
            <Fab variant="extended" id="update-avatar">
              <CameraIcon />
              Update Photo
            </Fab>
          </div>
          <div className="user-info">
            <ul>
              <li>
                <h2 className="dashboard-text">
                  {user.firstName} {user.lastName}
                </h2>
              </li>
              <li>
                Shot:
                <span className="secondary dashboard-text"> {user.shot}</span>
              </li>
              <li>
                Skill Level:
                <span className="secondary dashboard-text">
                  {user.skillLevel}
                </span>
              </li>
              <li>
                Notice Needed:
                <span className="secondary dashboard-text"> {user.notice}</span>
              </li>
            </ul>
          </div>
          <div id="modalRow">
            <AddTeamModal />
            <CreateTeamModal />
            <UpdateProfileModal />
          </div>
        </div>

        <br />
        <div className="col-8">
          <Tab currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <TeamTable currentStep={currentStep} teams={teams} />
          <GameTable currentStep={currentStep} teams={teams} />
        </div>
      </div>
    </div>
  );
};

export default withGlobalState(Dashboard);
