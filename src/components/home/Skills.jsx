import React from 'react'
import { FiMonitor, FiUsers, FiSearch, FiBarChart2 } from 'react-icons/fi'
import { MdOutlineCampaign } from 'react-icons/md'
import ScrollFloat from '../effects/ScrollFloat'

const skillGroups = [
  {
    title: 'Technical Skills',
    summary: 'Tools and software I use for productivity, design, and digital work.',
    skills: [
      { name: 'MS Word', image: 'https://img.icons8.com/color/48/microsoft-word-2019--v2.png' },
      { name: 'MS Excel', image: 'https://img.icons8.com/color/48/microsoft-excel-2019--v2.png' },
      { name: 'MS PowerPoint', image: 'https://img.icons8.com/color/48/microsoft-powerpoint-2019--v2.png' },
      { name: 'Canva', image: 'https://img.icons8.com/color/48/canva.png' },
      { name: 'Internet Research', image: 'https://img.icons8.com/color/48/google-logo.png' },
      { name: 'Social Media', image: 'https://img.icons8.com/color/48/facebook-new.png' },
    ],
  },
  {
    title: 'Soft Skills',
    summary: 'Interpersonal and professional strengths that define how I work and connect.',
    skills: [
      { name: 'Communication', icon: FiUsers },
      { name: 'Teamwork', icon: FiUsers },
      { name: 'Problem Solving', icon: FiBarChart2 },
      { name: 'Leadership', icon: MdOutlineCampaign },
      { name: 'Time Management', icon: FiMonitor },
      { name: 'Critical Thinking', icon: FiSearch },
    ],
  },
  {
    title: 'Languages',
    summary: 'Languages I can speak, write, and communicate in effectively.',
    skills: [
      { name: 'Nepali', image: 'https://img.icons8.com/color/48/nepal.png' },
      { name: 'English', image: 'https://img.icons8.com/color/48/great-britain.png' },
    ],
  },
  {
    title: 'Interests',
    summary: 'Areas I am passionate about exploring and building expertise in.',
    skills: [
      { name: 'Finance & Accounting', icon: FiBarChart2 },
      { name: 'Reading', icon: FiMonitor },
      { name: 'Photography', icon: FiSearch },
      { name: 'Hiking', icon: FiMonitor },
      { name: 'Music', icon: MdOutlineCampaign },
      { name: 'Volunteering', icon: FiUsers },
    ],
  },
]

const SkillIcon = ({ skill }) => {
  if (skill.image) {
    return <img src={skill.image} alt="" />
  }

  const Icon = skill.icon
  return <Icon aria-hidden="true" />
}

export const Skills = () => {
  return (
    <section className="md:pt-20 pt-25">
      <div className="container">
        <div className="font-poppins text-Primary font-semibold lg:text-2xl text-lg text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=80%"
            scrollEnd="bottom bottom-=80%"
            stagger={0.03}
          >
            MY SKILLS
          </ScrollFloat>
        </div>
        <h2 className="font-soldier text-Primary font-medium lg:text-5xl text-[30px] uppercase text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=30%"
            scrollEnd="bottom bottom-=60%"
            stagger={0.03}
          >
            Strengths & Expertise
          </ScrollFloat>
        </h2>

        <div className="md:mt-14 mt-8 grid items-stretch gap-6 grid-cols-1">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article className="skill-group" data-aos="fade-up" key={group.title}>
                <div className="skill-group__header">
                  <span>{group.title}</span>
                  <p>{group.summary}</p>
                </div>

                <div className="skill-group__items">
                  {group.skills.map((skill) => (
                    <div className="skill-pill" key={`${group.title}-${skill.name}`}>
                      <span className="skill-pill__icon">
                        <SkillIcon skill={skill} />
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
