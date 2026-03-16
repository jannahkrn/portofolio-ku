import React from "react";
import { Briefcase, MapPin, Calendar, Star } from "lucide-react";

const ExperienceSection = () => {
  const orgExperiences = [
    {
      title: "Secretary & Treasurer | Front-End Developer",
      organization: "IEEE Telkom University Student Branch (IT Division)",
      location: "Telkom University",
      period: "Jan 2026 - Present",
      type: "Organisasi",
      description:
        "Managing organizational administration, finances, and developing the digital platform for the IT division.",
      skills: ["Administration", "Finance", "Front-End Development", "Collaboration"],
      achievements: [
        "Managed organizational administration and finances as Secretary and Treasurer.",
        "Developed and maintained the IT division's digital platform as a Front-End Developer.",
        "Collaborated with the team in designing technology solutions for organizational needs.",
      ],
    },
    {
      title: "Event Staff",
      organization: "GenBIZ (GenBI Business & Innovation Zone)",
      location: "Telkom University",
      period: "Jan 2026 - Present",
      type: "Organisasi",
      description:
        "Coordinating and executing events focused on business and innovation.",
      skills: ["Event Planning", "Coordination", "Public Speaking"],
      achievements: [
        "Assisted in organizing the GenBIZ program which focuses on business and innovation.",
        "Coordinated with the team in planning and executing event activities.",
        "Served as a Master of Ceremony for events.",
      ],
    },
    {
      title: "Internal Department Member",
      organization: "GenBI Telkom University",
      location: "Telkom University",
      period: "Nov 2025 - Present",
      type: "Organisasi",
      description:
        "Managing internal coordination, execution of programs, and maintaining organizational communication.",
      skills: ["Administration", "Communication", "Documentation", "Teamwork"],
      achievements: [
        "Assisted in managing internal coordination, administrative tasks, and member relations.",
        "Supported the execution of internal programs, meetings, and collaborative initiatives.",
        "Helped maintain communication workflows between departments to ensure smooth organizational activities.",
        "Contributed to documentation, reporting, and the preparation of internal materials.",
      ],
    },
    {
      title: "Vice Coordinator",
      organization: "Chevalier Laboratory SAS",
      location: "Telkom University",
      period: "Sep 2025 - Present",
      type: "Organisasi",
      description:
        "Coordinating team activities and supporting the primary coordinator to ensure smooth division workflows.",
      skills: ["Leadership", "Project Management", "Communication", "Mentoring"],
      achievements: [
        "Responsible for coordinating team activities and supporting the primary coordinator.",
        "Ensured smooth workflows by assisting in planning, organizing, and monitoring division projects.",
        "Provided direction and support to members, especially during tight deadlines or high-pressure tasks.",
        "Facilitated communication between the coordinator, members, and other divisions.",
      ],
    },
    {
      title: "Chairman of Publications and Documentation",
      organization: "Mudik Roadshow 2026 PaMTKla",
      location: "Telkom University",
      period: "Oct 2025 - Present",
      type: "Organisasi",
      description:
        "Leading the publication and documentation team to design content strategies and accurately document events.",
      skills: ["Leadership", "Content Strategy", "Documentation", "Public Relations"],
      achievements: [
        "Led the publication and documentation team for the Mudik Roadshow 2026 event.",
        "Designed content strategies and ensured all activities were well-documented.",
        "Coordinated with external parties for the smooth distribution of event information.",
      ],
    },
    {
      title: "Liaison Officer",
      organization: "ONION 13URN 2025",
      location: "Telkom University",
      period: "Jun 2025 - Nov 2025",
      type: "Organisasi",
      description:
        "Facilitated communication with participants and contributed to a positive event atmosphere.",
      skills: ["Communication", "Event Coordination", "Problem Solving", "Customer Service"],
      achievements: [
        "Facilitated communication for over 20 event participants.",
        "Resolved participant inquiries and issues promptly and accurately.",
        "Contributed to creating a positive and conducive event atmosphere.",
      ],
    },
    {
      title: "Chairman of Publications and Documentation",
      organization: "PaMTKla",
      location: "Telkom University",
      period: "Jul 2025 - Present",
      type: "Organisasi",
      description:
        "Managing the organization's social media and documenting major events.",
      skills: ["Social Media Management", "Team Leadership", "Digital Presence", "Content Creation"],
      achievements: [
        "Managed social media content for all major organizational events.",
        "Supervised a 3-member team to ensure the smooth documentation of events.",
        "Increased the organization's digital presence up to 80%.",
      ],
    },
    {
      title: "Member of IoT Division",
      organization: "Chevalier Laboratory SAS",
      location: "Telkom University",
      period: "Feb 2025 - Jul 2025",
      type: "Organisasi",
      description:
        "Studying IoT modules to gain knowledge in system integration and sensor data analysis.",
      skills: ["Internet of Things", "Data Analysis", "Hardware Integration", "Self-Learning"],
      achievements: [
        "Studied learning modules related to IoT and smart devices.",
        "Gained knowledge about sensor data collection and analysis.",
        "Improved understanding regarding the concept of hardware and system integration.",
      ],
    },
    {
      title: "Backend Developer",
      organization: "Chevalier Laboratory SAS",
      location: "Telkom University",
      period: "Nov 2024 - Aug 2025",
      type: "Organisasi",
      description:
        "Developing backend applications with a focus on database optimization and API integration.",
      skills: ["Backend Development", "API Design", "Database Optimization", "Collaboration"],
      achievements: [
        "Implemented new API endpoints to support data-driven applications.",
        "Optimized database queries to improve application performance.",
        "Collaborated with the frontend team to integrate new features.",
        "Completed the final project on time and with good results.",
      ],
    },
    {
      title: "Public Relation and Service",
      organization: "Marketing Crew Telkom University",
      location: "Telkom University",
      period: "Nov 2024 - Jan 2026",
      type: "Organisasi",
      description:
        "Handled public relations and customer service to participants during the event.",
      skills: ["Public Relations", "Public Speaking", "Relationship Building", "Marketing"],
      achievements: [
        "Facilitated communication and provided service to over 20 event participants.",
        "Handled participant inquiries and issues promptly and accurately.",
        "Contributed to creating a positive and conducive event atmosphere.",
      ],
    },
    {
      title: "Publication and Documentation",
      organization: "Student Representative Council",
      location: "SMA Negeri 1 Polanharjo",
      period: "2021 - 2023",
      type: "Organisasi",
      description:
        "Managing publications and documenting events for the school.",
      skills: ["Content Creation", "Photography", "Videography", "Event Documentation"],
      achievements: [
        "Managed the publication of school activity content through various information media.",
        "Documented all school events, including photos and videos, to ensure information is conveyed effectively.",
        "Collaborated with various parties to ensure publications ran effectively and on time.",
        "Created engaging and informative publication materials to improve student engagement.",
      ],
    },
  ];

  const experiences = [
    {
      title: "Practicum Assistant of Database System 1",
      company: "Faculty of Applied Science, Telkom University",
      location: "Bandung, Indonesia",
      period: "Feb 2026 - Present",
      type: "Part Time",
      description:
        "Assisting lecturers in delivering database and SQL material during practicum sessions. Guiding students in using MySQL and managing relational databases.",
      skills: ["MySQL", "Relational Database", "SQL", "Teaching", "Problem Solving"],
      achievements: [
        "Assisted lecturers in delivering database and SQL material during practicum sessions.",
        "Guided students in using MySQL and managing relational databases.",
        "Prepared practice exercises, graded assignments, and ensured consistent assessment standards.",
        "Handled technical issues during practicums to ensure smooth execution.",
      ],
    },
    {
      title: "Practicum Assistant of Data Structure Implementation",
      company: "Faculty of Applied Science, Telkom University",
      location: "Bandung, Indonesia",
      period: "Feb 2026 - Present",
      type: "Part Time",
      description:
        "Assisting D3 Software Engineering Application students in understanding data structure concepts and implementation. Managing practicum sessions and ensuring students follow the learning flow well.",
      skills: ["Data Structures", "Teaching", "Mentoring"],
      achievements: [
        "Assisted students in understanding data structure concepts and implementation.",
        "Managed practicum sessions and ensured students followed the learning flow well.",
        "Evaluated assignments and maintained consistent assessment standards.",
      ],
    },
    {
      title: "Practicum Assistant of Web-Based Programming 1",
      company: "Faculty of Applied Science, Telkom University",
      location: "Bandung, Indonesia",
      period: "Sep 2025 - Feb 2026",
      type: "Part Time",
      description:
        "Guiding D3 Software Engineering Application students in web development using HTML, CSS, and JavaScript. Helping to resolve errors and explaining core concepts in web programming.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development", "Teaching"],
      achievements: [
        "Guided students in web development using HTML, CSS, and JavaScript.",
        "Helped resolve errors and explained core concepts in web programming.",
        "Coordinated with lecturers and laboratory team to deliver learning materials and tools.",
        "Evaluated student assignments while maintaining quality and assessment consistency.",
      ],
    },
    {
      title: "Practicum Assistant of Interface Design Tools",
      company: "Faculty of Applied Science, Telkom University",
      location: "Bandung, Indonesia",
      period: "Sep 2025 - Feb 2026",
      type: "Part Time",
      description:
        "Supporting D3 Software Engineering Application students in learning UI/UX design tools. Providing constructive feedback regarding design principles, layout, and usability aspects.",
      skills: ["UI/UX Design", "Teaching", "Figma", "Design Principles"],
      achievements: [
        "Supported students in learning UI/UX design tools.",
        "Provided constructive feedback regarding design principles, layout, and usability aspects.",
        "Assisted lecturers in delivering practicum modules and demonstration materials.",
        "Managed practicum sessions and ensured students followed the learning flow.",
      ],
    },
    {
      title: "Practicum Assistant of Interactive Web Programming 1",
      company: "Faculty of Applied Science, Telkom University",
      location: "Bandung, Indonesia",
      period: "Sep 2025 - Feb 2026",
      type: "Part Time",
      description:
        "Guiding D4 Multimedia Engineering Technology students in hands-on practice with HTML, CSS, and JavaScript.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development", "Teaching"],
      achievements: [
        "Guided students in hands-on practice with HTML, CSS, and JavaScript.",
        "Assisted students in understanding the basic concepts of interactive web development and resolving errors.",
      ],
    },
    {
      title: "Practicum Assistant of Database System",
      company: "Faculty of Applied Science, Telkom University",
      location: "Bandung, Indonesia",
      period: "Mar 2025 - May 2025",
      type: "Part Time",
      description:
        "Guiding D4 Multimedia Engineering Technology students in database development and management using MySQL.",
      skills: ["MySQL", "Database Management", "SQL", "Teaching"],
      achievements: [
        "Guided students in database development.",
        "Assisted students in database and SQL management practicum sessions.",
        "Guided the use of MySQL for data management needs in a multimedia context.",
        "Evaluated and provided feedback on student practicum assignments.",
      ],
    },
    {
      title: "AI Trainer",
      company: "DataAnnotation",
      location: "Remote",
      period: "Mar 2025 - Present",
      type: "Freelance",
      description:
        "Responsible for training AI models to improve their performance and accuracy.",
      skills: ["Artificial Intelligence", "Generative AI", "AI-Driven Content"],
      achievements: [
        "Successfully trained multiple AI models with a high accuracy rate.",
        "Provided critical feedback to improve AI model performance and output.",
        "Contributed to the development of a more robust and reliable AI-driven content generation system.",
      ],
    },
    {
      title: "Information Technology Staff",
      company: "Solo Technopark",
      location: "Surakarta, Central Java, Indonesia",
      period: "Jun 2025 - Aug 2025",
      type: "Internship",
      description:
        "Contributed to web development and managed technical coordination for Solo Techno Digital Day.",
      skills: ["IT Support", "Event Coordination", "Web Development", "UI/UX"],
      achievements: [
        "Contributed to the development of several websites, including reservation and event management platforms.",
        "Supported and coordinated technical aspects of the Solo Techno Digital Day event.",
        "Served as Technical Coordinator and Jury for the UI/UX Design Competition at Solo Techno Digital Day 2025.",
      ],
    },
    {
      title: "Business Development Intern",
      company: "GAOTek Inc.",
      location: "Manhattan, New York, USA",
      period: "Mar 2025 - May 2025",
      type: "Internship",
      description:
        "Assisted the business development team in various tasks, including market research, email marketing, and B2B marketing strategies.",
      skills: ["Business Development", "Email Marketing", "B2B Marketing Strategy"],
      achievements: [
        "Conducted market research that successfully identified new business opportunities.",
        "Assisted in creating and optimizing email marketing campaigns.",
        "Contributed to the development of a new B2B marketing strategy.",
      ],
    },
    {
      title: "Web Design and Development Intern",
      company: "TechnoHacks EduTech Official",
      location: "Remote",
      period: "Mar 2025 - May 2025",
      type: "Internship",
      description:
        "Attended seminars and expanded academic and professional networks, gaining insights into digital transformation trends.",
      skills: ["Web Design", "Web Development", "UI/UX Designer"],
      achievements: [
        "Regularly attended seminars on technology and innovation.",
        "Expanded academic and professional networks through extracurricular activities.",
        "Gained new insights into trends in digital transformation.",
      ],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Full Time":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "Part Time":
        return "bg-violet-50 text-violet-600 border-violet-200";
      case "Freelance":
        return "bg-purple-50 text-purple-600 border-purple-200";
      case "Internship":
        return "bg-rose-50 text-rose-600 border-rose-200";
      case "Organisasi":
        return "bg-purple-50 text-purple-600 border-purple-200";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  const renderExperienceCard = (exp, index, isOrganizational = false) => (
    <div key={index} className="relative">
      <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 to-transparent"></div>
      <div className="text-left flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex-shrink-0">
          <div className="bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-2">
            {exp.period}
          </div>
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
              exp.type
            )} ml-2`}
          >
            {exp.type}
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="bg-violet-50 p-6 rounded-lg border border-violet-100 hover:border-violet-200 transition-all group shadow-sm hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-violet-100 rounded-lg group-hover:bg-violet-200 transition-colors">
                <Briefcase className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-violet-600">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
                <h4 className="text-violet-400 font-medium mb-3 flex items-center">
                  {isOrganizational ? exp.organization : exp.company}
                  <Calendar className="w-4 h-4 ml-2 mr-1" />
                  <span className="text-slate-500 text-sm">{exp.period}</span>
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.skills.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-slate-500 mb-2">
                      {isOrganizational ? "Skills:" : "Tech Stack:"}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-100 text-xs rounded-full text-purple-600 hover:bg-purple-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {exp.achievements.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-rose-400 mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-slate-600 text-sm flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-rose-300 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My professional journey and organizational involvement in
            technology, design, and leadership.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left text-violet-600">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) =>
              renderExperienceCard(exp, index, false)
            )}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left text-violet-600">
            Organizational Experience
          </h2>
          <div className="space-y-8">
            {orgExperiences.map((exp, index) =>
              renderExperienceCard(exp, index, true)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
