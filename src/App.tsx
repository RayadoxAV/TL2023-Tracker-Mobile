import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonLoading,
  IonPage,
  IonRoute,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router";
import UserRegister from "./pages/UserRegister";
import History from "./pages/History";
import { home, people, reload } from "ionicons/icons";
import Monitor from "./pages/Monitor";
import Login from "./pages/Login";
import { IonReactRouter } from "@ionic/react-router";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      fetch(`http://192.168.137.253:3001/users/validate_token`, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          if (!response.isTokenValid) {
            setRedirect(true);
          } else {
            setLoading(false);
          }
        });
    } else {
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return (
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect from="/" to="/Login" exact />
          <Route path="/Login" render={() => <Login />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    );
  }

  if (loading) {
    return <IonLoading></IonLoading>;
  }

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/Monitor" />
          <Route path="/Monitor" render={() => <Monitor />} exact={true} />
          <Route path="/History" render={() => <History />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Monitor" href="/Monitor">
            <IonIcon icon={home} />
            <IonLabel>Monitor</IonLabel>
          </IonTabButton>

          <IonTabButton tab="History" href="/History">
            <IonIcon icon={reload} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default App;
