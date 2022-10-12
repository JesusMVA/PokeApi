import React from 'react'
import pokeball from '../assets/pokeball.png'

const Footer = () => {
  return (
    <footer>
        <div className="footerG">
            <div><img src={pokeball}></img></div>
            <div>
                <h4>Jesus Manuel Velasquez Arias</h4>
                <p>jmvelasquez935@misena.edu.co</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer