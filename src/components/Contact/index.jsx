// -- Components
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {FiArrowUpRight} from 'react-icons/fi'
import styles from "./style.module.scss";

function Contact(){
    return (
        <Row className='ps-1'>
            <div  className='p-0' style={{width:"fit-content"}}>
                <a className={styles.header__contact_link} target="_blank" href="https://www.linkedin.com/in/kaik-silva" rel="noreferrer" >
                    Linkdin <FiArrowUpRight className={styles.header__contact_link__icons}/>
                </a>
            </div>
            <div className='p-0' style={{width:"fit-content"}}>
                <a className={styles.header__contact_link} target="_blank" href="https://github.com/KaikSilva" rel="noreferrer" >
                    Github <FiArrowUpRight className={styles.header__contact_link__icons}/>
                </a>
            </div>
            <div className='p-0' style={{width:"fit-content"}}>
                <a className={styles.header__contact_link} target="_blank" href="https://wa.me/5519996693306" rel="noreferrer" >
                    Whatsapp <FiArrowUpRight className={styles.header__contact_link__icons}/>
                </a>
            </div>
        </Row>
    )
}

export default Contact;