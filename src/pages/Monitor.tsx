import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Monitor.css";
import Services from "../components/Services";

const Monitor: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Monitor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Services />
      </IonContent>
    </IonPage>
  );
};

export default Monitor;
