import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { getTomorrowsDate } from "./dateUtils";

// function useDateAdjust(dateFrom: string | undefined, setValue: UseFormSetValue<any>) {
//   const [minDateTo, setMinDateTo] = useState<string>("");

//   useEffect(() => {
//     if (dateFrom) {
//       const nextDay = new Date(dateFrom);
//       nextDay.setDate(nextDay.getDate() + 1);
//       const newMinDateTo = nextDay.toISOString().split("T")[0];
//       setMinDateTo(newMinDateTo);
//       setValue("dateTo", newMinDateTo);
//     }
//   }, [dateFrom, setValue]);

//   return minDateTo;
// }

// export default useDateAdjust;

interface FormData {
  dateTo: string;
}

function useDateAdjust(dateFrom: string | undefined, setValue: UseFormSetValue<FormData>) {
  const [minDateTo, setMinDateTo] = useState<string>("");

  useEffect(() => {
    const tomorrow = getTomorrowsDate();
    if (dateFrom) {
      const nextDay = new Date(dateFrom);
      nextDay.setDate(nextDay.getDate() + 1);
      const newMinDateTo = nextDay.toISOString().split("T")[0];
      setMinDateTo(newMinDateTo);
      setValue("dateTo", newMinDateTo);
    } else {
      setMinDateTo(tomorrow);
      setValue("dateTo", tomorrow); // Ensure the fallback value is set in the form
    }
  }, [dateFrom, setValue]);

  return minDateTo;
}

export default useDateAdjust;
