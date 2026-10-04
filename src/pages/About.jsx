import React from 'react'
import PageBanner from '../components/common/PageBanner'
import AboutText from '../components/About Me/AboutText'
import Services from '../components/About Me/Services'
import Review from '../components/About Me/Review'
import ExploreMyWork from '../components/common/ExploreMyWork'

const About = () => {

  return (
    <>
      <section className='my-20'>
        <PageBanner
          id='AboutBanner'
          kicker='NISHAN KHANAL'
          kickerMobile="About Nishan"
          title='ABOUT ME'
          description='CA student, critical thinker, and lifelong learner passionate about finance, integrity, and growth'
          scrollTarget='#AboutMeText'
        />
        <AboutText />
        <Services />
        <Review />
        <div className='pt-[130px]'>
          <ExploreMyWork />
        </div>
      </section>
    </>
  )
}

export default About
