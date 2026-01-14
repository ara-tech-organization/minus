import React from "react";
import styles from "./ClinicLocations.module.css";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    title: "Chennai",
    address:
      "Anugraha, Ground Floor, New No.51, Old No.19, A Block, Unnamar Gandhi Salai, Nungambakkam",
    landmark: "Near Taj Coromandel",
    phone: "+91 94403 34567",
    email: "chennai@minusclinic.com",
  },
  {
    title: "Coimbatore",
    address:
      "14, East Arasanpalyam Road, RS Puram, Coimbatore, Tamil Nadu - 641002",
    landmark: "Near Annapoorna",
    phone: "+91 98765 43210",
    email: "coimbatore@minusclinic.com",
  },
  {
    title: "Gachibowli",
    address:
      "2nd Floor, Fantasy Square, Old Mumbai Hwy, Gachibowli, Hyderabad - 500032",
    landmark: "Opposite IKEA",
    phone: "+91 91234 56789",
    email: "hyderabad@minusclinic.com",
  },
  {
    title: "Kodambakkam",
    address: "No. 15, Arcot Road, Trustpuram, Kodambakkam, Chennai - 600024",
    landmark: "Near Liberty Theatre",
    phone: "+91 99887 76655",
    email: "kodambakkam@minusclinic.com",
  },
  {
    title: "Velachery",
    address:
      "45, 100 Feet Bypass Road, Velachery, Chennai, Tamil Nadu - 600042",
    landmark: "Near Phoenix Marketcity",
    phone: "+91 95544 33221",
    email: "velachery@minusclinic.com",
  },
];

const ClinicLocations = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.visitText}>VISIT US</p>
      <h2 className={styles.heading}>Our Clinic Locations</h2>

      <div className={styles.grid}>
        {locations.map((loc, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <Building2 size={18} className={styles.icon} />
              <h3>{loc.title}</h3>
            </div>

            <div className={styles.infoRow}>
              <MapPin size={15} className={styles.subIcon} />
              <p>{loc.address}</p>
            </div>

            <p className={styles.landmark}>LANDMARK: {loc.landmark}</p>

            <div className={styles.infoRow}>
              <Phone size={15} className={styles.subIcon} />
              <p>{loc.phone}</p>
            </div>

            <div className={styles.infoRow}>
              <Mail size={15} className={styles.subIcon} />
              <p>{loc.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicLocations;
