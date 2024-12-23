import moonLightDarkModeSwitch from "/landing-page/images/moonLightDarkModeSwitch.svg";
import moonLightDarkModeSwitchLightMode from "/landing-page/images/moonLightDarkModeSwitchLightMode.svg";
import sunLightDarkModeSwitch from "/landing-page/images/sunLightDarkModeSwitch.svg";
import languageSwitchFrame from "/landing-page/images/LanguageSwitchFrame.svg";
import languageSwitchFrameDarkMode from "/landing-page/images/languageSwitchFrameLightMode.svg";
import worldIconDarkMode from "/landing-page/images/WorldIcon.svg";
import worldIconLightMode from "/landing-page/images/worldIconLightMode.svg";
import phrasesBigBg from "/landing-page/phrasesBackground.svg";
import phrasesSmallBg from "/landing-page/phrasesBackgroundSmall.svg";
import arrowLightMode from "/landing-page/roadmapImages/arrowLightMode.svg";
import arrowDarkMode from "/landing-page/roadmapImages/arrowDarkMode.svg";
import desktopRoadmapBgDarkMode from "/landing-page/roadmapImages/roadmapBg/slimfinalBgDarkTheme.svg";
import desktopRoadmapBgLightMode from "/landing-page/roadmapImages/roadmapBg/slimFinalBgLightTheme.svg";
import mobileRoadmapDarkMode from "/landing-page/roadmapImages/roadmapBg/smallerScreesRoadmapBgDarkMode.svg";
import mobileRoadmapLightMode from "/landing-page/roadmapImages/roadmapBg/smallerScreesRoadmapLightMode.svg";
import faviconDarkTheme from "/landing-page/favicon/faviconBlackTheme.png";
import faviconLightTheme from "/landing-page/favicon/faviconWhiteTheme.png";
import moneyGif from "/landing-page/money.gif";
import gradientDarkMode from "/landing-page/gradientDarkMode.svg";
import gradientLightMode from "/landing-page/gradientLightMode.svg";
import zeroPersent from "/landing-page/paragraphIcons/zeroPersentIcon.svg";
import moneyInTheBox from "/landing-page/paragraphIcons/moneyInTheBox.svg";
import cards from "/landing-page/paragraphIcons/cards.svg";
import shieldWithLock from "/landing-page/paragraphIcons/shieldWithLock.svg";
import pictureGallery from "/landing-page/paragraphIcons/pictureGallery.svg";
import heart from "/landing-page/paragraphIcons/heart.svg";
import stockUp from "/landing-page/paragraphIcons/stockUp.svg";
import handShake from "/landing-page/paragraphIcons/handShake.svg";
import compass from "/landing-page/paragraphIcons/compass.svg";
import rocket from "/landing-page/paragraphIcons/rocket.svg";
import searchIconDarkMode from "/landing-page/faqIcons/searchIconDarkMode.svg";
import searchIconLightMode from "/landing-page/faqIcons/searchIconLightMode.svg";
import twitterIcon from "/landing-page/socialMediaIcons/twitter.svg";
import telegramIcon from "/landing-page/socialMediaIcons/telegram.svg";
import exitDarkMode from "/landing-page/faqIcons/exitDarkMode.svg";
import exitLightMode from "/landing-page/faqIcons/exitLightMode.svg";

export const assets = {
    icons: {
        moonSwitchMode: {
            darkMode: moonLightDarkModeSwitch,
            lightMode: moonLightDarkModeSwitchLightMode,
        },
        sunSwitchMode: {
            darkMode: sunLightDarkModeSwitch,
        },
        world: {
            lightMode: worldIconLightMode,
            darkMode: worldIconDarkMode,
        },
        arrow: {
            lightMode: arrowLightMode,
            darkMode: arrowDarkMode,
        },
        favicon: {
            lightMode: faviconLightTheme,
            darkMode: faviconDarkTheme,
        },
        search: {
            lightMode: searchIconLightMode,
            darkMode: searchIconDarkMode,
        },
        socialMedia: {
            twitter: twitterIcon,
            telegram: telegramIcon,
        },
        exit: {
            lightMode: exitLightMode,
            darkMode: exitDarkMode,
        },
        zeroPersent: zeroPersent,
        moneyInTheBox: moneyInTheBox,
        cards: cards,
        shieldWithLock: shieldWithLock,
        pictureGallery: pictureGallery,
        heart: heart,
        stockUp: stockUp,
        handShake: handShake,
        compass: compass,
        rocket: rocket,
    },
    images: {
        switchLanguageFrame: {
            darkMode: languageSwitchFrame,
            lightMode: languageSwitchFrameDarkMode,
        },
        phrasesBg: {
            big: phrasesBigBg,
            small: phrasesSmallBg,
        },
        roadmap: {
            mobile: {
                darkMode: mobileRoadmapDarkMode,
                lightMode: mobileRoadmapLightMode,
            },
            desktop: {
                darkMode: desktopRoadmapBgDarkMode,
                lightMode: desktopRoadmapBgLightMode,
            },
        },
        gradient: {
            darkMode: gradientDarkMode,
            lightMode: gradientLightMode,
        },
    },
    gif: {
        moneyGif: moneyGif,
    },
};
