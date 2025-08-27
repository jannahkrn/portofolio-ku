import React from "react";
import { Briefcase, MapPin, Calendar, Star } from "lucide-react";

const ExperienceSection = () => {
  const orgExperiences = [
    {
      title: "Chairman of Publications and Documentation",
      organization: "PaMTKla",
      location: "Telkom University",
      period: "2025 - 2026",
      type: "Organisasi",
      description:
        "Responsible for leading the publications and documentation division, managing content creation, and documenting events for the organization.",
      skills: [
        "Content Management",
        "Public Relations",
        "Documentation",
        "Team Leadership",
      ],
      achievements: [
        "Managed social media content for all major events",
        "Supervised a team of 3 members to ensure event documentation",
        "Improved the organization's digital presence by 60%",
      ],
    },
    {
      title: "Liaison Officer",
      organization: "ONION 13URN",
      location: "Telkom University",
      period: "2025",
      type: "Organisasi",
      description:
        "Served as a liaison officer for the ONION 13URN event, coordinating between participants and event organizers to ensure a smooth and successful experience.",
      skills: [
        "Communication",
        "Event Coordination",
        "Problem Solving",
        "Interpersonal Skills",
      ],
      achievements: [
        "Facilitated communication for over 20 event participants",
        "Resolved participant inquiries and issues promptly",
        "Contributed to the positive atmosphere of the event",
      ],
    },
    {
      title: "Member of Digistar Club",
      organization: "Digistar Club",
      location: "Telkom University",
      period: "2025",
      type: "Organisasi",
      description:
        "Actively joined webinars and seminars organized by Digistar Club to broaden knowledge in digital technology, while building connections with peers and professionals.",
      skills: ["Digital Literacy", "Networking", "Lifelong Learning"],
      achievements: [
        "Regularly attended seminars on technology and innovation",
        "Expanded academic and professional network through club activities",
        "Gained new insights into trends in digital transformation",
      ],
    },
    {
      title: "Backend Developer",
      organization: "Chevalier Laboratory SAS",
      location: "Telkom University",
      period: "2024 - 2025",
      type: "Organisasi",
      description:
        "Developed and maintained the backend infrastructure for various projects within the laboratory. Focused on database management, API creation, and server-side logic.",
      skills: [
        "Backend Development",
        "Database Management",
        "Node.js",
        "REST API",
        "Laravel",
        "Php",
      ],
      achievements: [
        "Implemented new API endpoints for data-driven applications",
        "Optimized database queries to improve application performance",
        "Collaborated with the frontend team to integrate new features",
        "Complete the final project on time and well.",
      ],
    },
    {
      title: "Member of IoT",
      organization: "Chevalier Laboratory SAS",
      location: "Telkom University",
      period: "2024 - 2025",
      type: "Organisasi",
      description:
        "Studied IoT concepts and practices through modules provided by Chevalier Laboratory SAS, focusing on understanding system design, prototyping basics, and data utilization.",
      skills: [
        "IoT Fundamentals",
        "Self-Learning",
        "Digital Systems",
        "Analytical Thinking",
      ],
      achievements: [
        "Studied learning modules on IoT and smart devices",
        "Gained knowledge of sensor data collection and analysis",
        "Enhanced understanding of hardware and system integration concepts",
      ],
    },
    {
      title: "Public Relation and Service",
      organization: "Marketing Crew",
      location: "Telkom University",
      period: "2024 - 2025",
      type: "Organisasi",
      description:
        "Handled public relations and provided services to support marketing activities for various university events and programs.",
      skills: [
        "Public Speaking",
        "Communication",
        "Customer Service",
        "Event Support",
      ],
      achievements: [
        "Assisted in successful marketing campaigns for university events",
        "Maintained positive relationships with event participants and stakeholders",
        "Contributed to increasing event attendance by 65%",
      ],
    },
    {
      title: "Mosque Affairs Division",
      organization: "Kerohanian Islam",
      location: "SMA Negeri 1 Polanharjo",
      period: "2023 - 2024",
      type: "Organisasi",
      description:
        "Managed the day-to-day operations and activities of the mosque within the school, including event coordination and student religious programs.",
      skills: [
        "Event Coordination",
        "Community Service",
        "Administration",
        "Spiritual Guidance",
      ],
      achievements: [
        "Organized spiritual and educational events for students",
        "Managed mosque facilities and schedules efficiently",
        "Improved participation in religious activities among students",
      ],
    },
    {
      title: "Publication and Documentation Division",
      organization: "Majelis Perwakilan Kelas",
      location: "SMA Negeri 1 Polanharjo",
      period: "2021 - 2023",
      type: "Organisasi",
      description:
        "Responsible for all publication and documentation needs for school events and activities.",
      skills: [
        "Content Creation",
        "Photography",
        "Videography",
        "Event Documentation",
      ],
      achievements: [
        "Documented more than 50 school events",
        "Managed the school's official social media accounts",
        "Created engaging visual content for school publications",
      ],
    },
    {
      title: "Discipline Division",
      organization: "Kerohanian Islam",
      location: "SMA Negeri 1 Polanharjo",
      period: "2021 - 2022",
      type: "Organisasi",
      description:
        "Helped maintain a disciplined and orderly environment for the organization's members and activities.",
      skills: [
        "Conflict Resolution",
        "Rules Enforcement",
        "Teamwork",
        "Communication",
      ],
      achievements: [
        "Contributed to a more structured and disciplined organizational environment",
        "Assisted in the smooth execution of organizational events",
        "Resolved minor conflicts between members amicably",
      ],
    },
    {
      title: "Member of Computer Extracurricular Club",
      organization: "SMA Negeri 1 Polanharjo",
      location: "SMA Negeri 1 Polanharjo",
      period: "2021 - 2022",
      type: "Organisasi",
      description:
        "Engaged in various computer-related activities, including programming contests and technology workshops. Developed foundational skills in coding and problem-solving.",
      skills: ["Programming", "Problem Solving", "Teamwork", "Basic Coding"],
      achievements: [
        "Participated in local and regional programming competitions",
        "Helped organize a school-wide coding workshop",
        "Contributed to a group project on a simple website",
      ],
    },
  ];

  const experiences = [
    {
      title: "Information Technology Staff",
      company: "Solo Technopark",
      location: "Surakarta, Central Java, Indonesia",
      period: "Jun 2025 - August 2025",
      type: "Internship",
      description:
        "Contributed to the development of several web-based platforms, provided IT support, and assisted in ensuring reliable technical operations. Also involved in coordinating and supporting technology aspects for internal and external events.",
      skills: [
        "Web Development",
        "IT Support",
        "Network Administration",
        "Technical Troubleshooting",
        "Event Coordination",
        "UI/UX",
      ],
      achievements: [
        "Contributed to the development of multiple websites, including platforms for reservations and event management.",
        "Supported and coordinated technical aspects of the Solo Techno Digital Day event.",
        "Served as Technical Coordinator and Jury for the UI/UX Design Competition at Solo Techno Digital Day 2025.",
      ],
    },
    {
      title: "AI Trainer",
      company: "DataAnnotation",
      location: "New York, USA",
      period: "Mar 2025 - Present",
      type: "Freelance",
      description:
        "Responsible for training AI models to improve their performance and accuracy. My expertise includes AI Solutions, Generative AI, and AI-Driven Content.",
      skills: [
        "Artificial Intelligence (AI)",
        "AI Solutions",
        "Generative AI",
        "AI-Driven Content",
      ],
      achievements: [
        "Successfully trained multiple AI models with a high accuracy rate.",
        "Provided critical feedback to improve AI model performance.",
        "Contributed to the development of a more robust AI-driven content generation system.",
      ],
    },
    {
      title: "Business Development",
      company: "GAOTek Inc.",
      location: "Manhattan, New York, USA",
      period: "Mar 2025 - Jul 2025",
      type: "Internship",
      description:
        "Assisted the business development team in various tasks, including market research, email marketing, and B2B marketing strategies.",
      skills: [
        "Business Development",
        "Email Marketing",
        "B2B Marketing Strategy",
      ],
      achievements: [
        "Conducted market research that identified new business opportunities.",
        "Assisted in creating and optimizing email marketing campaigns.",
        "Contributed to the development of a new B2B marketing strategy.",
      ],
    },
    {
      title: "Web Design and Development",
      company: "TechnoHacks EduTech Official",
      location: "Remote",
      period: "Mar 2025 - May 2025",
      type: "Internship",
      description:
        "Gained hands-on experience in web design and development, focusing on UI/UX design and front-end implementation.",
      skills: ["Web Design", "Web Development", "UI/UX Designer"],
      achievements: [
        "Designed and developed a responsive website mock-up.",
        "Collaborated with the team to improve user interface designs.",
        "Completed a project that demonstrated proficiency in web development principles.",
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

                {/* Skills */}
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

                {/* Achievements */}
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and organizational involvement in
            technology, design, and leadership.
          </p>
        </div>

        {/* Work Experience */}
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

        {/* Organizational Experience */}
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
