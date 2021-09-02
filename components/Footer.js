import footerStyles from '../styles/Footer.module.css'
import Image from 'next/image'
import Icon from 'supercons'
const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <h2 className={footerStyles.title}>The Orpheus Show</h2>
      <ul className={footerStyles.social}>
        <li className={footerStyles.icons}>
          <a
            rel="noreferrer"
            href="https://github.com/Orpheuspod"
            target="_blank"
          >
            <Icon glyph="github" size={60} alt="The Orpheus Show on GitHub" />
          </a>
        </li>
        <li className={footerStyles.icons}>
          <a
            rel="noreferrer"
            href="https://app.slack.com/client/T0266FRGM/C029KLH2UCU"
            target="_blank"
            alt="Slack Channel Icon for #podcast Channel"
          >
            <Icon
              glyph="slack"
              size={60}
              alt="The Orpheus Show in the Hack Club Slack"
            />
          </a>
        </li>
        <li className={footerStyles.icons}>
          <a
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCTES1rgjcKBjSUSJRpyLPzA"
            target="_blank"
          >
            <Icon glyph="youtube" size={60} alt="The Orpheus Show on YouTube" />
          </a>
        </li>
        <li className={footerStyles.icons}>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/orpheuspodcast/"
            target="_blank"
          >
            <Icon
              glyph="instagram"
              size={60}
              alt="The Orpheus Show on Instagram"
            />
          </a>
        </li>
        <li className={footerStyles.icons}>
          <a
            rel="noreferrer"
            href="https://twitter.com/OrpheusPodcast"
            target="_blank"
          >
            <Icon glyph="twitter" size={60} alt="The Orpheus Show on Twitter" />
          </a>
        </li>
      </ul>
      <h4 className={footerStyles.sub}>
        The Orpheus Show is run by the community members of Hack Club. We are
        not affiliated with/endorsed by Hack Club.
      </h4>
      <h4 className={footerStyles.sub}>
        The Show is open source on{' '}
        <a
          rel="noreferrer"
          href="https://github.com/Orpheuspod"
          target="_blank"
        >
          GitHub
        </a>{' '}
        and{' '}
        <a
          rel="noreferrer"
          href="https://devenjadhav.notion.site/The-Orpheus-Show-faa883027b5849e9af8e9d3b349d74ad"
          target="_blank"
        >
          Notion
        </a>{' '}
        under the{' '}
        <a
          rel="noreferrer"
          href="https://github.com/Orpheuspod/site/blob/main/LICENSE.md"
          target="_blank"
        >
          Apache License 2.0
        </a>
        .
      </h4>
    </div>
  )
}

export default Footer
