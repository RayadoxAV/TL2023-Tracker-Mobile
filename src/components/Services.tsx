import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./Services.css";

const request = () =>
  fetch("http://192.168.137.253:3001/services", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const subServices = [];
      json.result.forEach((el) => {
        subServices.push(
          el.components.map((sub) => (
            <div className="subServices">
              <p key={sub.id}>{sub.id}</p>
              <p>{sub.name}</p>
              <p>{sub.state}</p>
              <p>{sub.description}</p>
            </div>
          ))
        );
      });

      const services = json.result.map((el, index) => (
        <tr key={el.id}>
          <td>
            <details>
              <summary>{el.name}</summary>
              {subServices[index]}
            </details>
          </td>
          <td className="status">{el.state == 0 ? "SUCCESS" : "FAILED"}</td>
        </tr>
      ));
      return services;
    });

function Render() {
  const [apiServices, setApiServices] = useState("Cargando...");

  useEffect(() => {
    request().then((res) => {
      setApiServices(res);
    });
  }, []);

  return (
    <>
      <table className="table">
        <tbody>{apiServices}</tbody>
      </table>
    </>
  );
}

const Services: React.FC = () => {
  return (
    <IonContent>
      <Render />
    </IonContent>
  );
};

export default Services;
