import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface BookingNumberOfGuestsProps {
  onGuestsChange: (numberOfGuests: number) => void;
}

interface FormData {
  numberOfGuests: number;
}

// yup schema for validation

const schema = Yup.object().shape({
  numberOfGuests: Yup.number().typeError("Must be a number").required("Number of guests is required for booking").min(1, "Must be at least 1"),
});

// yup validation of form

const BookingNumberOfGuests: React.FC<BookingNumberOfGuestsProps> = ({ onGuestsChange }) => {
  const {
    register,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      numberOfGuests: 1, // Set default value to 1
    },
  });

  // Watch the number of guests and call onGuestsChange whenever it changes

  const numberOfGuests = watch("numberOfGuests");

  useEffect(() => {
    onGuestsChange(numberOfGuests);
  }, [numberOfGuests, onGuestsChange]);

  // blur event added to validate when focus is lost of form, as submit is done in parent component

  const handleBlur = async () => {
    await trigger("numberOfGuests");
  };

  return (
    <div className="form-venue-container mx-auto pt-3">
      <div className="form-group d-flex flex-column text-start">
        <label htmlFor="bookVenueNRofGuests" className="mt-2 fs-0-875rem">
          Max number of guests<span className="text-danger">*</span>
        </label>
        <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" id="bookVenueNRofGuests" {...register("numberOfGuests")} onBlur={handleBlur} />
        {errors.numberOfGuests && <span className="text-danger fs-0-875rem">{errors.numberOfGuests.message}</span>}
      </div>
    </div>
  );
};

export default BookingNumberOfGuests;
