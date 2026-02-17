import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen p-4 md:p-8 pt-24 md:pt-32 overflow-hidden selection:bg-accent selection:text-black">
      {/* Background Elements */}
      <div className="absolute inset-0 dotted-grid -z-10 opacity-50"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border-[3px] border-accent-pink animate-float -z-10 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-20 w-24 h-24 border-[3px] border-accent-blue rounded-full animate-float -z-10 [animation-delay:2s] hidden lg:block"></div>
      <div className="absolute top-1/3 left-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-accent animate-float -z-10 [animation-delay:4s] hidden lg:block"></div>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center py-10 md:py-20 relative">
        
        {/* Top Micro Element: System Badge */}
        <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-pulse">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">SYSTEM STATUS: ONLINE</span>
        </div>

        {/* Main Heading: Visual Anchor */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-6xl md:text-[10rem] font-heading leading-[0.85] tracking-tighter uppercase select-none">
            FULL STACK
          </h1>
          <h1 className="text-6xl md:text-[10rem] font-heading text-outline leading-[0.85] tracking-tighter uppercase select-none">
            DEVELOPER
          </h1>
        </div>

        {/* Tagline Highlight Box */}
        <div className="bg-accent border-[3px] border-black p-6 md:p-8 max-w-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all mb-12">
          <p className="text-lg md:text-2xl font-bold uppercase leading-tight mb-4 tracking-tight text-black">
            I build digital products that refuse to be boring.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-mono font-bold text-black/70">
            <span>React</span> • <span>Node</span> • <span>AI</span> • <span>TypeScript</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            href="#projects" 
            className="group bg-black text-white px-8 md:px-12 py-4 md:py-6 border-[3px] border-black hover:bg-accent hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 flex items-center gap-3 font-heading text-xl md:text-2xl"
          >
            VIEW_PROJECTS
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
          <button 
            className="bg-white text-black px-8 md:px-12 py-4 md:py-6 border-[3px] border-black hover:bg-accent-pink hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 font-heading text-xl md:text-2xl"
          >
            DOWNLOAD_CV
          </button>
        </div>
      </section>

      {/* About Preview Section (Quick Identity) */}
      <section id="about" className="py-20 border-t-[3px] border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Short Intro */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading leading-none">
              WHO_IS_<span className="text-accent-pink">ANURAG?</span>
            </h2>
            <div className="space-y-4 font-mono font-bold text-lg md:text-xl">
              <p className="flex items-center gap-3">
                <span className="bg-black text-white px-2 py-0.5 text-xs tracking-tighter">01</span>
                B.Tech Computer Science Student
              </p>
              <p className="flex items-center gap-3">
                <span className="bg-black text-white px-2 py-0.5 text-xs tracking-tighter">02</span>
                Full Stack Web Developer
              </p>
              <p className="flex items-center gap-3">
                <span className="bg-black text-white px-2 py-0.5 text-xs tracking-tighter">03</span>
                AI & Automation Builder
              </p>
              <p className="flex items-center gap-3 text-accent-blue">
                <span className="bg-accent-blue text-white px-2 py-0.5 text-xs tracking-tighter">04</span>
                Persistent Problem Solver
              </p>
            </div>
            <p className="font-mono text-sm md:text-base leading-relaxed text-black/60 max-w-xl italic">
              "Building robust systems that bridge the gap between complex engineering and intuitive user experiences. Focused on clean architecture and high-performance logic."
            </p>
          </div>

          {/* Right: System / Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="PROJECTS_BUILT" value="12+" color="bg-white" />
            <StatCard label="TECH_STACKS" value="10+" color="bg-accent" />
            <StatCard label="DSA_PRACTICE" value="500+" color="bg-white" />
            <StatCard label="CURRENT_STATUS" value="BUILDING" color="bg-accent-pink text-white" />
          </div>
        </div>
      </section>

      {/* Skills Section (Capability Visualization) */}
      <section id="skills" className="py-20 border-t-[3px] border-black">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-heading leading-none mb-4">
            TECHNICAL_<span className="text-accent-blue">MODULES</span>
          </h2>
          <p className="font-mono text-sm font-bold text-black/50 uppercase tracking-widest">
            // CORE_CAPABILITIES_REPORT.V2
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillModule 
            title="FRONTEND" 
            skills={["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]} 
            color="bg-white"
          />
          <SkillModule 
            title="BACKEND" 
            skills={["Node.js / Express", "Python / FastAPI", "PostgreSQL / MongoDB", "Redis", "Docker"]} 
            color="bg-accent"
          />
          <SkillModule 
            title="AI_GEN_AI" 
            skills={["LLM Applications", "Prompt Engineering", "OpenAI / Anthropic SDKs", "Pinecone / Vector DBs", "RAG Pipelines"]} 
            color="bg-white"
          />
          <SkillModule 
            title="ENGINEERING" 
            skills={["System Design", "CI/CD Automations", "Cloud (AWS/GCP)", "Data Structures", "Security Protocols"]} 
            color="bg-accent-pink text-white"
          />
        </div>
      </section>

      {/* Featured Projects Section (Your Proof) */}
      <section id="projects" className="py-20 border-t-[3px] border-black">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-heading leading-none mb-4">
            SELECTED_<span className="text-accent-pink">WORK</span>
          </h2>
          <p className="font-mono text-sm font-bold text-black/50 uppercase tracking-widest">
            // REPOSITORY_SNAPSHOT.2024
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProjectCard 
            title="DEBUGLY.AI" 
            description="AI Developer Assistant leveraging LLM APIs to streamline debugging and coding workflows."
            stack={["Next.js", "TypeScript", "Groq API", "AI Agents"]}
            color="bg-accent"
            liveUrl="https://debugly-h3x4.vercel.app/"
            githubUrl="https://github.com/UkatoSpeaks"
          />
          <ProjectCard 
            title="ZENFLOW.SaaS" 
            description="Productivity-focused platform with real-time dashboards and persistent user workflow systems."
            stack={["Next.js", "Node.js", "MongoDB", "Firebase"]}
            color="bg-white"
            liveUrl="https://zen-flow-dusky.vercel.app/"
            githubUrl="https://github.com/UkatoSpeaks"
          />
          <ProjectCard 
            title="INDIALAND.LOC" 
            description="Scalable location discovery platform focused on structured regional data and user exploration."
            stack={["Next.js", "Node.js", "MongoDB", "REST APIs"]}
            color="bg-white"
            liveUrl="https://india-land-eight.vercel.app/"
            githubUrl="https://github.com/UkatoSpeaks"
          />
          <ProjectCard 
            title="SPOTT.DISCOVERY" 
            description="Discovery-driven platform focused on user engagement and scalable content delivery."
            stack={["React", "Node.js", "MongoDB", "REST APIs"]}
            color="bg-accent-blue text-white"
            liveUrl="https://spott-five.vercel.app/"
            githubUrl="https://github.com/UkatoSpeaks"
          />
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            href="/archive" 
            className="group border-[3px] border-black px-12 py-5 bg-white font-heading text-xl md:text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 uppercase"
          >
            REST_OF_THE_ARCHIVE
            <span className="group-hover:rotate-45 transition-transform">↗</span>
          </Link>
        </div>
      </section>

      {/* Activity Section (Coding Consistency) */}
      <section id="logs" className="py-20 border-t-[3px] border-black">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-heading leading-none mb-4">
            SYSTEM_<span className="text-accent-blue">ACTIVITY</span>
          </h2>
          <p className="font-mono text-sm font-bold text-black/50 uppercase tracking-widest">
            // PERFORMANCE_METRICS.LOG
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* GitHub Contribution Mockup */}
          <div className="lg:col-span-2 border-[3px] border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-3">
              <h3 className="font-heading text-xl uppercase tracking-tighter">[ GITHUB_CONTRIBUTIONS ]</h3>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 border border-black ${i === 3 ? 'bg-green-500' : 'bg-green-200'}`}></div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-1 md:gap-2">
              {[...Array(60)].map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square border border-black/10 ${
                    Math.random() > 0.7 ? 'bg-green-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]' : 
                    Math.random() > 0.4 ? 'bg-green-300' : 'bg-gray-100'
                  }`}
                  title={`Activity Level: ${i}`}
                ></div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div className="font-mono text-[10px] font-bold uppercase text-black/40">
                0xCOMMITS_PER_CYCLE: STEADY
              </div>
              <Link href="https://github.com/UkatoSpeaks" className="bg-black text-white px-4 py-1 text-xs font-bold uppercase hover:bg-accent hover:text-black transition-colors">
                OPEN_PROFILE_&gt;
              </Link>
            </div>
          </div>

          {/* System Status / LeetCode Stats */}
          <div className="flex flex-col gap-6">
            <div className="border-[3px] border-black p-6 bg-accent shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-heading text-xl uppercase tracking-tighter mb-4 opacity-70">// STATUS_REPORT</h3>
              <ul className="font-mono text-sm font-bold space-y-3">
                <li className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-green-600 animate-pulse">ACTIVE_DEV</span>
                </li>
                <li className="flex justify-between">
                  <span>COMMITS:</span>
                  <span>DAILY</span>
                </li>
                <li className="flex justify-between">
                  <span>LOCATION:</span>
                  <span>DELHI_SYSTEM</span>
                </li>
                <li className="flex justify-between text-accent-pink">
                  <span>BUILDING:</span>
                  <span>NEXT_GEN_UI</span>
                </li>
              </ul>
            </div>

            <div className="border-[3px] border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-heading text-xl uppercase tracking-tighter mb-4 opacity-70">// PROBLEM_SOLVING</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-heading leading-none">500+</span>
                <span className="font-mono text-xs font-bold opacity-50 uppercase">Solved</span>
              </div>
              <div className="w-full h-4 border-2 border-black bg-gray-100 overflow-hidden mb-4">
                <div className="h-full bg-accent-pink w-[85%] border-r-2 border-black"></div>
              </div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-50">
                STREAK: 124_DAYS_ACTIVE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Logs / Engineering Thinking */}
      <section id="dev-logs" className="py-20 border-t-[3px] border-black">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-heading leading-none mb-4">
            DEV_<span className="text-accent-pink">LOGS</span>
          </h2>
          <p className="font-mono text-sm font-bold text-black/50 uppercase tracking-widest">
            // ENGINEERING_THOUGHT_PROCESS.MD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DevLogCard 
            id="LOG_001"
            date="FEB 12, 2026"
            insight="Optimized API response times by 40% using Redis for query caching. Latency is the silent killer of user experience."
            color="bg-white"
          />
          <DevLogCard 
            id="LOG_002"
            date="FEB 08, 2026"
            insight="Learned that UI performance during scroll events matters more than animation complexity. 60FPS is non-negotiable."
            color="bg-accent"
          />
          <DevLogCard 
            id="LOG_003"
            date="FEB 03, 2026"
            insight="Building AI agents taught me that system reliability and prompt engineering are often more critical than model size."
            color="bg-white"
          />
          <DevLogCard 
            id="LOG_004"
            date="JAN 28, 2025"
            insight="Reduced bundle size by 30% by migrating to targeted imports. Architecture is as much about removal as it is about addition."
            color="bg-accent-blue text-white"
          />
          <DevLogCard 
            id="LOG_005"
            date="JAN 20, 2025"
            insight="Functional components are not just code; they represent units of maintainability. Refactoring is a feature, not a chore."
            color="bg-white"
          />
          <DevLogCard 
            id="LOG_006"
            date="JAN 15, 2025"
            insight="Distributed systems require strict observability. If you can't measure it, you shouldn't build it."
            color="bg-accent"
          />
        </div>
      </section>

      {/* Achievements / Experience Section (System Verification) */}
      <section id="experience" className="py-20 border-t-[3px] border-black">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-heading leading-none mb-4">
            CREDENTIAL_<span className="text-accent-blue">VERIFICATION</span>
          </h2>
          <p className="font-mono text-sm font-bold text-black/50 uppercase tracking-widest">
            // TRUST_LAYER_CONFIRMED.0x01
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Experience: Tsole */}
          <div className="border-[3px] border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent px-4 py-1 font-mono font-bold text-xs border-b-2 border-l-2 border-black">
              LIVE_STATUS: COMPLETED
            </div>
            <h3 className="text-2xl md:text-4xl font-heading mb-2 uppercase tracking-tight">
              FULL_STACK_INTERN @ TSOLE
            </h3>
            <p className="font-mono text-sm font-bold text-accent-pink mb-6 uppercase">
              SaaS_STARTUP // 2_MONTH_CYCLE
            </p>
            <ul className="space-y-4 font-mono text-sm font-bold mb-8">
              <li className="flex gap-3">
                <span className="text-accent-blue">✔</span>
                <span>Optimized core SaaS dashboard UI for 100+ active enterprise users.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-blue">✔</span>
                <span>Integrated RESTful APIs with Node.js backend for real-time telemetry.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-blue">✔</span>
                <span>Implemented modular component architecture to speed up development cycles.</span>
              </li>
            </ul>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase opacity-30 mt-auto">
              0xEXPERIENCE_VALIDATED_HASH_8F92
            </div>
          </div>

          {/* Rapid Verification Checklist */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VerificationModule label="PROJECTS_DEPLOYED" value="12+" />
              <VerificationModule label="AI_SYSTEMS_BUILT" value="05+" />
              <VerificationModule label="FULL_STACK_READY" value="YES" color="bg-accent" />
              <VerificationModule label="SYSTEM_DOWNTIME" value="0.0%" color="bg-accent-pink text-white" />
            </div>
            
            <div className="border-[3px] border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-grow">
              <h3 className="font-heading text-xl uppercase mb-4 opacity-50">// SYSTEM_HARDENING</h3>
              <p className="font-mono text-sm font-bold leading-relaxed">
                "Consistently shipping robust code directly to production environments. 
                Proven track record in building end-to-end applications from scratch to deployment."
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['DOCKER', 'AWS', 'CI/CD', 'TESTING'].map(tag => (
                  <span key={tag} className="border-2 border-black px-3 py-1 text-[10px] font-bold font-mono">
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section (System Uplink) */}
      <section id="contact" className="py-20 border-t-[3px] border-black relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 -z-10"></div>
        
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <p className="font-mono text-xs md:text-sm font-bold text-accent-blue tracking-[0.4em] uppercase mb-4">
              // UPLINK_INITIATED
            </p>
            <h2 className="text-5xl md:text-8xl font-heading leading-[0.9] tracking-tighter uppercase mb-2">
              READY_TO_<span className="text-accent-pink">SHIP</span>
            </h2>
            <h2 className="text-3xl md:text-6xl font-heading text-outline leading-none uppercase">
              THE_NEXT_PRODUCT
            </h2>
          </div>

          <p className="max-w-2xl font-mono text-sm md:text-lg font-bold leading-relaxed mb-12 opacity-70">
            Currently accepting engineering missions for high-performance teams and forward-thinking products. 
            Let's build something that refuses to be boring.
          </p>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactLink 
              label="EMAIL_UPLINK" 
              value="ANURAG.C@GMAIL" 
              href="mailto:chaudharyanurag801@gmail.com" 
              color="bg-white"
            />
            <ContactLink 
              label="LINKEDIN_CORE" 
              value="/IN/ANURAG-C" 
              href="https://www.linkedin.com/in/anurag-chaudhary-238625309" 
              color="bg-accent"
            />
            <ContactLink 
              label="GITHUB_REPO" 
              value="/UkatoSpeaks" 
              href="https://github.com/UkatoSpeaks" 
              color="bg-white"
            />
            <ContactLink 
              label="GET_RESUME" 
              value="RESUME.PDF" 
              href="/resume.pdf" 
              color="bg-accent-pink text-white"
            />
          </div>

          <div className="mt-20 w-full max-w-xl border-[3px] border-black p-1 bg-black shadow-[12px_12px_0px_0px_rgba(255,0,255,0.3)]">
            <div className="bg-white p-6 border-2 border-black">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-black/10 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto font-mono text-[10px] font-bold opacity-30 tracking-widest uppercase">system_contact_v1.0</span>
              </div>
              <div className="font-mono text-sm md:text-base text-left space-y-2">
                <p className="flex gap-2">
                  <span className="text-green-500 font-bold">C:\&gt;</span>
                  <span>anurag_p --contact --urgent</span>
                </p>
                <p className="text-gray-400">Searching for secure uplink...</p>
                <p className="text-black font-bold">UPLINK_ESTABLISHED: [100% SUCCESS]</p>
                <Link href="mailto:chaudharyanurag801@gmail.com" className="inline-block bg-accent px-4 py-2 mt-4 font-heading text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase tracking-tighter">
                  EXECUTE_MESSAGE_SEQUENCE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (System Shutdown Style) */}
      <footer className="mt-20 border-t-[3px] border-black pt-12 pb-16 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-2">
            <h3 className="font-heading text-3xl md:text-5xl uppercase tracking-tighter leading-none">
              ANURAG<span className="text-accent-pink">.</span>exe
            </h3>
            <p className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-black/40 uppercase">
              © 2026 ALL_SYSTEMS_MONITORED // VERSION_1.0_STABLE
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 w-full md:w-auto border-[3px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">STATUS</span>
              <span className="font-mono text-xs font-bold text-green-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                RUNNING
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">DEPLOY</span>
              <span className="font-mono text-xs font-bold text-black uppercase">RECENT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">UPTIME</span>
              <span className="font-mono text-xs font-bold text-black uppercase">99.99%</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">AUTH</span>
              <span className="font-mono text-xs font-bold text-accent-blue uppercase">VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar Gradient Decoration (Brutalist style) */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-black"></div>
        <div className="absolute bottom-2 left-0 w-full h-1 bg-accent-pink opacity-50"></div>
        <div className="absolute bottom-3 left-0 w-full h-[1px] bg-accent opacity-30"></div>
      </footer>
    </main>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className={`border-[3px] border-black p-4 md:p-6 ${color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col justify-between aspect-square md:aspect-auto`}>
      <h3 className="text-[10px] md:text-xs font-mono font-bold tracking-widest leading-none mb-4 opacity-70 uppercase">
        // {label}
      </h3>
      <p className="text-3xl md:text-5xl font-heading leading-none tracking-tighter">
        {value}
      </p>
    </div>
  );
}

function SkillModule({ title, skills, color }: { title: string; skills: string[]; color: string }) {
  return (
    <div className={`border-[3px] border-black p-6 ${color} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col`}>
      <div className="border-b-[2px] border-black pb-3 mb-5">
        <h3 className="text-xl font-heading leading-none tracking-tight">
          [ {title} ]
        </h3>
      </div>
      <ul className="space-y-3 font-mono font-bold text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-accent-blue opacity-50">#</span>
            {skill}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6 opacity-30 font-mono text-[9px] font-bold uppercase tracking-widest">
        0xSKILL_LOADED_{title}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, stack, color, liveUrl, githubUrl }: { title: string; description: string; stack: string[]; color: string; liveUrl?: string; githubUrl?: string }) {
  return (
    <div className="group flex flex-col border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all overflow-hidden">
      {/* Visual Preview Area */}
      <div className={`h-48 md:h-64 border-b-[3px] border-black ${color} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 dotted-grid opacity-20"></div>
        <div className="z-10 text-4xl md:text-6xl font-heading text-black opacity-10 select-none tracking-tighter uppercase whitespace-nowrap">
          {title} {title}
        </div>
        {/* Technical Wireframe Elements */}
        <div className="absolute top-2 left-2 border border-black/20 p-1 text-[8px] font-mono">0xRENDER_ACTIVE</div>
        <div className="absolute bottom-2 right-2 border border-black/20 p-1 text-[8px] font-mono">WIDTH: 100% | SCALE: 1.0</div>
        <div className="w-4/5 h-3/4 border-2 border-black/10 flex items-center justify-center animate-pulse">
          <div className="w-full h-[1px] bg-black/10"></div>
          <div className="h-full w-[1px] bg-black/10 absolute"></div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <h3 className="text-2xl md:text-3xl font-heading mb-3 uppercase tracking-tight">
          {title}
        </h3>
        <p className="font-mono text-sm md:text-base font-medium mb-6 leading-relaxed opacity-70">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {stack.map((item, index) => (
            <span key={index} className="bg-black text-white text-[10px] md:text-xs font-bold px-2 py-0.5 tracking-tighter border border-black">
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-4">
          <Link 
            href={liveUrl || "#"} 
            target={liveUrl ? "_blank" : undefined}
            className="bg-accent border-[2px] border-black py-3 font-heading text-lg hover:bg-black hover:text-white transition-colors uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 flex justify-center items-center"
          >
            LIVE_VIEW
          </Link>
          <Link 
            href={githubUrl || "#"} 
            target={githubUrl ? "_blank" : undefined}
            className="bg-white border-[2px] border-black py-3 font-heading text-lg hover:bg-black hover:text-white transition-colors uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 flex justify-center items-center"
          >
            SOURCE_CODE
          </Link>
        </div>
      </div>
    </div>
  );
}

function DevLogCard({ id, date, insight, color }: { id: string; date: string; insight: string; color: string }) {
  return (
    <div className={`group border-[3px] border-black p-6 ${color} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-start`}>
      <div className="w-full flex justify-between items-center mb-6 border-b-2 border-black/10 pb-3">
        <span className="bg-black text-white px-2 py-0.5 text-[10px] font-mono font-bold tracking-tighter">
          {id}
        </span>
        <span className="font-mono text-[10px] font-bold text-black/40 uppercase">
          {date}
        </span>
      </div>
      <p className="font-mono text-sm font-bold leading-relaxed mb-6 group-hover:italic transition-all">
        "{insight}"
      </p>
      <div className="mt-auto flex items-center gap-2 opacity-30 font-mono text-[9px] font-bold uppercase tracking-widest group-hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        ENTRY_VERIFIED
      </div>
    </div>
  );
}

function VerificationModule({ label, value, color = "bg-white" }: { label: string; value: string; color?: string }) {
  return (
    <div className={`border-[3px] border-black p-4 ${color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col justify-between`}>
      <h3 className="text-[10px] font-mono font-bold tracking-widest mb-2 opacity-50 uppercase leading-none">
        // {label}
      </h3>
      <div className="flex items-center gap-2">
        <span className="text-accent-blue font-bold">✔</span>
        <span className="text-xl md:text-2xl font-heading tracking-tight leading-none">{value}</span>
      </div>
    </div>
  );
}

function ContactLink({ label, value, href, color }: { label: string; value: string; href: string; color: string }) {
  return (
    <Link 
      href={href}
      className={`group border-[3px] border-black p-5 ${color} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-start`}
    >
      <span className="text-[10px] font-mono font-bold tracking-widest opacity-50 uppercase mb-3">
        // {label}
      </span>
      <span className="font-heading text-lg md:text-xl tracking-tighter uppercase group-hover:italic transition-all">
        {value}
      </span>
      <span className="mt-4 text-xs font-mono font-bold group-hover:translate-x-1 transition-transform">
        UPLINK_&gt;
      </span>
    </Link>
  );
}
