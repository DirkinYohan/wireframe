"use client"; 
import { Sun, Moon, Globe, Briefcase, User, Code2, MessageSquare, Mail, ChevronDown, Sparkles, Menu, X, Download } from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Hero({
  lang,
  setLang,
  darkMode,
  setDarkMode,
}: {
  lang: "es" | "en";
  setLang: (l: "es" | "en") => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}) {
  const [activeNav, setActiveNav] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para manejar el scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Ajuste para el navbar fijo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const texts = {
    es: {
      title: "Dirkin Developer",
      subtitle: "Arquitecto de Soluciones Digitales",
      desc: "Transformando ideas en experiencias digitales excepcionales con tecnología de vanguardia y diseño innovador.",
      cta1: "Explorar Proyectos",
      cta2: "Descargar CV",
      nav: [
        { name: "Inicio", icon: <User size={18} />, id: "hero" },
        { name: "Sobre mí", icon: <User size={18} />, id: "about" },
        { name: "Habilidades", icon: <Code2 size={18} />, id: "skills" },
        { name: "Proyectos", icon: <Briefcase size={18} />, id: "projects" },
        { name: "Experiencia", icon: <Briefcase size={18} />, id: "experience" },
        { name: "Testimonios", icon: <MessageSquare size={18} />, id: "testimonials" },
        { name: "Contacto", icon: <Mail size={18} />, id: "contact" },
      ],
    },
    en: {
      title: "Dirkin Developer",
      subtitle: "Digital Solutions Architect",
      desc: "Transforming ideas into exceptional digital experiences with cutting-edge technology and innovative design.",
      cta1: "Explore Projects",
      cta2: "Download CV",
      nav: [
        { name: "Home", icon: <User size={18} />, id: "hero" },
        { name: "About me", icon: <User size={18} />, id: "about" },
        { name: "Skills", icon: <Code2 size={18} />, id: "skills" },
        { name: "Projects", icon: <Briefcase size={18} />, id: "projects" },
        { name: "Experience", icon: <Briefcase size={18} />, id: "experience" },
        { name: "Testimonials", icon: <MessageSquare size={18} />, id: "testimonials" },
        { name: "Contact", icon: <Mail size={18} />, id: "contact" },
      ],
    },
  };

  // Tech logos data
  const techLogos = [
    { name: "React", x: 10, y: 20 },
    { name: "Next.js", x: 85, y: 15 },
    { name: "TypeScript", x: 15, y: 75 },
    { name: "Node.js", x: 80, y: 80 },
    { name: "Python", x: 25, y: 45 },
    { name: "Docker", x: 75, y: 50 },
  ];

  return (
    <section 
      id="hero"
      className={`min-h-screen flex flex-col ${inter.className} relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-slate-50 via-white to-gray-100'
      }`}
    >
      
      {/* Static Background Grid */}
      <div className={`absolute inset-0 ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={darkMode ? "rgb(34, 197, 94)" : "rgb(59, 130, 246)"} strokeWidth="0.5" opacity={darkMode ? "0.3" : "0.2"}/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Static Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/6 w-32 h-32 border rounded-full ${
          darkMode ? 'border-green-500/30' : 'border-blue-500/30'
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/5 w-24 h-24 rotate-45 ${
          darkMode ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-r from-blue-400/15 to-purple-400/15'
        }`}></div>
        <div className={`absolute top-1/2 right-1/4 w-16 h-16 border-2 ${
          darkMode ? 'border-cyan-500/40' : 'border-cyan-400/30'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full ${
          darkMode ? 'bg-gradient-to-r from-pink-500/20 to-yellow-500/20' : 'bg-gradient-to-r from-pink-400/15 to-yellow-400/15'
        }`}></div>
      </div>

      {/* Static Tech Logos */}
      <div className="absolute inset-0 pointer-events-none">
        {techLogos.map((logo, index) => (
          <div
            key={logo.name}
            className={`absolute text-xs font-bold px-3 py-1 backdrop-blur-sm border rounded-full ${
              darkMode 
                ? 'bg-gray-800/60 border-gray-700/50 text-green-400' 
                : 'bg-white/80 border-gray-300/50 text-blue-600'
            }`}
            style={{
              left: `${logo.x}%`,
              top: `${logo.y}%`,
            }}
          >
            {logo.name}
          </div>
        ))}
      </div>

      {/* NAVBAR */}
      <nav className={`flex items-center justify-between px-8 py-6 border-b fixed w-full top-0 left-0 z-50 backdrop-blur-2xl ${
        darkMode 
          ? 'border-gray-800/50 bg-gray-900/70' 
          : 'border-gray-200/50 bg-white/70'
      }`}>
        
        {/* Logo */}
        <div className="relative group">
          <span className={`text-3xl font-black bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer`}>
            D
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-purple-400"></div>
        </div>

        {/* Navigation */}
        <ul className="hidden space-x-2 lg:flex">
          {texts[lang].nav.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => setActiveNav(i)}
              onMouseLeave={() => setActiveNav(null)}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 cursor-pointer py-3 px-5 rounded-xl relative z-10 ${
                  darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/50'
                }`}
              >
                <div className={`${activeNav === i ? 'text-green-400 scale-125 rotate-12' : `${darkMode ? 'text-gray-500' : 'text-gray-600'} group-hover:text-green-400`}`}>
                  {item.icon}
                </div>
                <span className={`font-medium ${activeNav === i ? 'text-green-400' : `${darkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'}`}`}>
                  {item.name}
                </span>
              </button>
              
              {/* Static background */}
              <div className={`absolute inset-0 rounded-xl opacity-100 blur-sm ${
                darkMode ? 'bg-gradient-to-r from-green-500/10 to-blue-500/10' : 'bg-gradient-to-r from-green-400/20 to-blue-400/20'
              }`}></div>
              
              {/* Bottom indicator */}
              <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full`}></div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden relative p-3 rounded-full backdrop-blur-sm border hover:scale-110 ${
            darkMode 
              ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50' 
              : 'bg-white/50 border-gray-300/50 hover:bg-gray-100/50'
          }`}
        >
          {mobileMenuOpen ? (
            <X size={20} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} rotate-90`} />
          ) : (
            <Menu size={20} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
          )}
        </button>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`relative p-3 rounded-full backdrop-blur-sm border hover:scale-110 group ${
              darkMode 
                ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50' 
                : 'bg-white/50 border-gray-300/50 hover:bg-gray-100/50'
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20"></div>
            {darkMode ? (
              <Sun size={20} className="relative z-10 text-yellow-400" />
            ) : (
              <Moon size={20} className="relative z-10 text-gray-700" />
            )}
          </button>
          
          <button 
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className={`relative p-3 rounded-full backdrop-blur-sm border hover:scale-110 group ${
              darkMode 
                ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50' 
                : 'bg-white/50 border-gray-300/50 hover:bg-gray-100/50'
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
            <Globe size={20} className={`relative z-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 backdrop-blur-xl ${
            darkMode ? 'bg-gray-900/90' : 'bg-white/90'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div className={`absolute top-24 left-4 right-4 rounded-2xl border backdrop-blur-xl ${
          darkMode ? 'bg-gray-800/90 border-gray-700/50' : 'bg-white/90 border-gray-300/50'
        }`}>
          <div className="p-6">
            <ul className="space-y-4">
              {texts[lang].nav.map((item, i) => (
                <li key={i}>
                  <button 
                    className={`w-full flex items-center space-x-4 py-4 px-6 rounded-xl ${
                      darkMode 
                        ? 'hover:bg-gray-700/50 text-gray-300 hover:text-white' 
                        : 'hover:bg-gray-100/50 text-gray-700 hover:text-gray-900'
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <div className={`${
                      darkMode ? 'text-green-400' : 'text-blue-500'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu Footer */}
            <div className={`mt-6 pt-6 border-t flex justify-center space-x-4 ${
              darkMode ? 'border-gray-700/50' : 'border-gray-300/50'
            }`}>
              <button 
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMobileMenuOpen(false);
                }}
                className={`p-3 rounded-full hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                    : 'bg-gray-100/50 hover:bg-gray-200/50'
                }`}
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>
              
              <button 
                onClick={() => {
                  setLang(lang === "es" ? "en" : "es");
                  setMobileMenuOpen(false);
                }}
                className={`p-3 rounded-full hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                    : 'bg-gray-100/50 hover:bg-gray-200/50'
                }`}
              >
                <Globe size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-8 pt-40 space-y-12 text-center lg:flex-row lg:text-left lg:pt-48 lg:space-y-0 lg:space-x-16">
        
        {/* Profile Section */}
        <div className="relative">
          
          {/* Main Profile Image */}
          <div className="relative group">
            <div className={`absolute -inset-8 rounded-full border-2 ${
              darkMode ? 'border-green-500/30' : 'border-blue-500/40'
            }`}></div>
            <div className={`absolute -inset-12 rounded-full border ${
              darkMode ? 'border-blue-500/20' : 'border-green-500/30'
            }`}></div>
            <div className={`absolute -inset-16 rounded-full border ${
              darkMode ? 'border-purple-500/10' : 'border-purple-500/20'
            }`}></div>
            
            {/* Profile container */}
            <div className="relative w-56 h-56 lg:w-72 lg:h-72">
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full blur-xl ${
                darkMode 
                  ? 'bg-gradient-to-r from-green-500/30 via-blue-500/30 to-purple-500/30' 
                  : 'bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20'
              }`}></div>
              
              {/* Image container */}
              <div className={`relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-1`}>
                <div className={`w-full h-full rounded-full overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                  <Image 
                    src="/avatar.png" 
                    alt="Dirkin Developer" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
            
            {/* Static particles */}
            <div className={`absolute -top-6 -right-6 w-4 h-4 rounded-full ${
              darkMode ? 'bg-green-400' : 'bg-green-500'
            }`}></div>
            <div className={`absolute -bottom-4 -left-4 w-3 h-3 rounded-full ${
              darkMode ? 'bg-blue-400' : 'bg-blue-500'
            }`}></div>
            <div className={`absolute top-1/2 -right-8 w-2 h-2 rounded-full ${
              darkMode ? 'bg-purple-400' : 'bg-purple-500'
            }`}></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-3xl">
          
          {/* Greeting */}
          <div className="flex items-center justify-center mb-6 lg:justify-start">
            <Sparkles className={`mr-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={24} />
            <span className={`text-lg font-light tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {lang === "es" ? "Bienvenido a mi universo digital" : "Welcome to my digital universe"}
            </span>
          </div>

          {/* Main title */}
          <h1 className="mb-8 text-6xl font-black leading-none lg:text-8xl">
            <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400' 
                : 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500'
            }`}>
              {texts[lang].title.split(' ')[0]}
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
              {texts[lang].title.split(' ')[1]}
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="relative mb-8 text-2xl font-bold lg:text-4xl">
            <span className="text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text">
              {texts[lang].subtitle}
            </span>
            <span className={`ml-2 ${darkMode ? 'text-green-400' : 'text-blue-500'}`}>|</span>
          </h2>
          
          {/* Description */}
          <p className={`text-xl leading-relaxed mb-12 max-w-2xl opacity-90 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {texts[lang].desc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-6 sm:flex-row lg:justify-start">
            <button 
              onClick={() => scrollToSection('projects')}
              className="relative px-10 py-5 overflow-hidden font-bold text-white bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {texts[lang].cta1}
                <Code2 size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl blur-lg -z-10"></div>
            </button>
            
            <button className={`group relative px-10 py-5 border-2 rounded-2xl font-bold overflow-hidden hover:scale-105 ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:border-transparent' 
                : 'border-gray-400 text-gray-700 hover:border-transparent'
            }`}>
              <span className={`relative z-10 flex items-center justify-center gap-3 ${darkMode ? 'group-hover:text-white' : 'group-hover:text-gray-900'}`}>
                {texts[lang].cta2}
                <Download size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl"></div>
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t ${
            darkMode ? 'border-gray-800/50' : 'border-gray-300/50'
          }`}>
            {[
              { number: "50+", label: lang === "es" ? "Proyectos" : "Projects" },
              { number: "3+", label: lang === "es" ? "Años Exp." : "Years Exp." },
              { number: "100%", label: lang === "es" ? "Satisfacción" : "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                  {stat.number}
                </div>
                <div className={`text-sm mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2">
        <div className={`text-xs mb-2 tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
          {lang === "es" ? "DESPLAZAR" : "SCROLL"}
        </div>
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center relative overflow-hidden ${
          darkMode ? 'border-gray-600' : 'border-gray-400'
        }`}>
          <div className="w-1 h-3 mt-2 rounded-full bg-gradient-to-b from-green-400 to-blue-400"></div>
        </div>
        <ChevronDown className={`mt-2 ${darkMode ? 'text-gray-600' : 'text-gray-500'}`} size={16} />
      </div>
    </section>
  );
}