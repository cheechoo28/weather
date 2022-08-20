import moment from "moment/moment";

export const getLastUpdateText = (value: string) => {
  const duration = moment.duration(moment().diff(moment(value)));
  const minutes = Math.round(duration.asMinutes());
  const hours = Math.round(duration.asHours());
  const days = Math.round(duration.asDays());
  let text = `${minutes} minutes ago`;
  if (minutes === 0) {
    return "last update just now";
  }
  if (minutes >= 60) {
    text = `${hours} hours ago`;
  }
  if (hours >= 24) {
    text = `${days} days ago`;
  }
  return text;
};
