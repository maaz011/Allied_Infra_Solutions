// import { ProjectType } from '../types/ProjectType';
// import  from "@/assets/logo.png"

// export const projects: ProjectType[] = [
//   {
//     id: 1,
//     title: "Titan Steel Manufacturing Plant",
//     location: "Pune, Maharashtra",
//     description: "Construction of a 50,000 sq.ft manufacturing facility with heavy-duty foundation and high-load steel framework.",
//     status: "75% completed",
//     image: "/35.jpg",
//     completionPercentage: 75
//   },
//   {
//     id: 2,
//     title: "LogiPark Industrial Leasing Hub",
//     location: "Ahmedabad, Gujarat",
//     description: "100-acre industrial park offering modular warehouse spaces for lease.",
//     status: "Leasing in progress",
//     image: "/36.jpg",
//     completionPercentage: 90
//   },
//   {
//     id: 3,
//     title: "MetroLink Rail Maintenance Yard",
//     location: "Nagpur, Maharashtra",
//     description: "Industrial shed with embedded rail tracks for metro maintenance vehicles.",
//     status: "Under construction",
//     image: "/2.jpg",
//     completionPercentage: 45
//   },
//   {
//     id: 4,
//     title: "GreenPort Logistics Center",
//     location: "Jaipur, Rajasthan",
//     description: "Development of eco-friendly warehouse with solar roofing and rainwater harvesting.",
//     status: "Phase 1 completed",
//     image: "/29.jpg",
//     completionPercentage: 35
//   },
//   {
//     id: 5,
//     title: "SteelCore Fabrication Unit",
//     location: "Ludhiana, Punjab",
//     description: "Turnkey construction of fabrication facility with overhead crane integration.",
//     status: "Nearing completion",
//     image: "/38.jpg",
//     completionPercentage: 85
//   },
//   {
//     id: 6,
//     title: "InduLease Heavy Equipment Rental Depot",
//     location: "Surat, Gujarat",
//     description: "Rental facility for construction machinery with digital inventory system.",
//     status: "Operational",
//     image: "/18.jpg",
//     completionPercentage: 100
//   },
//   {
//     id: 7,
//     title: "Eastway Industrial Estate Expansion",
//     location: "Faridabad, Haryana",
//     description: "Expansion of existing estate with new access roads, fencing, and utility setup.",
//     status: "Ongoing",
//     image: "/16.jpg",
//     completionPercentage: 60
//   }
// ];
import { ProjectType } from '../types/ProjectType';

// Import images
import img35 from "@/assets/35.jpg";
import img36 from "@/assets/36.jpg";
import img2 from "@/assets/2.jpg";
import img29 from "@/assets/29.jpg";
import img38 from "@/assets/38.jpg";
import img18 from "@/assets/18.jpg";
import img16 from "@/assets/16.jpg";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Titan Steel Manufacturing Plant",
    location: "Pune, Maharashtra",
    description: "Construction of a 50,000 sq.ft manufacturing facility with heavy-duty foundation and high-load steel framework.",
    status: "75% completed",
    image: img35,
    completionPercentage: 75
  },
  {
    id: 2,
    title: "LogiPark Industrial Leasing Hub",
    location: "Ahmedabad, Gujarat",
    description: "100-acre industrial park offering modular warehouse spaces for lease.",
    status: "Leasing in progress",
    image: img36,
    completionPercentage: 90
  },
  {
    id: 3,
    title: "MetroLink Rail Maintenance Yard",
    location: "Nagpur, Maharashtra",
    description: "Industrial shed with embedded rail tracks for metro maintenance vehicles.",
    status: "Under construction",
    image: img2,
    completionPercentage: 45
  },
  {
    id: 4,
    title: "GreenPort Logistics Center",
    location: "Jaipur, Rajasthan",
    description: "Development of eco-friendly warehouse with solar roofing and rainwater harvesting.",
    status: "Phase 1 completed",
    image: img29,
    completionPercentage: 35
  },
  {
    id: 5,
    title: "SteelCore Fabrication Unit",
    location: "Ludhiana, Punjab",
    description: "Turnkey construction of fabrication facility with overhead crane integration.",
    status: "Nearing completion",
    image: img38,
    completionPercentage: 85
  },
  {
    id: 6,
    title: "InduLease Heavy Equipment Rental Depot",
    location: "Surat, Gujarat",
    description: "Rental facility for construction machinery with digital inventory system.",
    status: "Operational",
    image: img18,
    completionPercentage: 100
  },
  {
    id: 7,
    title: "Eastway Industrial Estate Expansion",
    location: "Faridabad, Haryana",
    description: "Expansion of existing estate with new access roads, fencing, and utility setup.",
    status: "Ongoing",
    image: img16,
    completionPercentage: 60
  }
];