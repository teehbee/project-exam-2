import { useState, useEffect } from "react";
import { ProfileBookingsUpcoming, ProfileBookingsManaged } from "./";
import { ProfileData } from "../api/interfaces";

// section for managing bookings is set to bookings default

interface ProfileHeaderProps {
  profileData: ProfileData;
}

const ProfileBookings: React.FC<ProfileHeaderProps> = ({ profileData }) => {
  // initialize with stored open tab between manage and bookings
  const storedTab = localStorage.getItem("activeTab") as "bookings" | "manage" | null;
  const [activeTab, setActiveTab] = useState<"bookings" | "manage">(storedTab || "bookings");

  // set active tab
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  });

  if (!profileData || !profileData.data) {
    return null;
  }

  const managedVenues = profileData.data.venues;

  // find current date

  const currentDate = new Date();

  // filter through venues to only show upcoming stays
  // sort through displayed bookings to show first upcoming stay first
  const upComingBookings = profileData.data.bookings.filter((booking) => new Date(booking.dateFrom) > currentDate).sort((a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime());

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
      {activeTab === "bookings" && <div>{upComingBookings.length > 0 ? upComingBookings.map((booking, index) => <ProfileBookingsUpcoming key={index} booking={booking} />) : <p>No upcoming bookings</p>}</div>}
      {activeTab === "manage" && <div>{managedVenues.length > 0 ? managedVenues.map((venue, index) => <ProfileBookingsManaged key={index} venue={venue} />) : <p>No upcoming bookings</p>}</div>}
    </div>
  );
};

export default ProfileBookings;
