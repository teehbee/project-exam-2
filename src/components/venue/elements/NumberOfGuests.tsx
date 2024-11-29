import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingGuestsSchema } from "../../forms/schemas";
import { BookingGuestsInterface } from "../../api/const/interfaces";

interface BookingNumberOfGuestsProps {
  onGuestsChange: (guests: number) => void;
}

const BookingNumberOfGuests: React.FC<BookingNumberOfGuestsProps> = ({ onGuestsChange }) => {
  const {
    register,
    watch,
    formState: { errors },
    trigger,
  } = useForm<BookingGuestsInterface>({
    resolver: yupResolver(bookingGuestsSchema),
    defaultValues: {
      guests: 1,
    },
  });

  // Watch the number of guests and call onGuestsChange whenever it changes

  const guests = watch("guests");

  useEffect(() => {
    onGuestsChange(guests);
  }, [guests, onGuestsChange]);

  // blur event added to validate when focus is lost of form, as submit is done in parent component

  const handleBlur = async () => {
    await trigger("guests");
  };

  return (
    <div className="form-venue-container form-box-shadow mx-auto p-3 mt-4">
      <div className="form-group d-flex flex-column text-start">
        <label htmlFor="bookVenueNRofGuests" className="mt-2 fs-0-875rem">
          Max number of guests<span className="text-danger">*</span>
        </label>
        <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" id="bookVenueNRofGuests" {...register("guests", { valueAsNumber: true })} onBlur={handleBlur} />
        {errors.guests && <span className="text-danger fs-0-875rem">{errors.guests.message}</span>}
      </div>
    </div>
  );
};

export default BookingNumberOfGuests;
