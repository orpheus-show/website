import Head from 'next/head'
import theme from '@hackclub/theme' // or '../lib/theme'

export default function Meta({
  name = 'The Orpheus Show',
  title = 'The Orpheus Show',
  description = 'The podcast about Hack Club and its community.',
  image = 'https://podcast.hackclub.com/_next/image?url=%2Fcover.png&w=256&q=100',
  url = 'https://podcast.hackclub.com'
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={name} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="msapplication-TileColor" content={theme.colors.primary} />
      <meta name="theme-color" content={theme.colors.primary} />

      <script
        async
        defer
        data-website-id="f3500e20-c36f-4f37-bb04-232583348397"
        src="https://ce02c2f058d3.up.railway.app/umami.js"
      ></script>
    </Head>
  )
}
