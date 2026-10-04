import React, { useEffect } from 'react'
import { FiBook, FiUsers, FiAward, FiHeart, FiCheckCircle } from 'react-icons/fi'
import { MdOutlineCampaign } from 'react-icons/md'

const services = [
  {
    number: '01',
    title: 'Academic Excellence',
    label: 'Studies & Learning',
    icon: FiBook,
    theme: 'dark',
    description:
      'Currently pursuing Chartered Accountancy at Gurukul CA. With a strong foundation in +2 Science and dedication to accounting, I strive to excel in every academic endeavour I undertake.',
    points: ['CA Studies', 'Financial Accounting', 'Business Law'],
  },
  {
    number: '02',
    title: 'Community Service',
    label: 'Volunteering',
    icon: FiUsers,
    theme: 'light',
    description:
      'I actively participate in community activities and social service initiatives, believing that giving back to the community is as important as personal growth and professional development.',
    points: ['Social initiatives', 'Team-based projects', 'Community outreach'],
  },
  {
    number: '03',
    title: 'Digital Skills',
    label: 'Tech & Tools',
    icon: MdOutlineCampaign,
    theme: 'dark',
    description:
      'Proficient in MS Office Suite and Canva for creating professional documents, presentations, and visual content. I also manage social media channels and conduct effective internet research.',
    points: ['MS Office Suite', 'Canva design', 'Social media management'],
  },
  {
    number: '04',
    title: 'Personal Growth',
    label: 'Hobbies & Life',
    icon: FiHeart,
    theme: 'light',
    description:
      'Beyond academics, I enjoy photography, hiking the scenic trails of Khotang, listening to music, and reading books that broaden my perspective on life, finance, and the world at large.',
    points: ['Photography', 'Hiking & Nature', 'Reading & Music'],
  },
]

const InfoCards = () => {
  useEffect(() => {
    if (typeof aat === 'undefined') return

    const { ScrollObserver, valueAtPercentage } = aat
    const cardsContainer = document.querySelector('#ScrollCards .cards')
    const cards = document.querySelectorAll('#ScrollCards .card')

    if (!cardsContainer || cards.length === 0) return

    cardsContainer.style.setProperty('--cards-count', cards.length)
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`)

    Array.from(cards).forEach((card, index) => {
      const offsetTop = 15 + index * 15
      card.style.paddingTop = `${offsetTop}px`

      if (index === cards.length - 1) return

      const toScale = 1 - (cards.length - 1 - index) * 0.1
      const nextCard = cards[index + 1]
      const cardInner = card.querySelector('.card__inner')

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        })
        cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`
      })
    })
  }, [])

  return (
    <section id="ScrollCards">
      <div className="cards">
        {services.map((service, index) => {
          const Icon = service.icon
          const isDark = service.theme === 'dark'

          return (
            <div className="card" data-index={index} key={service.number}>
              <div
                className={`card__inner info-card info-card--${service.theme}`}
                id={isDark ? 'ServicesBG' : undefined}
              >
                <div className="card__content info-card__content">
                  <div className="info-card__top">
                    <span className="info-card__label">{service.label}</span>
                    <span className="info-card__number">{service.number}</span>
                  </div>

                  <div className="info-card__heading">
                    <span className="info-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3 className="card__title info-card__title font-soldier uppercase">
                      {service.title}
                    </h3>
                  </div>

                  <p className="card__description info-card__description">
                    {service.description}
                  </p>

                  <div className="info-card__footer">
                    <ul className="info-card__points">
                      {service.points.map((point) => (
                        <li key={point}>
                          <FiCheckCircle aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default InfoCards
