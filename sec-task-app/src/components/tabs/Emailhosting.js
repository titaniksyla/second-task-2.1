import React from "react";
import Card from "../Card/Card";
import "./template.css";

function Emailhosting() {
  return (
    <div className="container">
      <div className="card-cont">
        <Card
          cardTitle=".EUM"
          descTitle="$14.99/yr"
          descParagraph="Instead of $16.99"
        />
        <Card
          cardTitle=".EU"
          descTitle="$145.99/yr"
          descParagraph="Instead of $16.99"
        />
        <Card
          cardTitle=".EUT"
          descTitle="$14.99/yr"
          descParagraph="Instead of $16.99"
        />
        <Card
          cardTitle=".EUALTH"
          descTitle="$14.99/yr"
          descParagraph="Instead of $16.99"
        />
        <Card
          cardTitle=".EU.UK"
          descTitle="$14.99/yr"
          descParagraph="Instead of $16.99"
        />
        <Card
          cardTitle=".EUG"
          descTitle="$145.99/yr"
          descParagraph="Instead of $16.99"
        />
        <Card
          cardTitle=".EU"
          descTitle="$146.33/yr"
          descParagraph="Instead of $16.99"
        />
        <Card
          cardTitle=".EUA"
          descTitle="$146.33/yr"
          descParagraph="Instead of $16.99"
        />
      </div>
    </div>
  );
}

export default Emailhosting;
