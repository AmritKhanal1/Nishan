import React from 'react'
import { Link } from 'react-router'
import { LuGraduationCap, LuBookOpen, LuCalendar, LuMapPin, LuAward, LuSparkles } from 'react-icons/lu'
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'
import ScrollFloat from '../effects/ScrollFloat'
import Magnet from '../effects/Magnet'

const milestones = [
  {
    step: '01',
    status: 'In Progress',
    period: 'Present',
    title: 'Chartered Accountancy (CA)',
    subtitle: 'Professional Qualification (CAP-I)',
    institution: 'Gurukul CA',
    location: 'Kathmandu, Nepal',
    badgeClass: 'bg-coffee/15 text-coffee border-coffee/30',
    description:
      'Pursuing the prestigious Chartered Accountancy course, developing rigorous analytical skills in financial accounting, mercantile law, business mathematics, economics, and auditing fundamentals.',
    keySubjects: [
      'Financial Accounting',
      'Mercantile & Corporate Law',
      'Business Mathematics & Statistics',
      'Business Economics',
      'Auditing Principles',
    ],
    highlight: 'Building a strong technical foundation in preparation for professional articleship and audit practice.',
  },
  {
    step: '02',
    status: 'Completed',
    period: '2021 – 2023',
    title: '+2 Higher Secondary (Science)',
    subtitle: 'National Examination Board (NEB)',
    institution: 'Texas International College',
    location: 'Mitrapark, Kathmandu, Nepal',
    badgeClass: 'bg-Primary/10 text-Primary border-Primary/20',
    description:
      'Completed higher secondary education in the Science stream. Cultivated strong quantitative aptitude, systematic logic, and deep analytical problem-solving through intensive studies.',
    keySubjects: [
      'Advanced Mathematics',
      'Physics',
      'Chemistry',
      'English & Scientific Communication',
    ],
    highlight: 'Sharpened mathematical reasoning and disciplined academic focus that now empowers my accounting studies.',
  },
  {
    step: '03',
    status: 'Graduated',
    period: 'Completed',
    title: 'Secondary Education Examination (SEE)',
    subtitle: 'Foundational Schooling',
    institution: 'Shree Champawati Madhyamik Vidyalaya',
    location: 'Bijayakharka, Khotang, Nepal',
    badgeClass: 'bg-Primary/10 text-Primary border-Primary/20',
    description:
      'Graduated school with academic distinction. Developed foundational values of diligence, curiosity, teamwork, and leadership within the school and local community.',
    keySubjects: [
      'Compulsory Mathematics',
      'Science & Technology',
      'Social Studies & Civics',
      'English & Nepali Literature',
    ],
    highlight: 'Roots in Khotang that shaped a persistent work ethic, humility, and dedication to lifelong learning.',
  },
]

const AcademicJourney = () => {
  return (
    <section id="Academic_Journey" className="lg:mt-60 mt-40 overflow-hidden">
      <div className="container">
        {/* ================= Header ================= */}
        <div className="mb-14 flex flex-col items-start justify-between gap-8 border-y border-Primary/15 py-8 md:flex-row md:items-end lg:mb-20">
          <div>
            <div className="font-poppins text-Primary/70 font-semibold uppercase lg:text-base text-sm tracking-[2px]">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                MY EDUCATION & MILESTONES
              </ScrollFloat>
            </div>
            <div className="font-soldier text-Primary font-semibold lg:text-[76px] text-[42px] leading-[0.9] uppercase lg:mt-5 mt-3">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=70%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                Academic Journey
              </ScrollFloat>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Magnet padding={15} magnetStrength={4}>
              <Link
                to="/about"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-Primary/20 px-6 font-poppins text-sm font-semibold uppercase text-Primary transition hover:border-coffee hover:bg-coffee hover:text-brand"
              >
                More About Me
                <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnet>
          </div>
        </div>

        {/* ================= Content Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Summary Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div
              data-aos="fade-up"
              className="rounded-3xl border border-Primary/15 bg-white/40 backdrop-blur-md p-8 shadow-[0_20px_50px_rgba(22,22,22,0.06)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-Primary text-brand text-2xl">
                  <LuGraduationCap />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-coffee/30 bg-coffee/10 px-3 py-1 font-poppins text-xs font-semibold uppercase tracking-wider text-coffee">
                  <LuSparkles className="text-coffee" /> CA Aspirant
                </span>
              </div>

              <h3 className="font-soldier text-Primary text-3xl font-semibold uppercase mt-6 tracking-wide">
                Path to Professional Excellence
              </h3>
              <p className="font-poppins text-second/80 text-sm leading-relaxed mt-3">
                Committed to disciplined learning, critical reasoning, and ethical responsibility in the field of accounting, finance, and commerce.
              </p>

              {/* Quick Summary Stats */}
              <div className="mt-8 space-y-4 border-t border-Primary/10 pt-6">
                <div className="flex items-center justify-between font-poppins text-sm">
                  <span className="text-second/70">Current Stream</span>
                  <span className="font-semibold text-Primary">Chartered Accountancy</span>
                </div>
                <div className="flex items-center justify-between font-poppins text-sm">
                  <span className="text-second/70">Institution</span>
                  <span className="font-semibold text-Primary">Gurukul CA</span>
                </div>
                <div className="flex items-center justify-between font-poppins text-sm">
                  <span className="text-second/70">Earlier Background</span>
                  <span className="font-semibold text-Primary">+2 Science (NEB)</span>
                </div>
                <div className="flex items-center justify-between font-poppins text-sm">
                  <span className="text-second/70">Hometown</span>
                  <span className="font-semibold text-Primary">Khotang, Nepal</span>
                </div>
              </div>

              {/* Quote Block */}
              <div className="mt-8 rounded-2xl border border-coffee/20 bg-coffee/5 p-5">
                <p className="font-poppins italic text-xs text-coffee leading-relaxed">
                  "Driven by curiosity and defined by persistence — building a future shaped by knowledge, integrity, and purpose."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {milestones.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group relative rounded-3xl border border-Primary/15 bg-white/60 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-coffee/50 hover:shadow-[0_20px_60px_rgba(191,74,26,0.12)]"
              >
                {/* Header row inside card */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-Primary/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-soldier text-3xl font-bold text-coffee/80">
                      {item.step}
                    </span>
                    <div>
                      <span className={`inline-block rounded-full border px-3 py-0.5 font-poppins text-xs font-semibold uppercase tracking-wider ${item.badgeClass}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-poppins text-second/70">
                    <span className="flex items-center gap-1.5">
                      <LuCalendar className="text-coffee" /> {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <LuMapPin className="text-coffee" /> {item.location}
                    </span>
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="mt-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h4 className="font-soldier text-2xl sm:text-3xl font-semibold uppercase text-Primary group-hover:text-coffee transition-colors duration-300">
                      {item.title}
                    </h4>
                    <span className="font-poppins text-xs font-medium text-coffee uppercase tracking-wide">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-sm font-poppins font-medium text-second/90">
                    <LuBookOpen className="text-coffee" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="mt-4 font-poppins text-sm text-second/85 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Coursework & Subjects Tags */}
                  <div className="mt-5">
                    <p className="font-poppins text-xs font-bold uppercase text-Primary/70 tracking-wider mb-2.5">
                      Key Subjects & Core Focus:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.keySubjects.map((sub, i) => (
                        <span
                          key={i}
                          className="rounded-xl border border-Primary/10 bg-brand/50 px-3 py-1 font-poppins text-xs font-medium text-Primary transition hover:border-coffee/40"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Takeaway / Highlight Box */}
                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-Primary/10 bg-Primary/[0.03] p-4 text-xs font-poppins text-second/90">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-coffee text-sm" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademicJourney
