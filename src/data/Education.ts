import { DetailsType, EducationDetailsType, navItemsType } from "@/types";

export const EducationList: EducationDetailsType[] = [
  {
    date: "2021-2025",
    title: "B.Tech In IT",
    details: "I am a 3rd Year B.Tech student of Jalpaiguri Government Engineering College(Autonomous) in Information Technology Department.I got 8.50 YGPA till 4th sem.",
    isReverse: false
  },
  {
    date: "2018-2020",
    title: "Higher Secondary",
    details: "I have done my Higher Secondary Education at Bishnupur High School affiliated to West Bengal Council of Higher Secondary Education with 456 out of 500 marks in the year of 2020",
    isReverse: true
  },
  {
    date: "2013-2018",
    title: "Secondary",
    details: "I have done my Secondary Education at Maniklal Singha Smrity Madhayamik Vidyalaya affiliated to West Bengal Council of Higher Secondary Education with 643 out of 700 marks in the year of 2018",
    isReverse: false
  }
]

export const PersonalDetails: DetailsType[] = [
  {
    key: "Date of Birth",
    value: "01/03/2002"
  },
  {
    key: "City",
    value: "Bishnupur"
  },
  {
    key: "Email",
    value: "swadeshpal2002@gmail.com"
  },
  {
    key: "Phone No",
    value: "8436893969"
  },
]

export const CodingProfiles: navItemsType[] = [
  {
    name: "LeetCode",
    path: "https://leetcode.com/Swadeshit27/"
  },
  {
    name: "CodeStudio",
    path: "https://www.codingninjas.com/studio/profile/Swadesh27"
  },
  {
    name: "GeeksForGeeks",
    path: "https://auth.geeksforgeeks.org/user/swadesh27"
  },
  {
    name: "CodeForces",
    path: "https://codeforces.com/profile/Swadesh27"
  },
  {
    name: "CodeChef",
    path: "https://www.codechef.com/users/swadesh27"
  },

]