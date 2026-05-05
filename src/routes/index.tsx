import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Smartphone, Globe, Code2, Sparkles, Briefcase, GraduationCap,
  ArrowRight, Download, Send, MapPin, Phone, ChevronDown, ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import devPortrait from "@/assets/foto-perfil.jpeg";
import appReact from "@/assets/app-react.png";
import appFlutter from "@/assets/app-flutter.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Glivia Cavalcante — Front-End Web & Mobile Developer" },
      { name: "description", content: "Portfólio de Glivia Cavalcante, desenvolvedora front-end web & mobile. React, React Native, TypeScript e interfaces refinadas." },
    ],
  }),
});

const services = [
  { n: "01", title: "Front-End Development", desc: "Specialized in creating dynamic, modern, and fully responsive interfaces using React, Vue.js, and JavaScript." },
  { n: "02", title: "Mobile App Development", desc: "Development of high-performance native and hybrid applications for Android and iOS, with expertise in React Native, FlutterFlow, and Flutter." },
  { n: "03", title: "UI/UX Design & Prototyping", desc: "Crafting user-centered experiences by bridging aesthetic design vision with technical implementation to ensure intuitive and functional interfaces." },
  { n: "04", title: "E-commerce Optimization", desc: "Proven experience in optimizing and maintaining online sales platforms using tools such as VTEX, Odoo, HTML, and CSS." },
  { n: "05", title: "Backend Integration (BaaS)", desc: "Implementation of scalable architectures with seamless authentication and real-time database integration through Supabase and Firebase." },
  { n: "06", title: "Cloud Infrastructure Foundations", desc: "Knowledge of cloud fundamentals to support scalable applications, backed by the AWS Academy Cloud Foundations certification." },
  { n: "07", title: "ERP Technical Support", desc: "Specialized support for management systems (Odoo), focused on operational continuity, fiscal incident resolution, and business flow optimization." },
];

const projects = [
  { id: "project-1", title: "Service Order Management App (V2)", tag: "Mobile App", year: "2025", stack: "React Native · PostgreSQL", category: "Mobile", desc: "A robust mobile solution engineered for assembly service order control with an offline-first architecture. It utilizes React Native for a high-performance cross-platform experience and integrates a local database layer with PostgreSQL to ensure data integrity and complex querying capabilities even without network connectivity." },
  { id: "project-2", title: "Assembly Control System (V1)", tag: "Mobile App", year: "2025", stack: "FlutterFlow · Supabase", category: "Mobile", desc: "A rapid-deployment mobile application developed to streamline assembly reporting workflows. Leveraging FlutterFlow for the UI layer and Supabase as a Backend-as-a-Service (BaaS), the project features real-time database synchronization, secure user authentication, and persistent local storage for offline reliability." },
  { id: "project-3", title: "Financial Expense Tracker", tag: "Mobile App", year: "2024", stack: "Flutter", category: "Mobile", desc: "A cross-platform personal finance application built with the Flutter SDK. The app implements a clean architecture to manage daily transactional data, featuring custom data visualization components and local state management for a seamless and responsive user experience." },
  { id: "project-4", title: "Ponto Flutter", tag: "Mobile App", year: "2024", stack: "Flutter", category: "Mobile", desc: "A professional attendance log application designed for secure employee time-stamping. It focuses on precise timestamp logic, geolocation verification, and a user-friendly interface developed using Material Design principles within the Flutter framework." },
  { id: "project-5", title: "Developer Portfolio", tag: "Web", year: "2024", stack: "React", category: "Web", desc: "A high-performance personal portfolio developed with React to showcase technical proficiency. The project features a component-based architecture, optimized asset loading, and responsive design patterns, reflecting best practices in modern web development and UI/UX." },
  { id: "project-6", title: "Classic Web Lab", tag: "Web", year: "2023", stack: "HTML5 · CSS3 · JavaScript", category: "Web", desc: "A series of projects focused on mastering the core fundamentals of web engineering. These applications demonstrate advanced DOM manipulation, event-driven programming, and asynchronous logic using pure HTML5, CSS3, and JavaScript without the abstraction of frameworks." },
  { id: "project-7", title: "Secure User Authentication System", tag: "Backend", year: "2023", stack: "C++", category: "Backend", desc: "A low-level backend project focused on user data management and security. Engineered in C++, the system implements file-based data persistence, encrypted login protocols, and structured memory management to handle registration and authentication processes efficiently." },
];

const experience = [
  { period: "2025 — Present", role: "Front-End Developer", company: "Zenir Móveis e Eletros & Freelancer", desc: "Focus on creating dynamic and responsive interfaces using React, Vue.js, and Node.js. Development of native and hybrid mobile applications with React Native, FlutterFlow, and Flutter. Implementation of scalable architectures and real-time databases using Supabase and Firebase." },
  { period: "2024 — 2025", role: "IT Technical Support (Help Desk)", company: "Zenir Móveis e Eletros", desc: "Specialized support for the Odoo ERP, resolving fiscal incidents and managing sales workflows. Management of credit analysis processes, cash flow, and inventory control." },
  { period: "2023 — 2024", role: "IT Intern", company: "Zenir Móveis e Eletros", desc: "E-commerce system optimization using HTML, CSS, JavaScript, VTEX, and Odoo." },
];

const education = [
  { period: "2024 — Present", role: "Bachelor's Degree in Computer Science", company: "Estácio", desc: "" },
  { period: "2021 — 2023", role: "Information Technology Technician", company: "EEEP Amélia Figueiredo de Lavor", desc: "" },
  { period: "Certifications", role: "Relevant Certifications", company: "AWS Academy Graduate - Cloud Foundations, FlutterFlow, Flutter, React, Vue.js, Git/GitHub", desc: "" },
];

const skills = [
  { name: "React", level: 95 },
  { name: "React Native", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Vue.js", level: 95 },
  { name: "Flutter", level: 80 },
];

function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter((p) => {
        if (selectedFilter === "Apps") return p.category === "Mobile";
        if (selectedFilter === "Web") return p.category === "Web";
        if (selectedFilter === "Backend") return p.category === "Backend";
        if (selectedFilter === "UI/UX") return p.title.includes("Portfolio");
        return true;
      });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:gliviacavalcante@gmail.com?subject=${encodeURIComponent(formData.subject || "Novo projeto")}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/40 selection:text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="w-full px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="w-8 h-8 rounded-full grid place-items-center bg-primary/15 text-primary border border-primary/30">G</span>
            <span className="text-sm tracking-tight">Glivia Cavalcante</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#works" className="hover:text-foreground transition-colors">Works</a>
            <a href="#resume" className="hover:text-foreground transition-colors">Resume</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
            <a href="https://www.linkedin.com/in/glivia-cavalcante-0b4b91274/" target="_blank">Linkedin</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full -z-10 blur-[100px] opacity-20 bg-primary" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full -z-10 blur-[80px] opacity-15 bg-secondary" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-4">I am Glivia</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-primary">Web Developer +</span><br />
              Mobile Engineer
            </h1>
            <p className="text-muted-foreground max-w-5xl mb-6 leading-relaxed">
               A Computer Science major and Front-end Developer, I bridge the gap between logical software engineering and the artistry of UI/UX Design. My expertise lies in crafting modern, intuitive interfaces for both Web and Mobile, leveraging an ecosystem that ranges from the speed of FlutterFlow to the robustness of React, React Native, and Vue.js. My goal is to ensure every pixel serves a purpose while maintaining top-tier performance.

Focused on the user interaction layer, I integrate high-end services using Supabase, Firebase, and AWS to build reactive and secure applications. My technical background allows me to collaborate strategically with back-end teams, while my designer's perspective ensures the final product is user-centric—combining clean code, accessibility, and high-fidelity design.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
                <a href="/curriculo_Glivia_Cavalcante.pdf" target="_blank">
                  Download CV
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <a href="https://github.com/Glivia" target="_blank" className="w-10 h-10 rounded-full grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/glivia-cavalcante-0b4b91274/" target="_blank" className="w-10 h-10 rounded-full grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border"></div>
          </div>

          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-primary -z-10" />
            <div className="relative w-[380px] md:w-[500px] aspect-square rounded-full p-2 border-2 border-primary/50 shadow-[0_20px_60px_-15px_rgba(0,166,192,0.5)]" style={{ background: "var(--gradient-primary)" }}>
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img src={devPortrait} alt="Glivia Cavalcante" width={500} height={500} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-mono flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My <span className="text-primary">Quality Services</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
             The services I offer to transform ideas into exceptional digital products.
            </p>
          </div>

          <div className="space-y-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative rounded-2xl p-6 md:p-7 border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="font-mono text-sm text-muted-foreground group-hover:text-primary-foreground/70">{s.n}</div>
                  <h3 className="text-xl md:text-2xl font-semibold flex-1">{s.title}</h3>
                  <p className="hidden md:block max-w-md text-sm text-muted-foreground group-hover:text-primary-foreground/85">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My <span className="text-primary">Recent Works</span></h2>
            <div className="inline-flex mt-6 p-1 rounded-full bg-card border border-border">
              {["All", "Apps", "Web", "Backend", "UI/UX"].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`px-5 py-1.5 text-xs font-medium rounded-full transition-colors ${selectedFilter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {filteredProjects.map((p) => (
              <article key={p.title} className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500 cursor-pointer">
                <div className="h-24 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-mono">
                    {p.category === "Mobile" ? <Smartphone className="w-3 h-3" /> : p.category === "Web" ? <Globe className="w-3 h-3" /> : <Code2 className="w-3 h-3" />}
                    {p.tag}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedProject(expandedProject === p.id ? null : p.id);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 grid place-items-center transition-all duration-300"
                  >
                    {expandedProject === p.id ? <ChevronUp className="w-4 h-4 text-foreground" /> : <ChevronDown className="w-4 h-4 text-foreground" />}
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <p className="font-mono text-xs text-primary">{p.stack}</p>
                  {expandedProject === p.id && p.desc && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resume — Experience & Education */}
      <section id="resume" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            { icon: Briefcase, title: "My Experience", items: experience },
            { icon: GraduationCap, title: "My Education", items: education },
          ].map((col) => (
            <div key={col.title}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full grid place-items-center bg-primary/15 text-primary border border-primary/30">
                  <col.icon className="w-4 h-4" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{col.title}</h2>
              </div>
              <div className="space-y-4">
                {col.items.map((it) => (
                  <div key={it.role} className="rounded-xl p-5 bg-card border border-border hover:border-primary/40 transition-colors">
                    <div className="font-mono text-xs text-primary mb-1">{it.period}</div>
                    <div className="font-semibold uppercase tracking-wide text-sm">{it.role}</div>
                    <div className="text-sm text-muted-foreground mt-1">{it.company}</div>
                    {it.desc && <div className="text-xs text-muted-foreground mt-2">{it.desc}</div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My <span className="text-primary">Skills</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
             Tools and technologies I use daily to deliver solid products.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((s) => (
              <div key={s.name} className="rounded-2xl p-6 bg-card border border-border text-center hover:border-primary/50 transition-colors group">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="4" fill="none" className="text-border" />
                    <circle
                      cx="40" cy="40" r="34"
                      stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"
                      className="text-primary"
                      strokeDasharray={`${2 * Math.PI * 34}`}
                      strokeDashoffset={`${2 * Math.PI * 34 * (1 - s.level / 100)}`}
                    />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center text-sm font-bold">{s.level}%</div>
                </div>
                <div className="font-medium text-sm">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's <span className="text-primary">work together!</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Have a project in mind? Tell me about it and let's build something memorable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl p-8 bg-card border border-border space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-sm" 
                />
                <input 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-sm" 
                />
              </div>
              <input 
                placeholder="Project Subject" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-sm" 
              />
              <textarea 
                placeholder="Tell me about your project..." 
                rows={5} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-sm resize-none" 
              />
              <Button type="submit" size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </form>

            <div className="rounded-2xl p-8 bg-card border border-border space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+55 88 99661-2097" },
                { icon: Mail, label: "Email", value: "gliviacavalcante@gmail.com" },
                { icon: MapPin, label: "Location", value: "Ceará, BR" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full grid place-items-center bg-primary/15 border border-primary/30 text-primary shrink-0">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-border flex gap-2">
                <a href="https://github.com/Glivia" target="_blank" className="w-10 h-10 rounded-full grid place-items-center border border-border hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/glivia-cavalcante-0b4b91274/" target="_blank" className="w-10 h-10 rounded-full grid place-items-center border border-border hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <div>© 2026 Glivia Cavalcante · Crafted with care</div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#works" className="hover:text-primary">Works</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}