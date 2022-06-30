import { IonCard, IonCardContent, IonCardHeader, IonInput } from "@ionic/react";
import React, { useState } from "react";
import HeadCalculator from "./core/HeadCalculator";
import "./ExploreContainer.css";
interface ContainerProps {}

const Calculator: React.FC<ContainerProps> = () => {
  const [statusFeature, setStatusFeature] = useState<string>("");
  const [statusInputValue, setStatusInputValue] = useState<boolean>(true);
  const [resultNumber, setResultNumber] = useState({
    value: 0,
    valueNew: 0,
  });
  const [featuresCalculator] = useState<string[]>([
    "AC",
    "+/-",
    "%",
    "÷",
    "x",
    "-",
    "+",
    ".",
    "=",
  ]);
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

  const handlerFeCalculator = (feature: string) => {
    if (featuresCalculator.includes(feature)) {
      if (feature === "AC") {
        setStatusInputValue(!statusInputValue);
        if (!statusInputValue) {
          setResultNumber({ ...resultNumber, valueNew: 0 });
          return setStatusFeature("");
        }
        if (statusInputValue) {
          setResultNumber({ ...resultNumber, valueNew: 0, value: 0 });
          return setStatusFeature("");
        }
      }
      if (feature === "+") {
        setStatusInputValue(!statusInputValue);
        setResultNumber({
          value: resultNumber.valueNew + resultNumber.value,
          valueNew: 0,
        });
        setStatusFeature("+");
      }
      if (feature === "-") {
        setStatusInputValue(!statusInputValue);
        if (
          statusFeature === "" ||
          resultNumber.valueNew.toString().includes(".")
        ) {
          setStatusFeature("-");
          return setResultNumber({
            ...resultNumber,
            value: resultNumber.valueNew,
            valueNew: 0,
          });
        }
        setResultNumber({
          ...resultNumber,
          value: resultNumber.value - resultNumber.valueNew,
          valueNew: 0,
        });
        setStatusFeature("-");
      }
      if (feature === "+/-") {
        setResultNumber({
          ...resultNumber,
          valueNew: resultNumber.valueNew * -1,
        });
      }
      if (feature === "x") {
        setStatusInputValue(!statusInputValue);
        if (statusFeature === "" || ".") {
          setStatusFeature("x");
          return setResultNumber({
            ...resultNumber,
            value: resultNumber.valueNew,
            valueNew: 0,
          });
        }
        setResultNumber({
          ...resultNumber,
          value: resultNumber.value * resultNumber.valueNew,
          valueNew: 0,
        });
        setStatusFeature("x");
      }
      if (feature === "÷") {
        setStatusInputValue(!statusInputValue);
        if (statusFeature === "" || ".") {
          setStatusFeature("÷");
          return setResultNumber({
            ...resultNumber,
            value: resultNumber.valueNew,
            valueNew: 0,
          });
        }
        setResultNumber({
          ...resultNumber,
          value: resultNumber.value / resultNumber.valueNew,
          valueNew: 0,
        });
        setStatusFeature("÷");
      }
      if (feature === "%") {
        setResultNumber({
          ...resultNumber,
          valueNew: resultNumber.valueNew / 100,
        });
        setStatusFeature("%");
        return setStatusInputValue(false);
      }
      if (feature === "=") {
        setStatusInputValue(true);
        if (statusFeature === "+") {
          setResultNumber({
            ...resultNumber,
            value: resultNumber.valueNew + resultNumber.value,
            valueNew: 0,
          });
          return setStatusFeature("");
        }
        if (statusFeature === "-") {
          setResultNumber({
            ...resultNumber,
            value: resultNumber.value - resultNumber.valueNew,
            valueNew: 0,
          });
          return setStatusFeature("");
        }
        if (statusFeature === "x") {
          setStatusInputValue(!statusInputValue);
          setResultNumber({
            ...resultNumber,
            value: resultNumber.valueNew * resultNumber.value,
            valueNew: 0,
          });
          return setStatusFeature("");
        }
        if (statusFeature === "÷") {
          setResultNumber({
            ...resultNumber,
            value: resultNumber.value / resultNumber.valueNew,
            valueNew: 0,
          });
          return setStatusFeature("");
        }
        if (statusFeature === "%") {
          setResultNumber({
            ...resultNumber,
            value: resultNumber.valueNew / 100,
            valueNew: 0,
          });
          return setStatusFeature("");
        }
      }
      if (feature === ".") {
        setStatusFeature(".");
      }
    } else {
      setStatusInputValue(false);
      const _numberOld = `${resultNumber.valueNew}` + feature;
      setResultNumber({
        ...resultNumber,
        valueNew: Number.parseInt(_numberOld),
      });
      if (
        statusFeature === "." ||
        resultNumber.valueNew.toString().includes(".")
      ) {
        let lodashStr = resultNumber.valueNew.toString().includes(".")
          ? `${resultNumber.valueNew}` + feature
          : `${resultNumber.valueNew}.${feature}`;
        setResultNumber({
          ...resultNumber,
          valueNew: Number.parseFloat(lodashStr),
        });
      }
    }
  };
  const actionItemsCard = () => {
    return (
      <React.Fragment>
        {FEATURES_CALCULATOR.map((text, key) => {
          return (
            <div key={key} className="child-grid-calculator">
              <button
                id="btn-calculator-content"
                onClick={() => handlerFeCalculator(text)}
              >
                {text}
              </button>
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
          <div id="drag-container">
            <HeadCalculator></HeadCalculator>
          </div>
        </IonCardHeader>
        <IonCardContent className="ion-padding">
          <div id="result">
            {statusInputValue && (
              <input id="input-result" value={resultNumber.value} disabled />
            )}
            {!statusInputValue && (
              <input id="input-result" value={resultNumber.valueNew} disabled />
            )}
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
