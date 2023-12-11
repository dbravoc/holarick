import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Rrss = () => {
    return (
        <>
        <div>
            <a href="https://github.com/dbravoc"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
            <a href="https://www.linkedin.com/in/bravocisterna/"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
        </div>
        
        </>
    );
};

export default Rrss;
