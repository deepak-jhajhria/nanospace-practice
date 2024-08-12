import { ABOUT_PATH_LINK, AI_UGC_PATH_LINK, APP_STORE_PATH_LINK, JOIN_DISCORD_PATH_LINK, MARKETPLACE_PATH_LINK, MORE_PATH_LINK, PLAY_STORE_PATH_LINK } from "./constant";
import joinDiscord from '../assets/images/webp/join-discord.webp'
import appStore from '../assets/images/webp/dowload-to-app-store.webp'
import playStore from '../assets/images/webp/dowload-to-play-store.webp'

export const NAV_LINK_LIST = [
    { link: "Home", url: "/" },
    { link: "About", url: ABOUT_PATH_LINK },
    { link: "AI-UGC", url: AI_UGC_PATH_LINK },
    { link: "Marketplace", url: MARKETPLACE_PATH_LINK },
    { link: "More", url: MORE_PATH_LINK },
]

export const EXPLORE_DATA_LIST = [
    "Play with your own cute & adorable girls whose in charge of saving NANOSPACE world.",
    "Characters are fully customizable with various costumes, attractive gears and powerful weapons."
]

export const HERO_SOCAL_LINK_LIST = [
    { image: joinDiscord, url: JOIN_DISCORD_PATH_LINK },
    { image: appStore, url: APP_STORE_PATH_LINK },
    { image: playStore, url: PLAY_STORE_PATH_LINK },
]