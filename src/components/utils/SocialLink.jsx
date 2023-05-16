import React from 'react'

const SocialLink = ({ icon }) => {
  return (
   <>
      <img
        src={icon}
        alt="icon/socia6"
        className="w-6 h-6 flex items-center cursor-pointer md:w-9 md:h-9 sm:w-6 sm:h-6 transition-all duration-200 hover:scale-110"
      />
   </>
  )
}

export default SocialLink