import React from "react";
import Status from "./Status";

export default function Table(props) {

  const handleDelete = (e, service) => {
    e.preventDefault();
    console.log(service);
    props.deleteService(service);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Service Name</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {props.services.map((service) => (
          <tr key={service.id} className="bg-light">
            <td>{service.serviceName}</td>
            <td>
              <Status type={service.status} />
            </td>
            <td>
              <button
                onClick={(e) => handleDelete(e, service)}
                className="btn btn-default"
              >
                <i className="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}
