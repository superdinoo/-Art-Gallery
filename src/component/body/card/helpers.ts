import { useGetAuthorsQuery, useGetLocationsQuery } from "../../../redux/reducers/apiSlice";
import { AuthorsData, LocationData } from "../../../interface/interface";

const helpers = () => {
  const { data: authorsData } = useGetAuthorsQuery({});
  const { data: locationData } = useGetLocationsQuery({});

  const locationId = locationData
    ? new Map(locationData?.map((location: LocationData) => [location.id, location]))
    : new Map();

  const authorsById = authorsData
    ? new Map(authorsData?.map((author: AuthorsData) => [author.id, author]))
    : new Map();

  return { locationId, authorsById };
};

export default helpers;
