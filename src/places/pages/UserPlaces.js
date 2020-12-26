import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "The Beach",
    description: "The Beach",
    imageUrl:
      "https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80",
    address: "123 Sesame Street, Seattle, WA 98144",
    location: { lat: 47.6431183, long: -122.6585707 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "The Beach 2",
    description: "The Beach2",
    imageUrl:
      "https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1789&q=80",
    address: "123 Sesame Street, Seattle, WA 98144",
    location: { lat: 47.6431183, long: -122.6585707 },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const userID = useParams().userID;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userID);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
