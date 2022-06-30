import { IonContent, IonPage } from "@ionic/react";
import Calculator from "../components/Calculator";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <Calculator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
