import React from "react";
import Card from "../Card/Card";
import "./template.css";

function Dedicatedservers() {
  return (
    <div className="container">
      <div className="card-cont">
        <Card
          cardTitle=".NEM"
          descTitle="$15.99/yr"
          descParagraph="Instead of $13.99"
        />
        <Card
          cardTitle=".NE"
          descTitle="$155.99/yr"
          descParagraph="Instead of $13.99"
        />
        <Card
          cardTitle=".NET"
          descTitle="$17.99/yr"
          descParagraph="Instead of $13.99"
        />
        <Card
          cardTitle=".NEALTH"
          descTitle="$17.99/yr"
          descParagraph="Instead of $13.99"
        />
        <Card
          cardTitle=".NE.UK"
          descTitle="$13.99/yr"
          descParagraph="Instead of $13.99"
        />
        <Card
          cardTitle=".NEG"
          descTitle="$115.99/yr"
          descParagraph="Instead of $13.99"
        />
        <Card
          cardTitle=".NE"
          descTitle="$126.33/yr"
          descParagraph="Instead of $13.99"
        />
        <Card
          cardTitle=".NEA"
          descTitle="$126.33/yr"
          descParagraph="Instead of $13.99"
        />
      </div>
    </div>
  );
}

export default Dedicatedservers;
