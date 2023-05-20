import React from "react";
import Card from "../Card/Card";
import "./template.css";

function Webhosting() {
  return (
    <div className="container">
      <div className="card-cont">
        <Card
          cardTitle=".LOM"
          descTitle="$1.99/yr"
          descParagraph="Instead of $15.99"
        />
        <Card
          cardTitle=".LO"
          descTitle="$15.99/yr"
          descParagraph="Instead of $15.99"
        />
        <Card
          cardTitle=".LOT"
          descTitle="$1.99/yr"
          descParagraph="Instead of $15.99"
        />
        <Card
          cardTitle=".LOALTH"
          descTitle="$1.99/yr"
          descParagraph="Instead of $15.99"
        />
        <Card
          cardTitle=".LO.UK"
          descTitle="$1.99/yr"
          descParagraph="Instead of $15.99"
        />
        <Card
          cardTitle=".LOG"
          descTitle="$15.99/yr"
          descParagraph="Instead of $15.99"
        />
        <Card
          cardTitle=".LO"
          descTitle="$16.33/yr"
          descParagraph="Instead of $15.99"
        />
        <Card
          cardTitle=".LOA"
          descTitle="$16.33/yr"
          descParagraph="Instead of $15.99"
        />
      </div>
    </div>
  );
}

export default Webhosting;
