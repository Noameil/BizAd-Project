import React, { useState } from "react";
import AddService from "./AddService";
import Table from "./Table";
import Title from "./Title";
import Message from "./Message";

export default function Services() {
  const [servicesData, setServicesData] = useState([]);

  const addService = (newService) => {
    console.log(newService);

    newService.id = Math.random() + "";
    const updated = [...servicesData, newService];
    setServicesData(updated);
  };

  const deleteService = (service) => {
    const updated = servicesData.filter(
      (serviceItem) => serviceItem.id !== service.id
    );
    setServicesData(updated);
  };

  return (
    <>
      <Title
        mainTitle="Services"
        subTitle="Choose services that you would like to get from BizAd"
      />

      <AddService addService={addService} />

      {servicesData.length === 0 && <Message />}

      <Table services={servicesData} deleteService={deleteService} />
    </>
  );
}
