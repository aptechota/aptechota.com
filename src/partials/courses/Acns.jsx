import React from 'react'
import { CourseBanner } from "../IntroBanner";

const courseAcronym = "ACNS";
const courseName = "Aptech Certified Network Specialist";

const Acns = () => {
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner courseAcronym={courseAcronym} courseName={courseName} />
    </div>
  );
}

export default Acns