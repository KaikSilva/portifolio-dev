// -- Components
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Contact(){
    return (
        <>
            <OverlayTrigger  overlay={<Tooltip id="tooltip-disabled">Linkedin</Tooltip>}>
                <a className="me-3" target="_blank" href="https://www.linkedin.com/in/kaik-silva" rel="noreferrer" >
                    <img width="30px" style={{filter:"invert(100%)"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                </a>
            </OverlayTrigger>
            <OverlayTrigger  overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>}>
                <a className="me-3" target="_blank" href="https://github.com/KaikSilva" rel="noreferrer" >
                    <img width="30px" style={{filter:"invert(100%)"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
            </OverlayTrigger>
            <OverlayTrigger  overlay={<Tooltip id="tooltip-disabled">Whastapp</Tooltip>}>
                <a className="me-3" target="_blank" href="https://wa.me/5519996693306" rel="noreferrer" >
                    <img width="30px" style={{filter:"invert(100%)"}} src="https://cdn-icons-png.flaticon.com/512/733/733641.png" />
                </a>
            </OverlayTrigger>
        </>
    )
}

export default Contact;