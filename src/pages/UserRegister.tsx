import { Redirect, Route } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "./UserRegister.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";
import "/bootstrap/css/bootstrap.min.css";
setupIonicReact();

function CrearUsuario() {
  return (
    <div className="login-wrap p-4 p-md-5">
      <div className="d-flex">
        <div className="w-100">
          <h3 className="mb-4">Crear usuario</h3>
        </div>
      </div>

      <form action="#" className="signin-form">
        <div className="form-group mb-3">
          <label className="label" htmlFor="name">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
          />
        </div>

        <div className="form-group mb-3">
          <label className="label" htmlFor="wholeName">
            Nombre completo
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="nombre completo"
          />
        </div>

        <div className="form-group mb-3">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="form-group mb-3">
          <label className="label" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="form-control btn btn-primary rounded submit px-3"
          >
            Crear usuario
          </button>
        </div>
      </form>
    </div>
  );
}

const UserRegister: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registrar Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CrearUsuario />
      </IonContent>
    </IonPage>
  );
};

export default UserRegister;
