import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import ProjectsIcon from '../../assets/images/CounterProjectIcon.png'
import TeamIcon from '../../assets/images/CounterTeamIcon.png'
import ReviewIcon from '../../assets/images/CounterReviewIcon.png'
import CompleteIcon from '../../assets/images/ReviewCompleteICon.png'

const counterItems = [
  {
    label: 'Activities joined',
    value: 15,
    suffix: '+',
    icon: ProjectsIcon,
  },
  {
    label: 'Achievements earned',
    value: 10,
    suffix: '+',
    icon: ReviewIcon,
  },
  {
    label: 'Study years',
    value: 5,
    suffix: '+',
    icon: TeamIcon,
  },
  {
    label: 'Goals completed',
    value: 100,
    suffix: '%',
    icon: CompleteIcon,
  },
]

const Counter = () => {
  const expandRef = useRef(null)
  const speed = 6

  useEffect(() => {
    let animationFrameId = null

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollAndSpeed = window.pageYOffset / speed
        const newWidth = Math.min(Math.max(scrollAndSpeed, 72), 100)

        if (expandRef.current) {
          expandRef.current.style.width = `${newWidth}%`
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="Counter" className="counter-wrap">
      <section id="CounterBG" className="counter-panel" ref={expandRef}>
        <div className="counter-panel__intro">
          <span>Journey so far</span>
          <p>A snapshot of my milestones and personal growth</p>
        </div>

        <div id="counterDiv" className="counter-grid">
          {counterItems.map((item) => (
            <div className="counter-card" key={item.label}>
              <span className="counter-card__icon">
                <img src={item.icon} alt="" />
              </span>
              <span className="counter-card__value">
                <CountUp enableScrollSpy end={item.value} duration={4} />
                {item.suffix}
              </span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Counter
