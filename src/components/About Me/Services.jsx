import React from 'react'
import { FiBook, FiUsers, FiAward, FiHeart, FiBarChart2 } from 'react-icons/fi'
import { MdOutlineCampaign } from 'react-icons/md'
import { MdOutlineArrowBack } from 'react-icons/md'
import ScrollFloat from '../effects/ScrollFloat'
import ScrollReveal from '../effects/ScrollReveal'

const services = [
  {
    id: '01',
    title: 'CA Studies',
    shortTitle: 'Accounting',
    icon: FiBook,
    description:
      'Pursuing Chartered Accountancy at Gurukul CA with focus on financial accounting, auditing, taxation, and business law — building a strong professional foundation for the future.',
    tags: ['Finance', 'Auditing', 'Taxation'],
  },
  {
    id: '02',
    title: 'Digital Tools',
    shortTitle: 'Tech Skills',
    icon: MdOutlineCampaign,
    description:
      'Proficient in MS Office Suite (Word, Excel, PowerPoint), Canva for graphic design, and experienced in social media management and internet research for information gathering.',
    tags: ['MS Office', 'Canva', 'Social Media'],
  },
  {
    id: '03',
    title: 'Communication',
    shortTitle: 'Languages',
    icon: FiUsers,
    description:
      'Strong communicator in both Nepali and English — able to express ideas clearly, listen actively, and build meaningful connections with people from diverse backgrounds.',
    tags: ['Nepali', 'English', 'Public Speaking'],
  },
  {
    id: '04',
    title: 'Leadership',
    shortTitle: 'Teamwork',
    icon: FiAward,
    description:
      'Experienced in leading group activities, working as part of teams, and taking initiative in academic and community settings — always focused on collaboration and shared goals.',
    tags: ['Team Player', 'Initiative', 'Collaboration'],
  },
  {
    id: '05',
    title: 'Hobbies',
    shortTitle: 'Lifestyle',
    icon: FiHeart,
    description:
      'Beyond academics, I enjoy photography, hiking the trails of Khotang, listening to music, and reading — activities that keep me grounded, inspired, and creatively energised.',
    tags: ['Photography', 'Hiking', 'Reading'],
  },
]

const Services = () => {
  return (
    <section id='Services' className='mt-[112px] pb-8'>
      <div className="container">
        <div>
          <div className='font-poppins text-Primary text-lg font-semibold uppercase'>
            <ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>
              What I Do
            </ScrollFloat>
          </div>
          <div className='flex items-center justify-between'>
            <div className='font-soldier text-Primary lg:text-[152px] text-[64px] font-medium uppercase leading-[0.95]'>
              <ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>
                Activities
              </ScrollFloat>
            </div>
            <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol' />
          </div>
          <ScrollReveal containerClassName='font-poppins text-second lg:text-xl text-lg lg:w-[440px] uppercase lg:ml-[100px]'>
            From academic pursuits to personal passions — here is what shapes who I am.
          </ScrollReveal>
        </div>

        <div className='mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5'>
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className='group relative min-h-[330px] overflow-hidden rounded-lg border border-Primary/15 bg-brand/70 p-5 shadow-[0_20px_60px_rgba(22,22,22,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-coffee/50 hover:bg-Primary hover:shadow-[0_28px_80px_rgba(22,22,22,0.22)]'
              >
                <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                <div className='pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-Primary/10 transition-all duration-500 group-hover:scale-125 group-hover:border-brand/10' />
                <div className='relative z-10 flex h-full flex-col'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex h-13 w-13 items-center justify-center rounded-md border border-Primary/10 bg-Primary text-2xl text-brand transition-all duration-500 group-hover:border-brand/15 group-hover:bg-brand group-hover:text-Primary'>
                      <Icon />
                    </div>
                    <span className='font-soldier text-4xl font-medium leading-none text-Primary/20 transition-colors duration-500 group-hover:text-brand/20'>
                      {service.id}
                    </span>
                  </div>

                  <div className='mt-12'>
                    <p className='font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-coffee transition-colors duration-500 group-hover:text-brand/60'>
                      {service.shortTitle}
                    </p>
                    <h3 className='mt-3 font-soldier text-[34px] font-medium uppercase leading-[0.95] text-Primary transition-colors duration-500 group-hover:text-brand'>
                      {service.title}
                    </h3>
                    <p className='mt-5 font-poppins text-[15px] leading-7 text-second/80 transition-colors duration-500 group-hover:text-brand/75'>
                      {service.description}
                    </p>
                  </div>

                  <div className='mt-auto flex flex-wrap gap-2 pt-8'>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-Primary/10 px-3 py-1 font-poppins text-[11px] font-medium uppercase text-Primary/70 transition-colors duration-500 group-hover:border-brand/15 group-hover:text-brand/70'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
