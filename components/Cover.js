import homeStyles from '../styles/Home.module.css'
import { useColorMode } from 'theme-ui'
import Image from 'next/image'


export default function Cover() {
  const [mode] = useColorMode()
  const isDark = mode === 'dark'
  return (
    <Image
      height="450px"
      width="450px"
      layout="responsive"
      src="/cover.png"
      alt="Podcast cover for The Orpheus Show"
      className={homeStyles.cover}
    />
  )
}
