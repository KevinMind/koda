import React from 'react';
import { format as formatDate } from "date-fns";

const getDateString = value => formatDate(value, 'dd/MM');

const DashboardInfo = ({ value }) => (
  <div>
    Date: {getDateString(value)}
  </div>
);

export default DashboardInfo;
