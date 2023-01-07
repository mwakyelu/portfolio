import React from 'react'
import {BsTwitter, BsGithub, BsLinkedin, BsLink} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div>
        <div className="app__social">
            <a href='#' className='app__social-icon'>
                <BsTwitter/>
            </a>
            <a href='#' className='app__social-icon'>
                <BsGithub/>
            </a>
            <a href='#' className='app__social-icon'>
                <BsLinkedin/>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia