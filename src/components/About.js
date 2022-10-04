import React from "react";
import Header from "./Header";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Title
        mainTitle="About This App"
        subTitle="What makes BizAd the #1 app for advertising businesses"
      />

      <div className="d-flex flex-column align-items-center w-25 m-auto text-center pt-5">
        <p className="fs-4 text-secondary pb-3 pt-5">
          Everyday many business owners choose to use our app to advertise their
          business and to gain more atraction to their website and online store.
        </p>
        <Link to="/">
          <button type="button" className="btn btn-primary fs-4">Start Today</button> 
        </Link>
        
      </div>
    </>
  );
}
