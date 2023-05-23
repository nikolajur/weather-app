import L from "leaflet";
import circle from "../assets/circle-full.svg";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [12, 12]
  }
});

export const circleIcon = new LeafIcon({ iconUrl: circle });
