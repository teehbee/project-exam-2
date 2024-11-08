import { useState } from "react";
import { ProfileBookingsUpcoming, ProfileBookingsManaged } from "./";

// section for managing bookings is set to bookings default

const ProfileBookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bookings" | "manage">("bookings");

  const handleTabClick = (tab: "bookings" | "manage") => {
    setActiveTab(tab);
  };

  return (
    <div className="col-12 col-lg-8 ps-lg-5">
      <div className="d-flex justify-content-between py-4 ">
        <h3 className={`secondary-font cursor-pointer fs-1rem-to-2rem profile-bookings-selector ${activeTab === "bookings" ? "profile-bookings-selector-active" : ""}`} onClick={() => handleTabClick("bookings")}>
          Upcoming bookings
        </h3>
        <h3 className={`secondary-font cursor-pointer fs-1rem-to-2rem profile-bookings-selector ${activeTab === "manage" ? "profile-bookings-selector-active" : ""}`} onClick={() => handleTabClick("manage")}>
          Manage venues
        </h3>
      </div>
      {activeTab === "bookings" && <ProfileBookingsUpcoming />}
      {activeTab === "manage" && <ProfileBookingsManaged />}
    </div>
  );
};

export default ProfileBookings;
