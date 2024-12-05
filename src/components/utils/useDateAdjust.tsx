import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

function useDateAdjust(dateFrom: string | undefined, setValue: UseFormSetValue<any>) {
  const [minDateTo, setMinDateTo] = useState<string>("");

  useEffect(() => {
    if (dateFrom) {
      const nextDay = new Date(dateFrom);
      nextDay.setDate(nextDay.getDate() + 1);
      const newMinDateTo = nextDay.toISOString().split("T")[0];
      setMinDateTo(newMinDateTo);
      setValue("dateTo", newMinDateTo);
    }
  }, [dateFrom, setValue]);

  return minDateTo;
}

export default useDateAdjust;
