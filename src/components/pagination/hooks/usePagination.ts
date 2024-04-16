import { step } from "@/constants/constants";
import { useEffect, useState } from "react";

export const usePagination = (total: number) => {
  
  const [steps, setSteps] = useState<number[]>([]);
  const [currentRange, setCurrentRange] = useState<number>(0);



  useEffect(() => {
    if (steps.length > total / step) {
      setSteps([]);
    }
    for (var i = 1; i <= total / step; i++) {
      steps.push(i);
    }
  }, [total]);

  const nextRange = () => {
    if (currentRange < steps.length / 10 - 1) {
      setCurrentRange((prev) => prev + 1);
    }
  };

  const prevRange = () => {
    if (currentRange > 0) setCurrentRange((prev) => prev - 1);
  };

  const endRange = () => {
    setCurrentRange(Math.max(...steps) / 10 - 1);
  };
  const startRange = () => {
    setCurrentRange(0);
  };

  return { steps, currentRange, nextRange, prevRange, endRange, startRange };
};
