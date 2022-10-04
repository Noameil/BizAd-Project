import React, { useState } from "react";
import Card from "./Card.js";
import Filter from "./Filter.js";
import Title from "./Title.js";
import "./Home.css";

// Images URLs:
// Playground - https://images.pexels.com/photos/133458/pexels-photo-133458.jpeg?cs=srgb&dl=pexels-anthony-133458.jpg&fm=jpg
// Pet Store - https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?cs=srgb&dl=pexels-nancy-guth-850602.jpg&fm=jpg
// Sport Land - https://images.pexels.com/photos/6180409/pexels-photo-6180409.jpeg?cs=srgb&dl=pexels-kampus-production-6180409.jpg&fm=jpg

export default function Home() {
  const cards = [
    {
      id: Math.floor(Math.random() * (101000 - 100001)) + 100000,
      businessName: "Playground",
      businessInfo: "Playground for children",
      phoneNumber: "03-5550000",
      address: "Some street 5, Tel-Aviv",
      imgURL:
        "https://images.pexels.com/photos/133458/pexels-photo-133458.jpeg?cs=srgb&dl=pexels-anthony-133458.jpg&fm=jpg",
      websiteURL: "https://www.kompan.com/",
    },
    {
      id: Math.floor(Math.random() * (101000 - 100001)) + 100000,
      businessName: "Pet Store",
      businessInfo: "A great place to find a friend",
      phoneNumber: "02-2200555",
      address: "Somewhere 10, Jerusalem",
      imgURL:
        "https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?cs=srgb&dl=pexels-nancy-guth-850602.jpg&fm=jpg",
      websiteURL: "https://www.letlive.org.il/",
    },
    {
      id: Math.floor(Math.random() * (101000 - 100001)) + 100000,
      businessName: "Sport Land",
      businessInfo: "Any sport equipment",
      phoneNumber: "04-7781000",
      address: "Another place 22/a, Haifa",
      imgURL:
        "https://images.pexels.com/photos/6180409/pexels-photo-6180409.jpeg?cs=srgb&dl=pexels-kampus-production-6180409.jpg&fm=jpg",
        websiteURL: "https://megasport.co.il/",
    },
  ];

  const [display, setDisplay] = useState('grid');

  const [origData, setOrigData] = useState(cards);
  const [businesses, setBusinesses] = useState(cards);


  function searchBusinesses(value) {
    let result = [...origData];
    if(value.length > 0) {
      result = origData.filter(business =>
        business.businessName.toLowerCase().includes(value.toLowerCase())
      )
    }

    setBusinesses(result);
  }

  return (
    <>
      <Title mainTitle="BizAd" subTitle="Advertising your bussiness" />

      <Filter setDisplay = {setDisplay} search = {searchBusinesses}/>

      <div className={display}>
        {businesses.map((card) => (
          <Card
           key={card.id}
           data={card}
            />
        ))}
      </div>
    </>
  );
}
