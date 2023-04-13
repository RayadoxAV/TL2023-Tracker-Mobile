import { Redirect, Route } from "react-router-dom";
import {
  IonButton,
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
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import App from "../App";
import "./Login.css";

setupIonicReact();

function InicioSesion() {
  const [redirect, setRedirect] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().email("Ingrese un correo"),
    password: Yup.string().required("Ingrese una contraseña"),
  });

  function handleSubmit(values, { resetForm }) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        identifier: values.username,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch("http://192.168.137.253:3001/login", requestOptions)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.loginStatusCode === 1) {
          alert("Credenciales incorrectas");
        } else {
          setRedirect(true);
          localStorage.setItem("token", response.token);
        }
      });
  }

  if (redirect) {
    return (
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect path="/Login" to="/" exact />
          <Route path="/" render={() => <App />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12">
          <div className="login-wrap p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-4 fw-bold">Iniciar sesión</h3>
              </div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form className="signin-form">
                  <div className="form-group mb-3">
                    <input
                      id="username"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      type="email"
                      className="form-control"
                      placeholder="prueba@prueba.com"
                    />
                    {errors.username && touched.username ? (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {errors.username}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      id="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      required
                    />
                    {errors.password && touched.password ? (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {errors.password}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Iniciar sesi&oacute;n
                    </button>
                  </div>

                  <div className="form-group d-md-flex justify-content-center">
                    <div className="w-50 text-center">
                      {/* <a href="#">¿Olvidaste tu contraseña?</a> */}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <InicioSesion />
      </IonContent>
    </IonPage>
  );
};

export default Login;
