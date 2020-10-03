import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoplay loop muted />
            <h1>A Aventura espera por você!</h1>
                <p> O que você está esperando?</p>
                <div className='hero-btns'>
                    <div className='hero-btns'>
                        <Button
                        buttonStyle='btn--outline'
                        buttonSize = 'btn-large'
                        >
                            Começa Aqui
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={console.log('hey')}
                        >
                            VEJA O TRAILER <i className='far fa-play-circle'/>
                        </Button>
                    </div>
                </div>
        </div>
    );
}

export default HeroSection;