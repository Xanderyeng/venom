import React from 'react'
import { Button, Container } from '@mui/material'
import { bg } from '../../assets/bg.png'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
    <img src={bg} className='bg'/>
    <Container maxWidth="xl lg" sx={{ position: 'relative', top: '50%', left: '0', zIndex: '1' }}>
        <div className="title">
            <div className="text1">venom</div>
            <p className="x">x</p>
            <div className="text2">spider-Man</div>
        </div>
    <Button variant="outlined" href="" sx={{ color: 'whitesmoke', borderColor: 'whitesmoke', borderRadius: '8px', ":hover": {
        borderColor: 'transparent' }}} className='hero-btn'>
        Start Now
        </Button>
    </Container>

    
    </section>

  )
}

export default Hero