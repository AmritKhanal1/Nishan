import React from 'react'
import PageBanner from '../components/common/PageBanner'
import ContactMe from '../components/home/ContactMe'
import ExploreMyWork from '../components/common/ExploreMyWork'

const Contact = () => {
  return (
    <>
      <PageBanner
        id='ContactBanner'
        kicker="Let's Connect & Grow Together"
        kickerMobile="Let's Connect"
        title='CONTACT'
        description="Have a question, an opportunity, or just want to say hello? I would love to hear from you"
        scrollTarget='#Contact-Section'
        className='py-20'
      />
      <div id='Contact-Section'>
        <ContactMe />
      </div>
      <div className='pb-[130px]'>
        <ExploreMyWork />
      </div>
    </>
  )
}

export default Contact