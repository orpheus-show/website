import footerStyles from '../styles/Footer.module.css';
import Image from "next/image";
import Icon from 'supercons'
const Footer = () => {
    return (
        <div className={footerStyles.container}>
            <h2 className={footerStyles.title}>The Orpheus Show</h2>
            <ul className={footerStyles.social}>
                <li>
                    <a rel="noreferrer" href="https://github.com/Orpheuspod" target="_blank">
                        <Icon glyph="github-fill" size={55} />
                    </a>
                </li>
            </ul>
            <h3>This Website/Podcast is Lisenced in Apache-2.0, and is not affilated with Hack Club or endorsed by Hack Club.</h3>
            <h4>Icons Credit to <a rel="noreferrer" href="https://supercons.vercel.app/" target="_blank">Supercons</a> </h4>
           
    
   
  </div>
       
    )
}

export default Footer;
