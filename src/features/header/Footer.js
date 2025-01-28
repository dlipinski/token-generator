import { Pane, Text, Link } from "evergreen-ui";
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg'
import { ReactComponent as DiscordLogo } from '../../assets/discord.svg'
import { ReactComponent as TelegramLogo } from '../../assets/telegram.svg'


const Footer = () => (
  <Pane display='flex' justifyContent='center' gap='2rem' padding='2rem'>
    <Text size={400} fontWeight={400}>© 2021 - Token Tools</Text>
    <Link size={400} fontWeight={400} href='#' display='flex' gap='.25rem'><TwitterLogo width='1rem' style={{ fill: '#3366FF' }} />Twitter</Link>
    <Link size={400} fontWeight={400} href='#' display='flex' gap='.25rem'><DiscordLogo width='1rem' style={{ fill: '#3366FF' }} />Discord</Link>
    <Link size={400} fontWeight={400} href='#' display='flex' gap='.25rem'><TelegramLogo width='1rem' style={{ fill: '#3366FF' }} />Telegram</Link>
  </Pane>
)

export default Footer;