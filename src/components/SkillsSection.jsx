import React, { useState } from "react";
import {
  Monitor,
  Database,
  Smartphone,
  Palette,
  TrendingUp,
  Settings,
} from "lucide-react";
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiReactrouter,
  SiFlutter,
  SiIonic,
  SiFirebase,
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiProtonmail,
  SiGoogleanalytics,
  SiFacebook,
  SiGmail,
  SiGithub,
  SiDocker,
  SiAwsamplify,
  SiNetlify,
  SiLinux,
  SiGithubactions,
} from "react-icons/si";
import PhotoshopLogo from "../assets/skill-logos/photoshop.svg";
import IllustratorLogo from "../assets/skill-logos/illustrator.svg";
import XdLogo from "../assets/skill-logos/xd.svg";
import NotionLogo from "../assets/skill-logos/notion.png";
import PostmanLogo from "../assets/skill-logos/postman.png";
import VscodeLogo from "../assets/skill-logos/vscode.png";
import CanvaLogo from "../assets/skill-logos/canva.png";
import FigmaLogo from "../assets/skill-logos/figma.png";
import WordLogo from "../assets/skill-logos/word.png";
import ExcelLogo from "../assets/skill-logos/excel.png";
import PowerpointLogo from "../assets/skill-logos/powerpoint.png";
import MeetLogo from "../assets/skill-logos/meet.png";
import TeamsLogo from "../assets/skill-logos/teams.png";

const SkillsSection = () => {
  // Skill logo mapping (replace with actual logo imports or emoji for demo)
  const skillLogos = {
    "React.js": <SiReact className="text-sky-500" />,
    "Vue.js": <SiVuedotjs className="text-green-500" />,
    "JavaScript (ES6+)": <SiJavascript className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    "HTML5 & CSS3": (
      <span>
        <SiHtml5 className="text-orange-500 inline" />{" "}
        <SiCss3 className="text-blue-500 inline ml-1" />
      </span>
    ),
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    "Node.js": <SiNodedotjs className="text-green-600" />,
    "Express.js": <SiExpress className="text-gray-700" />,
    Python: <SiPython className="text-yellow-500" />,
    PHP: <SiPhp className="text-indigo-500" />,
    MongoDB: <SiMongodb className="text-green-700" />,
    MySQL: <SiMysql className="text-blue-600" />,
    "React Native": <SiReact className="text-sky-500" />,
    Flutter: <SiFlutter className="text-blue-400" />,
    Ionic: <SiIonic className="text-blue-500" />,
    Firebase: <SiFirebase className="text-yellow-400" />,
    "App Store Deploy": <SiReactrouter className="text-pink-500" />,
    Figma: <img src={FigmaLogo} alt="Figma" className="w-8 h-8 inline" />,
    "Adobe XD": <img src={XdLogo} alt="Adobe XD" className="w-8 h-8 inline" />,
    Sketch: <SiSketch className="text-yellow-400" />,
    "Adobe Photoshop": (
      <img
        src={PhotoshopLogo}
        alt="Adobe Photoshop"
        className="w-8 h-8 inline"
      />
    ),
    "Adobe Illustrator": (
      <img
        src={IllustratorLogo}
        alt="Adobe Illustrator"
        className="w-8 h-8 inline"
      />
    ),
    Prototyping: <SiProtonmail className="text-purple-500" />,
    "SEO/SEM": <SiGoogleanalytics className="text-yellow-500" />,
    "Google Analytics": <SiGoogleanalytics className="text-yellow-500" />,
    "Social Media Marketing": <SiFacebook className="text-blue-600" />,
    "Content Strategy": <SiGmail className="text-red-500" />,
    "Facebook Ads": <SiFacebook className="text-blue-600" />,
    "Email Marketing": <SiGmail className="text-red-500" />,
    "Git & GitHub": <SiGithub className="text-gray-800" />,
    Docker: <SiDocker className="text-blue-400" />,
    AWS: <SiAwsamplify className="text-yellow-500" />,
    "Netlify/Vercel": <SiNetlify className="text-green-400" />,
    "CI/CD": <SiGithubactions className="text-blue-500" />,
    Linux: <SiLinux className="text-black" />,
    Notion: <img src={NotionLogo} alt="Notion" className="w-8 h-8 inline" />,
    Postman: <img src={PostmanLogo} alt="Postman" className="w-8 h-8 inline" />,
    "VS Code": (
      <img src={VscodeLogo} alt="VS Code" className="w-8 h-8 inline" />
    ),
    Canva: <img src={CanvaLogo} alt="Canva" className="w-8 h-8 inline" />,
    Word: WordLogo ? (
      <img src={WordLogo} alt="Word" className="w-8 h-8 inline" />
    ) : (
      "📝"
    ),
    Excel: (
      <img
        src={ExcelLogo}
        alt="Excel"
        style={{
          width: 48,
          height: 48,
          objectFit: "contain",
          backgroundColor: "transparent",
        }}
        className="inline"
      />
    ),
    PowerPoint: (
      <img
        src={PowerpointLogo}
        alt="PowerPoint"
        style={{
          width: 50,
          height: 50,
          objectFit: "contain",
          backgroundColor: "transparent",
        }}
        className="inline"
      />
    ),
    "Google Meet": (
      <img
        src={MeetLogo}
        alt="Google Meet"
        style={{
          width: 32,
          height: 32,
          objectFit: "contain",
          backgroundColor: "transparent",
        }}
        className="inline"
      />
    ),
    "Microsoft Teams": (
      <img
        src={TeamsLogo}
        alt="Microsoft Teams"
        style={{
          width: 32,
          height: 32,
          objectFit: "contain",
          backgroundColor: "transparent",
        }}
        className="inline"
      />
    ),
    Notion: <img src={NotionLogo} alt="Notion" className="w-8 h-8 inline" />,
    Postman: <img src={PostmanLogo} alt="Postman" className="w-8 h-8 inline" />,
    "VS Code": (
      <img src={VscodeLogo} alt="VS Code" className="w-8 h-8 inline" />
    ),
    Canva: <img src={CanvaLogo} alt="Canva" className="w-8 h-8 inline" />,
  };

  const tools = [
    { name: "Git & GitHub", icon: skillLogos["Git & GitHub"] },
    { name: "Docker", icon: skillLogos["Docker"] },
    { name: "AWS", icon: skillLogos["AWS"] },
    { name: "Netlify/Vercel", icon: skillLogos["Netlify/Vercel"] },
    { name: "CI/CD", icon: skillLogos["CI/CD"] },
    { name: "Linux", icon: skillLogos["Linux"] },
    { name: "VS Code", icon: skillLogos["VS Code"] },
    { name: "Postman", icon: skillLogos["Postman"] },
    { name: "Chrome DevTools", icon: "🔍" },
    { name: "Notion", icon: skillLogos["Notion"] },
    { name: "Slack", icon: "💬" },
    { name: "Trello", icon: "📋" },
    { name: "Word", icon: skillLogos["Word"] },
    { name: "Excel", icon: skillLogos["Excel"] },
    { name: "PowerPoint", icon: skillLogos["PowerPoint"] },
    { name: "Google Meet", icon: skillLogos["Google Meet"] },
    { name: "Microsoft Teams", icon: skillLogos["Microsoft Teams"] },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "from-violet-200 to-purple-200",
      textColor: "text-violet-600",
      borderColor: "border-violet-100",
      hoverBorder: "hover:border-violet-200",
      bgColor: "bg-violet-50",
      skills: [
        { name: "React.js" },
        { name: "Vue.js" },
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "HTML5 & CSS3" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-emerald-200 to-teal-200",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      hoverBorder: "hover:border-emerald-200",
      bgColor: "bg-emerald-50",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Python" },
        { name: "PHP" },
        { name: "MongoDB" },
        { name: "MySQL" },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-rose-200 to-pink-200",
      textColor: "text-rose-600",
      borderColor: "border-rose-100",
      hoverBorder: "hover:border-rose-200",
      bgColor: "bg-rose-50",
      skills: [
        { name: "React Native" },
        { name: "Flutter" },
        { name: "Ionic" },
        { name: "Firebase" },
        { name: "App Store Deploy" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "from-purple-200 to-violet-200",
      textColor: "text-purple-600",
      borderColor: "border-purple-100",
      hoverBorder: "hover:border-purple-200",
      bgColor: "bg-purple-50",
      skills: [
        { name: "Figma" },
        { name: "Adobe XD" },
        { name: "Sketch" },
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
        { name: "Prototyping" },
        { name: "Canva" },
      ],
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      color: "from-amber-200 to-orange-200",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
      hoverBorder: "hover:border-amber-200",
      bgColor: "bg-amber-50",
      skills: [
        { name: "SEO/SEM" },
        { name: "Google Analytics" },
        { name: "Social Media Marketing" },
        { name: "Content Strategy" },
        { name: "Facebook Ads" },
        { name: "Email Marketing" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "from-indigo-200 to-blue-200",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-100",
      hoverBorder: "hover:border-indigo-200",
      bgColor: "bg-indigo-50",
      skills: [
        { name: "Git & GitHub" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "Netlify/Vercel" },
        { name: "CI/CD" },
        { name: "Linux" },
      ],
    },
  ];

  // Gabungkan semua skill dari skillCategories dan tools ke allSkills tanpa duplikat
  const allSkillsRaw = [
    ...skillCategories.flatMap((cat) =>
      cat.skills.map((skill) => ({ ...skill, category: cat.title }))
    ),
    ...tools.map((tool) => ({ name: tool.name, icon: tool.icon, category: "DevOps & Tools" })),
  ];
  const allSkills = allSkillsRaw.filter((skill, idx, arr) =>
    arr.findIndex((s) => s.name === skill.name) === idx
  );

  // Filter state
  const [filter, setFilter] = useState("All");

  // Button categories
  const filterButtons = [
    { label: "All", key: "All" },
    { label: "Front End", key: "Frontend Development" },
    { label: "Back End", key: "Backend Development" },
    { label: "Database", key: "Database" },
    { label: "Tools", key: "DevOps & Tools" },
    { label: "UI/UX", key: "UI/UX Design" },
    { label: "Digital Marketing", key: "Digital Marketing" },
  ];

  // Gabungkan tools ke dalam filter 'Tools'
  const displayedSkills =
    filter === "All"
      ? allSkills
      : filter === "DevOps & Tools"
      ? tools.map((tool) => ({ ...tool, category: "DevOps & Tools" }))
      : allSkills.filter(
          (skill) =>
            skill.category === filter ||
            (filter === "Database" && ["MongoDB", "MySQL"].includes(skill.name))
        );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Skills and Technology
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies, tools, and skills that I master in application
            development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              className={`px-4 py-2 rounded-full border font-semibold text-sm transition-colors
                ${
                  filter === btn.key
                    ? "bg-violet-500 text-white border-violet-500"
                    : "bg-white text-violet-500 border-violet-200 hover:bg-violet-50"
                }`}
              onClick={() => setFilter(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Skill Logos & Tools */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-16">
          {displayedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 bg-violet-50 rounded-lg border border-violet-100 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-4xl mb-2">
                {skill.icon || skillLogos[skill.name] || (
                  <SiReact className="text-gray-400" />
                )}
              </span>
              <span className="text-xs font-semibold text-violet-600 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Problem Solving',
              'Team Leadership',
              'Project Management',
              'Client Communication',
              'Creative Thinking',
              'Time Management',
              'Continuous Learning',
              'Agile Methodology',
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-violet-50 p-4 rounded-lg border border-violet-100 hover:border-violet-200 transition-all text-center group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-violet-600 font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-violet-600 group-hover:text-violet-500 transition-colors">
                  {skill}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
