import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Star,
  Award,
  Shield,
  Users,
  Sparkles,
  Eye,
  GraduationCap,
  Target,
  Lightbulb,
  HandHeart,
  X,
  Link,
  Mail,
  ChevronLeft,
  ChevronRight,
  Globe,
  Building2,
  Briefcase,
  Medal,
  BookOpen,
  ExternalLink,
  Quote,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
  Play,
  Pause,
} from "lucide-react";
import "./About.css"; // Import custom CSS for animations and styles
/* Animated Stats Counter Component */
const StatsCounter = ({ item, index, isVisible }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const targetValue = parseInt(item.stat.replace(/[^0-9]/g, ""));
  const suffix = item.stat.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const duration = 2000; // 2 seconds
      const steps = 50;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasStarted, targetValue]);

  return (
    <div className="group relative bg-white rounded-xl p-4 text-center shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300">
      {/* Mini icon */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: item.color + "12" }}
        >
          <item.icon className="w-4 h-4" style={{ color: item.color }} />
        </div>
      </div>

      {/* Animated number */}
      <div
        className="text-xl lg:text-2xl font-bold text-gray-800 mb-0.5"
        style={{ color: item.color }}
      >
        {count}
        {suffix}
      </div>

      {/* Label */}
      <div className="text-xs text-gray-400 font-medium tracking-wide">
        {item.label}
      </div>
    </div>
  );
};

/* Objective Card Component */
const ObjectiveCard = ({ objective, index }) => (
  <div className="flex-shrink-0 w-72 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group hover:border-blue-100">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-100 transition-colors duration-300">
        <CheckCircle2 className="w-4 h-4 text-green-500" />
      </div>
      <p className="text-sm text-gray-600 leading-relaxed font-light">
        {objective}
      </p>
    </div>
  </div>
);
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const modalRef = useRef(null);
  const valuesIntervalRef = useRef(null);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullTypedText =
    "Meet our visionary leaders driving excellence in healthcare.";
  // Excellent and affordable health care service at your doorsteps

  {
    /* Add this state near your other useState declarations */
  }
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasCounted, setHasCounted] = useState(false);

  // Add this useEffect for counting
  useEffect(() => {
    if (isVisible && !hasCounted) {
      setHasCounted(true);

      const targets = companyHighlights.map((item) =>
        parseInt(item.stat.replace(/[^0-9]/g, "")),
      );

      const duration = 2000;
      const interval = 30;
      const steps = duration / interval;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        if (currentStep >= steps) {
          setCounts(targets);
          clearInterval(timer);
        } else {
          setCounts(targets.map((target) => Math.floor(target * progress)));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;

    if (!isDeleting && charIndex < fullTypedText.length) {
      // Still typing forward
      timeout = setTimeout(() => {
        setTypedText(fullTypedText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 40);
    } else if (!isDeleting && charIndex === fullTypedText.length) {
      // Finished typing — pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setTypedText(fullTypedText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 25);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting — start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [isVisible, charIndex, isDeleting]);

  const companyHighlights = [
    {
      icon: Users,
      stat: "10,000+",
      label: "Patients Served",
      color: "#3B82F6",
    },
    { icon: Award, stat: "5+", label: "Years Experience", color: "#16A34A" },
    { icon: Shield, stat: "100%", label: "Verified Staff", color: "#9333EA" },
    { icon: Heart, stat: "98%", label: "Satisfaction Rate", color: "#DC2626" },
  ];

  const leaders = [
    {
      name: "Ms. Cathie Ignatius Andrea",
      role: "Managing Director",
      credentials: "B.Tech",
      initials: "CA",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
      bgGradient: "bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]",
      accentColor: "#3B82F6",
      image:
        "https://res.cloudinary.com/dkmmpyq6u/image/upload/v1779032439/Red.jpg_aikxl4.jpg",
      tagline: "Social Entrepreneur & Innovator",
      fullBio: `Ms. Cathie Ignatius Andrea is a young and dynamic social entrepreneur who emphasizes the creation of social value and care. She drives social innovation by applying business principles to solve social, environmental, or community problems, focusing on impact rather than just profit. She leads a highly motivated team with a focus on understanding the individual needs of every client. Her strategic approach has consistently driven growth while enhancing the company's reputation for compassionate care and outstanding service.

She drives the strategic growth, operational efficiency, and high-quality patient care, acting as the top executive responsible for overall performance, regulatory compliance, and financial health. She leads clinical and administrative teams, fosters stakeholder relationships, and manages budgets to ensure compliance and profitability. She oversees the strategic implementation of company brand standards, systems and processes with the future growth of the business in mind.

Ms. Andrea believes that exceptional customer service is at the heart of every successful business relationship. By prioritising empathy, trust and personalised solutions, she has continually strengthened client partnerships. She stays engaged with industry trends and technology for enhanced healthcare services.`,
      highlights: [
        "Social entrepreneur focused on impact over profit",
        "Leads highly motivated clinical & administrative teams",
        "Drives strategic growth & operational excellence",
        "Prioritises empathy, trust & personalised solutions",
      ],
    },
    {
      name: "Prof. R. Kavitha",
      role: "Director – Operations & Management",
      credentials: "B.A., M.A., M.Phil., Ph.D.",
      initials: "RK",
      gradient: "from-[#16A34A] to-[#22C55E]",
      bgGradient: "bg-gradient-to-br from-[#16A34A] to-[#22C55E]",
      accentColor: "#3B82F6",
      image:
        "https://res.cloudinary.com/dkmmpyq6u/image/upload/v1779032438/kavvit.jpg_qqghgs.jpg",
      tagline: "Academician & Former Vice-Chancellor",
      fullBio: `Prof. R. Kavitha is a well-respected Academician who has relevant experience as Vice-Chancellor in Universities. She holds various membership in academic boards nationally and internationally. She has rich and varied experience in business development spanning over 20+ years. She has led on quality assurance and compliance initiatives, digitalization and management strategies.

Prof. R. Kavitha has extensive experience in managing teams and coaching and mentoring to achieve positive results for her team members. She thrives on meeting new people, developing relationships and building mutually beneficial partnerships. Her interest in technology augmenting and improving quality care and service, as well as assisting care providers to make appropriate decisions.

She is working on several initiatives transforming the provision of high-quality care home services, developing staff recognition and quality improvement programmes, implementing digitisation initiatives to become truly paper free as well as monitoring systems in management as technology is adopted in society. Possessing a wealth of experience as academician and her passion in the care of environment and society with in-depth knowledge and understanding of the environment and society care and a passion for providing excellent service and care.`,
      highlights: [
        "Former Vice-Chancellor with international academic experience",
        "20+ years in business development & management",
        "Expert in team coaching, mentoring & partnerships",
        "Transforming care through technology & digitisation",
      ],
    },
    {
      name: "Dr. Arun Kumar Retnaraj",
      role: "Director – Compliance",
      credentials: "B.D.S, M.B.A., M.S.W., M.Sc.(Psychology)",
      initials: "AR",
      gradient: "from-[#9333EA] to-[#A855F7]",
      bgGradient: "bg-gradient-to-br from-[#9333EA] to-[#A855F7]",
      accentColor: "#3B82F6",
      image:
        "https://res.cloudinary.com/dkmmpyq6u/image/upload/v1779032438/Arun_Kumar.jpg_yn0ucn.jpg",
      tagline: "Healthcare Compliance Expert",
      fullBio: `Dr. Arun Kumar is responsible for the business compliance in healthcare of the institution along with the opening of new initiatives. He brings over 25 years of management experience, alongside various executive and Board leadership roles. He is a senior leader responsible for developing, implementing, and monitoring programs that ensure an organization adheres to state, and local healthcare regulations, as well as internal policies and ethical standards, establishing a culture of integrity, overseeing audits.

He has played a pivotal role in shaping strategy and driving growth in businesses across the health and social care sector. Dr. Arun Kumar has owned his own successful medical business services and brings a unique perspective to Akshai Healthcare Services, having transformed its healthcare services by applying technology and systems to better meet the needs of society. He is passionate about Akshai Healthcare Services setting new standards in care by building, with creativity and imagination, best-in-class, innovative and outstanding care facilities.

He has contributed as an advisor for various government and private departments in the field of health and education. He led the design of technical support strategies in the home health care services, medical and nursing care at the institution. He supports Akshai Healthcare Services in strategic partnership with government and private global agencies. He ensures the organization adheres to legal, regulatory, and internal policies. He develops compliance programs, conducts audits, manages risk assessments, investigates violations, and trains staff to maintain ethical standards. His leadership role requires strong communication and analytical skills to protect patient safety and privacy. He provides strategic directions in the area of health care and education and also acts as a public relation officer of the trust.`,
      highlights: [
        "25+ years management experience in healthcare",
        "Advisor to government & private health departments",
        "Expert in compliance, audits & risk management",
        "Strategic partnerships with global agencies",
      ],
    },
  ];

  const values = [
    {
      icon: HandHeart,
      title: "Compassion",
      color: "#DC2626",
      description: "Care delivered with empathy and understanding",
    },
    {
      icon: Star,
      title: "Excellence",
      color: "#FBBF24",
      description: "Striving for the highest standards in everything we do",
    },
    {
      icon: Users,
      title: "Personalized Care",
      color: "#3B82F6",
      description: "Tailored solutions for each individual's unique needs",
    },
    {
      icon: Shield,
      title: "Integrity",
      color: "#16A34A",
      description: "Honest, transparent, and ethical in all our actions",
    },
    {
      icon: Heart,
      title: "Collaboration",
      color: "#9333EA",
      description: "Working together with families and healthcare partners",
    },
    {
      icon: Award,
      title: "Respect & Dignity",
      color: "#EA580C",
      description: "Honoring every person's worth and privacy",
    },
  ];

  const objectives = [
    "Assist clients to maintain independence and quality of life in their own home",
    "Provide the best possible service with a friendly, caring and compassionate approach",
    "Provide appropriate trained and skilled staff that fit our clients' needs",
    "Provide continuity of care wherever possible",
    "Respect the dignity and privacy of our clients",
  ];

  // Auto carousel for mobile
  useEffect(() => {
    if (!isVisible || isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % leaders.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isVisible, isPaused, leaders.length]);

  // Auto-rotate values
  useEffect(() => {
    if (!isVisible) return;
    valuesIntervalRef.current = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(valuesIntervalRef.current);
  }, [isVisible, values.length]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setSelectedLeader(null);
          setHoveredLeader(null);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle mouse position for hover popup
  const handleMouseEnter = (leader, e) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
    setHoveredLeader(leader);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredLeader(null);
    }, 200);
  };

  // Close modal on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (selectedLeader || hoveredLeader) {
        setSelectedLeader(null);
        setHoveredLeader(null);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedLeader, hoveredLeader]);

  const handleValueClick = (index) => {
    setActiveValue(index);
    if (valuesIntervalRef.current) clearInterval(valuesIntervalRef.current);
    valuesIntervalRef.current = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_0.5px,transparent_0.5px)] [background-size:30px_30px] opacity-[0.03] animate-pulse" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="h-8 flex items-center justify-center mb-4">
            <p className="text-gray-600 text-lg sm:text-xl font-medium">
              {typedText}
              <span className="inline-block w-0.5 h-5 bg-blue-600 ml-1 animate-pulse" />
            </p>
          </div>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#003399] to-blue-500 mx-auto mt-3"></div>
        </div>

        {/* Leadership Section */}
        <div
          className={`transition-all duration-1000 mb-16 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="relative cursor-pointer group"
                onMouseEnter={(e) => handleMouseEnter(leader, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => setSelectedLeader(leader)}
                >
                  {/* White background image area */}
                  <div className="relative h-56 bg-white overflow-hidden flex items-center justify-center p-6">
                    {/* Subtle decorative rings */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
                      <div className="w-44 h-44 rounded-full border border-dashed border-gray-400 animate-spin-slow" />
                      <div
                        className="absolute w-52 h-52 rounded-full border border-dashed border-gray-300 animate-spin-slow"
                        style={{
                          animationDirection: "reverse",
                          animationDuration: "15s",
                        }}
                      />
                    </div>

                    {/* Profile Image */}
                    <div className="relative z-10">
                      <div className="relative">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500 border-2 border-gray-100"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        {/* Fallback initials */}
                        <div
                          className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gray-50 border-2 border-gray-200 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500"
                          style={{ display: "none" }}
                        >
                          <span className="text-4xl font-bold text-gray-400">
                            {leader.initials}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <div className="text-center text-white">
                        <Eye className="w-10 h-10 mx-auto mb-2" />
                        <span className="font-semibold text-sm tracking-wide">
                          View Profile
                        </span>
                      </div>
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 text-center border-t border-gray-50">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {leader.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 font-medium tracking-wide">
                      {leader.credentials}
                    </p>
                    <span
                      className="inline-block text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full border tracking-wide"
                      style={{
                        backgroundColor: leader.accentColor + "08",
                        color: leader.accentColor,
                        borderColor: leader.accentColor + "20",
                      }}
                    >
                      {leader.role}
                    </span>
                  </div>

                  {/* Subtle bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: leader.accentColor }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Carousel */}
          <div
            className="lg:hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {leaders.map((leader, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-1"
                    onClick={() => setSelectedLeader(leader)}
                  >
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                      {/* White image area */}
                      <div className="relative h-52 bg-white flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
                          <div className="w-40 h-40 rounded-full border border-dashed border-gray-400 animate-spin-slow" />
                        </div>
                        <div className="relative z-10">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-32 h-32 rounded-2xl object-cover shadow-md border border-gray-100"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center shadow-md"
                            style={{ display: "none" }}
                          >
                            <span className="text-3xl font-bold text-gray-400">
                              {leader.initials}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 text-center border-t border-gray-50">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {leader.name}
                        </h4>
                        <p className="text-xs text-gray-400 mb-2">
                          {leader.credentials}
                        </p>
                        <span
                          className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full border"
                          style={{
                            backgroundColor: leader.accentColor + "08",
                            color: leader.accentColor,
                            borderColor: leader.accentColor + "20",
                          }}
                        >
                          {leader.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              {leaders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-8 h-3" : "w-3 h-3 bg-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      i === currentSlide
                        ? leaders[currentSlide].accentColor
                        : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission - Prominent Board */}
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Vision Board */}
          <div className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 overflow-hidden">
            {/* Subtle breathing glow — using #003399 */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-40 animate-breathe"
              style={{ backgroundColor: "#00339915" }}
            />
            <div
              className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl opacity-25 animate-breathe"
              style={{ animationDelay: "2s", backgroundColor: "#00339910" }}
            />

            {/* Delicate top accent — using #003399 */}
            <div
              className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent to-transparent"
              style={{
                "--tw-gradient-via": "#00339930",
                backgroundImage:
                  "linear-gradient(to right, transparent, #00339940, transparent)",
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: "#00339912" }}
                >
                  <Target className="w-6 h-6" style={{ color: "#003399" }} />
                </div>
              </div>

              {/* Label */}
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3 opacity-70"
                style={{ color: "#003399" }}
              >
                Where We're Heading
              </p>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl font-light text-gray-900 mb-5 tracking-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Our Vision
              </h3>

              {/* Quote */}
              <div
                className="relative pl-5 border-l-2"
                style={{ borderColor: "#00339920" }}
              >
                <p
                  className="text-gray-500 text-sm lg:text-base leading-relaxed font-light"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  To Become the Leading and Preferred Home Health Care Service
                  Provider at Industry Quality Standards through Cost-effective
                  Delivery Models.
                </p>
              </div>

              {/* Trust indicator */}
              <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#003399" }}
                />
                <span className="tracking-wide">EST. 2019</span>
              </div>
            </div>
          </div>

          {/* Mission Board */}
          <div className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 overflow-hidden">
            {/* Subtle breathing glow — using #990100 */}
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-40 animate-breathe"
              style={{ animationDelay: "1s", backgroundColor: "#99010012" }}
            />
            <div
              className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-25 animate-breathe"
              style={{ animationDelay: "3s", backgroundColor: "#9901000D" }}
            />

            {/* Delicate top accent — using #990100 */}
            <div
              className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent to-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, transparent, #99010035, transparent)",
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: "#99010012" }}
                >
                  <Lightbulb className="w-6 h-6" style={{ color: "#990100" }} />
                </div>
              </div>

              {/* Label */}
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3 opacity-70"
                style={{ color: "#990100" }}
              >
                What Drives Us Daily
              </p>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl font-light text-gray-900 mb-5 tracking-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Our Mission
              </h3>

              {/* Quote */}
              <div
                className="relative pl-5 border-l-2"
                style={{ borderColor: "#99010020" }}
              >
                <p
                  className="text-gray-500 text-sm lg:text-base leading-relaxed font-light"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Promote Quality of Life by Providing World Class Home Health
                  Care Services with Integrity, Respect and Dignity to Achieve
                  Physical, Emotional, and Social Well-being through
                  Advancements in Technology to Improve Care, Operations, and
                  Services.
                </p>
              </div>

              {/* Trust indicator */}
              <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#990100" }}
                />
                <span className="tracking-wide">SINCE DAY ONE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values - Interactive Carousel */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => {
              // Alternate between logo colors based on index
              const logoColors = ["#003399", "#990100"];
              const color = logoColors[index % 2];
              const colorr = logoColors[0];

              return (
                <button
                  key={index}
                  onClick={() => handleValueClick(index)}
                  onMouseEnter={() => {
                    setActiveValue(index);
                    if (valuesIntervalRef.current)
                      clearInterval(valuesIntervalRef.current);
                  }}
                  onMouseLeave={() => {
                    if (valuesIntervalRef.current)
                      clearInterval(valuesIntervalRef.current);
                    valuesIntervalRef.current = setInterval(() => {
                      setActiveValue((prev) => (prev + 1) % values.length);
                    }, 3000);
                  }}
                  className={`relative p-6 rounded-2xl text-left transition-all duration-500 transform hover:scale-105 ${
                    activeValue === index
                      ? "bg-white shadow-2xl scale-105"
                      : "bg-white/50 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-500 ${
                      activeValue === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundColor: colorr }}
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: color + "15" }}
                    >
                      <value.icon
                        className="w-5 h-5"
                        style={{ color: color }}
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">{value.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{value.description}</p>
                  {activeValue === index && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div
                        className="w-3 h-3 bg-white border-2 rotate-45"
                        style={{ borderColor: colorr }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stats & Objectives Combined Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 overflow-hidden">
            {/* Stats Row - Small & Supporting with Animated Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
              {companyHighlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-4 text-center shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300"
                >
                  {/* Mini icon */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: item.color + "12" }}
                    >
                      <item.icon
                        className="w-4 h-4"
                        style={{ color: item.color }}
                      />
                    </div>
                  </div>

                  {/* Animated number */}
                  <div
                    className="text-xl lg:text-2xl font-bold text-gray-800 mb-0.5"
                    style={{ color: item.color }}
                  >
                    {counts[index].toLocaleString()}
                    {item.stat.replace(/[0-9,]/g, "")}
                  </div>

                  {/* Label */}
                  <div className="text-xs text-gray-400 font-medium tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider with animated dot */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="mx-4 flex gap-1.5">
                <div
                  className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-200 to-transparent" />
            </div>

            {/* Objectives - Moving Marquee with Side Buttons */}
<div className="relative">
  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-4">
    Our Objectives
  </p>

  {/* Gradient masks for smooth fade */}
  <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />

  {/* Marquee track */}
  <div className="overflow-hidden py-2">
    <div className="flex gap-4" style={{ animation: 'marquee 30s linear infinite' }} id="marquee-track">
      {/* First set */}
      {objectives.map((objective, index) => (
        <div
          key={`first-${index}`}
          className="flex-shrink-0 w-72 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
              style={{ backgroundColor: '#00339912' }}
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: '#003399' }} />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              {objective}
            </p>
          </div>
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {objectives.map((objective, index) => (
        <div
          key={`second-${index}`}
          className="flex-shrink-0 w-72 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
              style={{ backgroundColor: '#00339912' }}
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: '#003399' }} />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              {objective}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="flex items-center justify-center gap-3 mt-4">
    <button
      onClick={() => {
        const track = document.getElementById('marquee-track');
        if (!track) return;
        const computedStyle = getComputedStyle(track);
        const currentMatrix = new DOMMatrixReadOnly(computedStyle.transform);
        const currentX = currentMatrix.m41;
        const cardWidth = 288 + 16; // w-72 (288px) + gap-4 (16px)
        const totalWidth = cardWidth * objectives.length;
        
        // Pause animation
        track.style.animation = 'none';
        track.style.transform = `translateX(${currentX}px)`;
        
        // Calculate new position with wrapping
        let newX = currentX + 300;
        if (newX > 0) newX = newX - totalWidth;
        
        track.style.transform = `translateX(${newX}px)`;
        
        // Resume animation from new position
        requestAnimationFrame(() => {
          track.style.animation = `marquee-resume ${totalWidth / 100}s linear infinite`;
          track.style.setProperty('--start-x', `${newX}px`);
        });
      }}
      className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
    >
      <ChevronLeft className="w-5 h-5 text-gray-600" />
    </button>
    <button
      onClick={() => {
        const track = document.getElementById('marquee-track');
        if (!track) return;
        const computedStyle = getComputedStyle(track);
        const currentMatrix = new DOMMatrixReadOnly(computedStyle.transform);
        const currentX = currentMatrix.m41;
        const cardWidth = 288 + 16;
        const totalWidth = cardWidth * objectives.length;
        
        // Pause animation
        track.style.animation = 'none';
        track.style.transform = `translateX(${currentX}px)`;
        
        // Calculate new position with wrapping
        let newX = currentX - 300;
        if (newX < -totalWidth) newX = newX + totalWidth;
        
        track.style.transform = `translateX(${newX}px)`;
        
        // Resume animation from new position
        requestAnimationFrame(() => {
          track.style.animation = `marquee-resume ${totalWidth / 100}s linear infinite`;
          track.style.setProperty('--start-x', `${newX}px`);
        });
      }}
      className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
    >
      <ChevronRight className="w-5 h-5 text-gray-600" />
    </button>
  </div>
</div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl px-8 py-6 shadow-2xl">
            <Heart className="w-8 h-8 text-white animate-pulse" />
            <p className="text-white text-lg font-semibold">
              Ready to experience compassionate care?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Hover Popup */}
      {hoveredLeader && (
        <div
          className="fixed z-40 animate-slide-up"
          style={{
            left: `${Math.min(Math.max(hoverPosition.x - 200, 20), window.innerWidth - 420)}px`,
            top: `${Math.max(hoverPosition.y - 30, 20)}px`,
            maxHeight: `${Math.min(window.innerHeight - 40, 600)}px`,
          }}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          }}
          onMouseLeave={() => setHoveredLeader(null)}
        >
          <LeaderPopup
            leader={hoveredLeader}
            onViewFull={() => {
              setSelectedLeader(hoveredLeader);
              setHoveredLeader(null);
            }}
          />
        </div>
      )}

      {/* Full Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedLeader(null)}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto scrollbar-hide shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
              const isAtTop = scrollTop === 0;
              const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

              // Allow scroll within modal, but prevent propagation to page
              if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
                e.preventDefault();
              }
              e.stopPropagation();
            }}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Close Button — sticky */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="sticky top-4 right-4 float-right z-20 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 mr-4"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Header — Compact white background */}
            <div className="bg-white pt-2 pb-4 px-8 border-b border-gray-100">
              <div className="flex items-center gap-5">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-md border border-gray-100"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shadow-md"
                    style={{ display: "none" }}
                  >
                    <span className="text-2xl font-bold text-gray-400">
                      {selectedLeader.initials}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 truncate">
                    {selectedLeader.name}
                  </h2>
                  <p className="text-xs text-gray-400 mb-1.5 font-medium tracking-wide">
                    {selectedLeader.credentials}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: selectedLeader.accentColor + "08",
                        color: selectedLeader.accentColor,
                        borderColor: selectedLeader.accentColor + "20",
                      }}
                    >
                      {selectedLeader.role}
                    </span>
                    <span className="text-gray-300 text-xs hidden sm:inline">
                      |
                    </span>
                    <span className="text-gray-400 text-xs italic truncate hidden sm:inline">
                      "{selectedLeader.tagline}"
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-5">
              <div className="prose max-w-none">
                {selectedLeader.fullBio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed mb-4 text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="px-8 py-4 border-t border-gray-100 bg-white rounded-b-3xl sticky bottom-0">
              <a
                href="#contact"
                onClick={() => setSelectedLeader(null)}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Schedule a Consultation
                <Calendar className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-gray-400 mt-1.5">
                We'll connect you with {selectedLeader.name.split(" ")[0]}
              </p>
            </div>
          </div>
        </div>
      )}
      <style>{`
    @keyframes breathe {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
    }
    
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
    
    @keyframes orbitVision {
        0% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(96,165,250,0.6);
        }
        25% { 
            top: -4px; 
            left: calc(100% - 4px); 
            box-shadow: 0 0 12px 3px rgba(96,165,250,0.8);
        }
        50% { 
            top: calc(100% - 4px); 
            left: calc(100% - 4px); 
            box-shadow: 0 0 8px 2px rgba(96,165,250,0.6);
        }
        75% { 
            top: calc(100% - 4px); 
            left: -4px; 
            box-shadow: 0 0 12px 3px rgba(96,165,250,0.8);
        }
        100% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(96,165,250,0.6);
        }
    }
    
    @keyframes orbitMission {
        0% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(74,222,128,0.6);
        }
        25% { 
            top: -4px; 
            left: calc(100% - 4px); 
            box-shadow: 0 0 12px 3px rgba(74,222,128,0.8);
        }
        50% { 
            top: calc(100% - 4px); 
            left: calc(100% - 4px); 
            box-shadow: 0 0 8px 2px rgba(74,222,128,0.6);
        }
        75% { 
            top: calc(100% - 4px); 
            left: -4px; 
            box-shadow: 0 0 12px 3px rgba(74,222,128,0.8);
        }
        100% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(74,222,128,0.6);
        }
    }
    
    .animate-breathe { animation: breathe 4s ease-in-out infinite; }
    .animate-orbit-vision { animation: orbitVision 6s linear infinite; }
    .animate-orbit-mission { animation: orbitMission 7s linear infinite; }
    .animate-marquee { animation: marquee 30s linear infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    
    @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
`}</style>
      <style>{`
    @keyframes breathe {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
    }
    
    @keyframes orbitVision {
        0% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(96,165,250,0.6);
        }
        25% { 
            top: -4px; 
            left: calc(100% - 4px); 
            box-shadow: 0 0 12px 3px rgba(96,165,250,0.8);
        }
        50% { 
            top: calc(100% - 4px); 
            left: calc(100% - 4px); 
            box-shadow: 0 0 8px 2px rgba(96,165,250,0.6);
        }
        75% { 
            top: calc(100% - 4px); 
            left: -4px; 
            box-shadow: 0 0 12px 3px rgba(96,165,250,0.8);
        }
        100% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(96,165,250,0.6);
        }
    }
    
    @keyframes orbitMission {
        0% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(74,222,128,0.6);
        }
        25% { 
            top: -4px; 
            left: calc(100% - 4px); 
            box-shadow: 0 0 12px 3px rgba(74,222,128,0.8);
        }
        50% { 
            top: calc(100% - 4px); 
            left: calc(100% - 4px); 
            box-shadow: 0 0 8px 2px rgba(74,222,128,0.6);
        }
        75% { 
            top: calc(100% - 4px); 
            left: -4px; 
            box-shadow: 0 0 12px 3px rgba(74,222,128,0.8);
        }
        100% { 
            top: -4px; 
            left: -4px; 
            box-shadow: 0 0 8px 2px rgba(74,222,128,0.6);
        }
    }
    
    .animate-breathe { animation: breathe 4s ease-in-out infinite; }
    .animate-orbit-vision { animation: orbitVision 6s linear infinite; }
    .animate-orbit-mission { animation: orbitMission 7s linear infinite; }
`}</style>
      <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9) translateY(30px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-float { animation: float 8s ease-in-out infinite; }
                .animate-slide-up { animation: slideUp 0.3s ease-out; }
                .animate-fade-in { animation: fadeIn 0.3s ease; }
                .animate-scale-in { animation: scaleIn 0.4s ease; }
                .animate-spin-slow { animation: spinSlow 20s linear infinite; }
            `}</style>
    </section>
  );
};

/* Leader Card Component */
const LeaderCard = ({ leader, index, onClick }) => (
  <div
    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
    style={{ animationDelay: `${index * 0.15}s` }}
    onClick={onClick}
  >
    <div className={`relative h-48 ${leader.bgGradient} overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl" />
        <div className="absolute bottom-5 left-5 w-24 h-24 bg-white rounded-full blur-xl" />
      </div>

      {/* Spinning circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full border-2 border-dashed border-white/30 animate-spin-slow" />
        <div
          className="absolute w-48 h-48 rounded-full border border-dashed border-white/20 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "15s" }}
        />
      </div>

      {/* Profile Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500"
            style={{ display: "none" }}
          >
            <span className="text-4xl font-bold text-white">
              {leader.initials}
            </span>
          </div>
        </div>
      </div>

      {/* Hover overlay
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                    <Eye className="w-10 h-10 mx-auto mb-2" />
                    <span className="font-semibold">View Profile</span>
                </div>
            </div> */}
    </div>

    <div className="p-6 text-center">
      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
        {leader.name}
      </h4>
      <p className="text-sm text-gray-500 mb-3">{leader.credentials}</p>
      <span
        className="inline-block text-sm font-semibold px-4 py-2 rounded-full"
        style={{
          backgroundColor: leader.accentColor + "15",
          color: leader.accentColor,
        }}
      >
        {leader.role}
      </span>
    </div>
  </div>
);

/* Leader Popup Component */
const LeaderPopup = ({ leader, onViewFull }) => {
  const themeColor = "#1E3A8A";

  return (
    <div
      className="w-96 h-[500px] bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col"
      style={{
        boxShadow: `0 25px 50px -12px ${themeColor}35`,
      }}
    >
      {/* Header */}
      <div
        className="relative h-32 flex-shrink-0 flex items-center px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${themeColor}, #2563EB)`,
        }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

        <div className="relative z-10 flex items-center gap-4">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white/40 shadow-lg"
          />

          <div>
            <h4 className="text-white font-bold text-lg">{leader.name}</h4>

            <p className="text-white/75 text-sm">{leader.credentials}</p>
          </div>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-5 text-center">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full border"
            style={{
              backgroundColor: "#DBEAFE",
              color: themeColor,
              borderColor: "#BFDBFE",
            }}
          >
            {leader.role}
          </span>
        </div>

        <ul className="space-y-3">
          {leader.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: themeColor }}
              />

              <p className="text-sm text-gray-700 leading-relaxed">
                {highlight}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Fixed Footer Button */}
      <div className="flex-shrink-0 p-5 border-t border-gray-100 bg-white">
        <button
          onClick={onViewFull}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${themeColor}, #2563EB)`,
          }}
        >
          View Full Profile
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/* Leader Full Profile Component */
const LeaderFullProfile = ({ leader }) => (
  <div>
    <div
      className={`relative h-64 ${leader.bgGradient} flex items-center justify-center`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl" />
      </div>
      <div className="text-center relative z-10">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white/50 shadow-2xl mx-auto mb-4"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/50 flex items-center justify-center shadow-2xl mx-auto mb-4"
          style={{ display: "none" }}
        >
          <span className="text-5xl font-bold text-white">
            {leader.initials}
          </span>
        </div>
        <p className="text-white/80 text-lg italic">"{leader.tagline}"</p>
      </div>
    </div>
    <div className="p-8 lg:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h2>
        <p className="text-gray-500 mb-3">{leader.credentials}</p>
        <span
          className="inline-block text-sm font-semibold px-4 py-2 rounded-full"
          style={{
            backgroundColor: leader.accentColor + "15",
            color: leader.accentColor,
          }}
        >
          {leader.role}
        </span>
      </div>
      <div className="prose max-w-none">
        {leader.fullBio.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          Schedule a Consultation
          <Calendar className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

export default About;
