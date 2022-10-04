import React from "react";
import "./Card.css";

export default function Card(props) {

  const data = props.data;

  return (
    <>
      <div className="card">
        <img
          src={data.imgURL}
          className="card-img-top"
        />
        <div className="card-body">
          <span className="card-text border border-dark rounded p-1 fw-semibold">
            {data.id}
          </span>
          <h2 className="card-title pt-3">{data.businessName}</h2>
          <p className="card-text text-secondary pb-2">{data.businessInfo}</p>
          <p className="card-text border-top mb-0 py-1">
            <i className="bi bi-telephone"></i> {data.phoneNumber}
          </p>
          <p className="card-text border-top border-bottom py-1">
            <i className="bi bi-geo"></i> {data.address}
          </p>
          <a href={data.websiteURL} target = "_blank" className="btn btn-primary mt-2">Visit Website</a>
        </div>
      </div>
    </>
  );
}
