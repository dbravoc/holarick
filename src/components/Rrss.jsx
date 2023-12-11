import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Rrss = () => {
    return (
        <>
        <div>
            <a href="mailto:mariano@laboraljuridico.com"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a>
        </div>
        <div>
            <a href="https://github.com/dbravoc"><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
            <a href="https://github.com/dbravoc"><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
            <a href="https://www.linkedin.com/in/bravocisterna/"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
        </div>
        
        </>
    );
};

export default Rrss;
