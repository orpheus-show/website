import footerStyles from '../styles/Footer.module.css';
import Image from "next/image";
import Icon from 'supercons'
const Footer = () => {
    return (
        <div className={footerStyles.container}>
            <h2 className={footerStyles.title}>The Orpheus Show</h2>
            <ul className={footerStyles.social}>
                <li className={footerStyles.icons}>
                    <a rel="noreferrer" href="https://github.com/Orpheuspod" target="_blank">
                        <Icon glyph="github" size={64}  alt="Github Icon" />
                    </a>
                </li>
                    <li className={footerStyles.icons}>
                    <a rel="noreferrer" href="https://app.slack.com/client/T0266FRGM/C029KLH2UCU" target="_blank" alt="Slack Channel Icon for #podcast Channel">
                        <Icon glyph="slack" size={64} alt="Slack Channel icon" />
                    </a>
                </li>
                <li className={footerStyles.icons} >
                    <a rel="noreferrer" href="https://www.youtube.com/channel/UCTES1rgjcKBjSUSJRpyLPzA" target="_blank">
                        <Icon glyph="youtube" size={64}  alt="Youtube Icon" />
                    </a>
                </li>

            </ul>
            <h3>The Orpheus Show and its website are open source with the <a rel="noreferrer" href="https://github.com/Orpheuspod/site/blob/main/LICENSE.md" target="_blank">Apache License 2.0</a>. The Show is not affilated with or endorsed by Hack Club.</h3>
            <h4>Special thanks to <a rel="noreferrer" href="https://supercons.vercel.app/" target="_blank">Supercons</a> for the amazing icons!</h4>
           
    
   
  </div>
       
    )
}

export default Footer;
