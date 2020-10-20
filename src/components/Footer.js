import React from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Junta-se a esta aventura para receber as melhores preços e novidades para novas suas férias.
                </p>

                <p className='footer-subscription-text'>
                    Você pode se desinscrever a aqualquer hora. 
                </p>

                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Seu E-mail'
                        />
                        <Button buttonStyle='btn--outline'> Inscreva-se </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2> Sobre Nós</h2>
                        <Link to='/sing-up'> Como Funciona</Link>
                        <Link to='/'>Testimunhais</Link>
                        <Link to='/'> Carreiras</Link>
                        <Link to='/'> Investidores</Link>
                        <Link to='/'> Termos de Serviços</Link>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Videos</h2>
                            <Link to='/'> Submeta o seu vídeo</Link>
                            <Link to='/'>Videos</Link>
                            <Link to='/'>Ambassadores</Link>
                            <Link to='/'> Agência</Link>
                            <Link to='/'>Influencer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;