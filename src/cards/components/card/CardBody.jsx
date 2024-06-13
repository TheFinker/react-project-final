import { CardContent, CardHeader, Divider, Link, Typography } from "@mui/material";
import React from "react";

export default function CardBody({
  title,
  subtitle,
  phone,
  address,
  cardNumber,
  showCardDetails,
  card,
}) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle} />

      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone: </strong>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>
          {address.city} {address.street} {address.houseNumber}
        </Typography>
        {showCardDetails && (
          <>
            <Typography variant="body2" color="text.secondary">
              •<strong>Country: </strong>
              {address.country}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •<strong>City: </strong>
              {address.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •<strong>Zip: </strong>
              {address.zip}
            </Typography>
          </>
        )}
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong>
          {cardNumber}
        </Typography>
        {showCardDetails && (
          <>
            <Typography variant="body2" color="text.secondary">
              <strong>Email: </strong>
              {card.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Web: </strong>
              <Link>{card.web}</Link>
            </Typography>
          </>
        )}
      </CardContent>
    </>
  );
}
