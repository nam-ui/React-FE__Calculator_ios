import { IonContent, IonPage } from "@ionic/react";
import { MouseEvent, useState } from "react";
import Calculator from "../components/Calculator";
import "./Home.css";

const Home: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const mousedownHead = (e: MouseEvent<HTMLElement>) => {
    setIsDragging(true);
  };
  const mouseupHead = (e: MouseEvent<HTMLElement>) => {
    setIsDragging(false);
  };
  const mouseMoveHead = (e: MouseEvent<HTMLElement>) => {
    if (isDragging) {
      setTranslate({
        x: translate.x + e.movementX,
        y: translate.y + e.movementY,
      });
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" id="">
        <div>Có thể kéo thả</div>
        <div
          id="drag-head"
          onMouseDown={mousedownHead}
          onMouseUp={mouseupHead}
          onMouseMove={mouseMoveHead}
          style={{
            transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
          }}
        >
          <Calculator />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
