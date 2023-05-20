import React from "react";
import Card from "../Card/Card";
import "./template.css";

function Domains() {
  return (
    <div className="container">
      <div className="card-cont">
        <Card
          cardTitle=".COM"
          descTitle="$5.99/yr"
          descParagraph="Instead of $10.99"
        />
        <Card
          cardTitle=".AI"
          descTitle="$55.99/yr"
          descParagraph="Instead of $10.99"
        />
        <Card
          cardTitle=".NET"
          descTitle="$7.99/yr"
          descParagraph="Instead of $10.99"
        />
        <Card
          cardTitle=".HEALTH"
          descTitle="$7.99/yr"
          descParagraph="Instead of $10.99"
        />
        <Card
          cardTitle=".CO.UK"
          descTitle="$3.99/yr"
          descParagraph="Instead of $10.99"
        />
        <Card
          cardTitle=".ORG"
          descTitle="$15.99/yr"
          descParagraph="Instead of $10.99"
        />
        <Card
          cardTitle=".CO"
          descTitle="$26.33/yr"
          descParagraph="Instead of $10.99"
        />
        <Card
          cardTitle=".SEA"
          descTitle="$26.33/yr"
          descParagraph="Instead of $10.99"
        />
      </div>
    </div>
  );
}

export default Domains;
