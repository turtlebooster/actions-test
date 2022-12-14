import React from "react";
import { Helmet } from "react-helmet-async";

interface HelmetType {
  title: string;
  description: string;
}

const SetHelmet = ({ title, description }: HelmetType) => {
  return (
    <Helmet>
      <title>눈오리 월드 🦆 {title}</title>
      <meta name="description" content={description} data-react-helmet="true" />
    </Helmet>
  );
};

export default SetHelmet;
