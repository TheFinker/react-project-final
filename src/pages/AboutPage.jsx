import { Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Typography>Hello this is Gal Fink and walcome to my site!! <br /> This site is a site made for my react project finale for HackerU university. <br />in this site you can be ether a business or regular user business user </Typography>
    </div>
  );
}
