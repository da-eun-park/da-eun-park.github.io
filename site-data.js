/*
  Edit this file to update your website.

  How to use:
  1. Replace the sample text below with your own information.
  2. If you do not need a section, leave its list empty, like this: []
  3. Save the file and commit it to GitHub.
  4. GitHub Pages will update the website after the change is published.

  Tip:
  - Keep quotation marks around text.
  - Put a comma after each item except the last item in a list.
*/

const SITE_DATA = {
  name: "Daeun Park",
  nameKorean: "박다은",
  siteTitle: "Daeun Park | About",

  title: "BA Student",
  affiliation: "Political Science and International Relations",

  // Optional. Add your own image file to assets/profile.jpg and change this to "assets/profile.jpg".
  photo: "assets/daenpark_profile.jpg",

  contact: {
    email: "diana31717@gmail.com",
    location: "Seoul, South Korea"
  },

  links: [
    { label: "GitHub", url: "https://github.com/da-eun-park" },
    { label: "CV PDF", url: "files/Da_Eun_Park_CV.pdf" },
    { label: "Google Scholar", url: "" },
    { label: "LinkedIn", url: "www.linkedin.com/in/daeun-park-polisci" }
  ],

  bio: [
    "I am a BA student at Sogang University, interested in political science, international relations, and social-scientific approaches to political questions.",
    "My current interests include International Politics, International Security, American Politics, and Quantitative methods."
  ],

  news: [
    { date: "2025.11", text: "Participate as a presenter of Fall Sogang International Politics meeting" }
  ],

  researchInterests: [
    "International Relations",
    "Intenational Security",
    "American Politics",
    "Quantitative Methods"
  ],

  research: [
    {
      title: "The Influence of Domestic Factors on the Decision to Go to War",
      meta: "Term paper", #working project / term paper / thesis idea",
      description: "Write two to three sentences describing the research question, data, method, and expected contribution.",
      links: [
        { label: "Draft", url: "" },
        { label: "Code", url: "" }
      ]
    }
  ],

  #publications: [
    #{
      #title: "None",
      #authors: "Daeun Park",
      #venue: "Working paper, 2026",
      #note: "Optional short note, such as under review, presented at conference, or selected as course paper.",
      #links: [
        #{ label: "PDF", url: "" }
      #]
    #}
  #],

  education: [
    #{
      degree: "M.A., Political Science",
      institution: "Sogang University",
      period: "2027.3 - Present",
      #details: [
        #"Advisor: Professor Name",
        #"Relevant coursework: International Relations, American Politics, Quantitative Methods in Political Science I"
      #]
    #},
    {
      degree: "B.A., Political Science",
      institution: "Sogang University",
      period: "2023.3 - 2027.2",
      details: [
        #"Advisor: Professor Name",
        "Relevant coursework: International Relations, American Politics, Quantitative Methods in Political Science I"
      ]
    }
  ],

  experience: [
    {
      role: "Department Assistant",
      organization: Political Science Department#"Lab / Center / Professor",
      period: "2025.09 - Present",
      #details: [
        #"Describe your work in one sentence.",
        #"Add another bullet if needed."
      #]
    }
  ],

  #teaching: [
    #{
      #role: "Teaching Assistant",
      #course: "Course Name",
      #period: "Semester",
      #details: [
        #"Led discussion sections, graded assignments, or held office hours."
      #]
    #}
  #],

  honors: [
    {
      title: "Junior BK Fellowship",
      organization: "National Research Foundation of Korea(NRF) - Sogang Univ.",
      period: "2026",
      #details: "Optional one-line explanation."
    }
  ],

  #service: [
    #{
      #title: "Conference / Journal / Student Organization",
      #role: "Reviewer / Organizer / Member",
      #period: "YYYY",
      #details: "Optional one-line explanation."
    #}
  #],

  lastUpdated: "June 2026"
};
