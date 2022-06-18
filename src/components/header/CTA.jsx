import React from 'react'
import CV from '../../assets/cv.pdf'


const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Downnload CV</a>
            <a href="#CONTACT" className="btn btn-primary">Let's Talk</a>
            
        </div>
    )
}

export default CTA
