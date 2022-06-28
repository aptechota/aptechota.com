import React from "react";
import { CourseBanner } from "../IntroBanner";

const courseAcronym = "Smart Pro";
const courseName = "Aptech Smart Professional Courses";

const SmartPro = () => {
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner courseAcronym={courseAcronym} courseName={courseName} />
    </div>
  );
};

export default SmartPro;
