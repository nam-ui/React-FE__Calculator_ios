import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { MouseEvent, useState } from "react";
import "../core/HeadCalculator.css";

interface ContainerProps {}

const HeadCalculator: React.FC<ContainerProps> = () => {
  return (
    <React.Fragment>
      <div>
        <IonGrid>
          <IonRow className="ion-align-items-start ion-no-padding">
            <IonCol size="4" size-sm>
              <button id="closer-tool-bar" className="btn-tool-bar"></button>
            </IonCol>
            <IonCol size="4" size-sm>
              <button id="hidden-tool-bar" className="btn-tool-bar"></button>
            </IonCol>
            <IonCol size="4" size-sm>
              <button id="zoom-tool-bar" className="btn-tool-bar"></button>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </React.Fragment>
  );
};

export default HeadCalculator;
