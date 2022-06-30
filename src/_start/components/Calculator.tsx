import { IonCard, IonCardContent, IonCardHeader, IonInput } from "@ionic/react";
import React, { useState } from "react";
import HeadCalculator from "./core/HeadCalculator";
import "./ExploreContainer.css";
interface ContainerProps {}

const Calculator: React.FC<ContainerProps> = () => {
  const [resultNumber] = useState<number>(0);
  // const [KEY_CODE_NUMBER] = useState<number[]>([
  //   48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  // ]);
  const [FEATURES_CALCULATOR] = useState<string[]>([
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ]);
  const actionItemsCard = () => {
    return (
      <React.Fragment>
        {FEATURES_CALCULATOR.map((text, key) => {
          return (
            <div key={key} className="child-grid-calculator">
              <button id="btn-calculator-content">{text}</button>
            </div>
          );
        })}
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <IonCard className="ion-size-sm" style={{ backgroundColor: "gray" }}>
        <IonCardHeader className="ion-no-padding">
          <HeadCalculator></HeadCalculator>
        </IonCardHeader>
        <IonCardContent className="ion-padding">
          <div id="result">
            <input id="input-result" value={resultNumber} disabled />
          </div>
        </IonCardContent>
        <div className="ion-no-padding">
          <div className="grid-calculator">{actionItemsCard()}</div>
        </div>
      </IonCard>
    </React.Fragment>
  );
};
export default Calculator;
