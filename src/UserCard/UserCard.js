import React from 'react';

import "./UserCard.css";

function UserCard(props){
    if(!props.data) return (<div></div>);
    return(
      <div className="row">
        <div className="col-md-offset-3 col-md-3">
          <a href ={props.data.url}>
            <img className="img-responsive" alt="userPicture" src={props.data.img}/>
          </a>
        </div>
        <div id="userInfoData" className="col-md-3">
          <div className="row">
            <div className="col-md-6 custom-label">Name: </div>
            <div className="col-md-6 value">{props.data.name}</div>
          </div>
          <div className="row">
            <div className="col-md-6 custom-label">Id: </div>
            <div className="col-md-6 value">{props.data.id}</div>
          </div>
          <div className="row">
            <div className="col-md-6 custom-label">Type: </div>
            <div className="col-md-6 value">{props.data.type}</div>
          </div>
          <div className="row">
            <div className="col-md-6 custom-label">Score: </div>
            <div className="col-md-6 value">{props.data.score}</div>
          </div>
          <div className="row">
            <div className="col-md-6 custom-label">Profile: </div>
            <div className="col-md-6 value"><a href={props.data.url}>Click Me</a></div>
          </div>
          <div className="row">
            <div className="col-md-6 custom-label">Admin: </div>
            <div className="col-md-6 value">{props.data.site_admin ? "YES" : "NO"}</div>
          </div>
        </div>
      </div>
    );
  }

export default UserCard;
