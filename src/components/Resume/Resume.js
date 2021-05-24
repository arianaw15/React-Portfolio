import React from 'react'
import resume from './Resume-Updated.pdf'
import './index.css'

function Resume() {
    return (
            <div className="resumeImg">
        <iframe className="iResume" src={resume} frameBorder="0" scrolling="auto" height="100%" width="90%"></iframe>
      </div>
    )
}

export default Resume
