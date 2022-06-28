import React from "react";
import { CourseBanner } from "../IntroBanner";

const courseAcronym = "ADSE";
const courseName = "Advanced Diploma in Software Engineering";
const Adse = () => {
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner courseAcronym={courseAcronym} courseName={courseName} />
    </div>
  );
};

export default Adse;
