import { SearchReturnInterface, FilterValues, ConvertedSearchDataInterface } from "../api/const/interfaces";
import { isDateAvailable } from "./isDateAvailable";

export const filterVenues = (venues: SearchReturnInterface[], searchData: ConvertedSearchDataInterface, filterValues: FilterValues) => {
  return venues.filter((venue) => {
    const matchesLocation = !searchData.location || (venue.location && ((venue.location.city && venue.location.city.toLowerCase().includes(searchData.location.toLowerCase())) || (venue.location.country && venue.location.country.toLowerCase().includes(searchData.location.toLowerCase()))));
    const matchesName = !searchData.name || venue.name.toLowerCase().includes(searchData.name.toLowerCase());
    const matchesGuests = !searchData.guests || searchData.guests <= venue.maxGuests;
    const matchesAvailability = !searchData.dateFrom || !searchData.dateTo || isDateAvailable(venue.bookings, searchData.dateFrom, searchData.dateTo);
    const matchesFilters = (!filterValues.wifi || venue.meta.wifi) && (!filterValues.breakfast || venue.meta.breakfast) && (!filterValues.parking || venue.meta.parking) && (!filterValues.pets || venue.meta.pets);

    return matchesLocation && matchesName && matchesGuests && matchesAvailability && matchesFilters;
  });
};
