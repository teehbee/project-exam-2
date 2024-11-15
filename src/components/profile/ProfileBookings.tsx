import { useState } from "react";
import { ProfileBookingsUpcoming, ProfileBookingsManaged } from "./";
import { ProfileData as ProfileDataType } from "../api/interfaces";

// section for managing bookings is set to bookings default

interface ProfileHeaderProps {
  profileData: ProfileDataType;
}

const ProfileBookings: React.FC<ProfileHeaderProps> = ({ profileData }) => {
  const [activeTab, setActiveTab] = useState<"bookings" | "manage">("bookings");

  if (!profileData || !profileData.data) {
    return null;
  }

  console.log("profile booking data", profileData.data.venueManager);

  const bookings = profileData.data.bookings;

  const handleTabClick = (tab: "bookings" | "manage") => {
    setActiveTab(tab);
  };

  return (
    <div className="col-12 col-lg-8 ps-lg-5">
      <div className="d-flex justify-content-between py-4 ">
        <h3 className={`secondary-font cursor-pointer fs-1rem-to-2rem profile-bookings-selector ${activeTab === "bookings" ? "profile-bookings-selector-active" : ""}`} onClick={() => handleTabClick("bookings")}>
          Upcoming bookings
        </h3>
        {profileData.data.venueManager && (
          <h3 className={`secondary-font cursor-pointer fs-1rem-to-2rem profile-bookings-selector ${activeTab === "manage" ? "profile-bookings-selector-active" : ""}`} onClick={() => handleTabClick("manage")}>
            Manage venues
          </h3>
        )}
      </div>
      {activeTab === "bookings" && <div>{bookings.length > 0 ? bookings.map((booking, index) => <ProfileBookingsUpcoming key={index} booking={booking} />) : <p>No upcoming bookings</p>}</div>}
      {activeTab === "manage" && <ProfileBookingsManaged />}
    </div>
  );
};

export default ProfileBookings;
