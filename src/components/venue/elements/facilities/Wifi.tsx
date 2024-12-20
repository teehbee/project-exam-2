import { wifiIcon } from "../../../../assets/icon";

function WifiFacility() {
  return (
    <div className="d-flex me-2 me-md-5 mt-1">
      <img className="facility-icon me-2" src={wifiIcon} aria-label="wifi available" />
      <p className="fs-0-75rem-to-1rem">Wi-Fi Available</p>
    </div>
  );
}

function WifiFacilityNoText() {
  return <img className="facility-icon me-2" src={wifiIcon} aria-label="wifi available" />;
}

export { WifiFacility, WifiFacilityNoText };
