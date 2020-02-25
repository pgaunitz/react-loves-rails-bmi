export const calculateImperialBmi = (weight, height) => {
    const bmiImperialValue = ((weight * 703) / (((height / 100) * height) / 100)).toFixed(2);
    const bmiMessage = setBMIMessage(bmiImperialValue);
    return [bmiImperialValue, bmiMessage];}

    const setBMIMessage = finalBMI => {
        if (finalBMI < 18.5) {
          return "Underweight";
        }
      
        if (finalBMI > 18.5 && finalBMI < 25) {
          return "Normal";
        }
      
        if (finalBMI > 25 && finalBMI < 30) {
          return "Overweight";
        }
      
        if (finalBMI > 30) {
          return "Obese";
        }
      };