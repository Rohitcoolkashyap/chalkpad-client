import React, { useState, useEffect } from "react";
import Alerts from "../data/alerts";
export default function Main() {
  const [alerts, setAlerts] = useState([]);
  const [notices, setNotices] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setAlerts(Alerts);
  }, [alerts]);
  useEffect(() => {
    setNotices(Alerts);
  }, [notices]);
  useEffect(() => {
    setResources(Alerts);
  }, [resources]);

  const handleDate = (date) => {
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dateTimeFormat.formatToParts(date);
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <div className="main-content">
        <div className="recent-activity">
          <p className="recent-heading">Notices</p>

          <ul>
            {notices.map((notice) => (
              <div className="alerts-inner">
                <div className="alert-date">
                  <span> {handleDate(alert.date)} </span>
                </div>
                <li>{notice.alert}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="alerts">
          <p className="alerts-heading">alerts</p>

          <ul>
            {alerts.map((alert) => (
              <div className="alerts-inner">
                <div className="alert-date">
                  <span> {handleDate(alert.date)} </span>
                </div>
                <li>{alert.alert}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="resources">
          <p className="resources-heading">resources</p>

          <ul>
            {resources.map((resource) => (
              <div className="alerts-inner">
                <div className="alert-date">
                  <span> {handleDate(alert.date)} </span>
                </div>
                <li>{resource.alert}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <section className="follow">
        <p>Follow Us</p>
        <a href="https://github.com/Rohitcoolkashyap">
          <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="facebook" />
        </a>
        <a href="#">
          <img
            src="https://i.ibb.co/vJvbLwm/social-twitter.png"
            alt="twitter"
          />
        </a>
        <a href="#">
          <img
            src="https://i.ibb.co/b30HMhR/social-linkedin.png"
            alt="linkedin"
          />
        </a>
      </section>
    </div>
  );
}
