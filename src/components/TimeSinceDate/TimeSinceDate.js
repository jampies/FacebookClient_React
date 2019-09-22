import React from 'react';
import dateService from '../../services/dateService/dateService';

const TimeSinceDate = ({ date }) => {
  const dateObj = new Date(date);
  const distInWords = dateService.formatDistanceToNow(dateObj);

  return (
    <span>{distInWords.substr(0, 1).toUpperCase()}{distInWords.substr(1)} ago</span>
  );
};

export default TimeSinceDate;
