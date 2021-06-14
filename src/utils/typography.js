import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
fairyGateTheme.overrideThemeStyles = ({rhythm}, options) => ({
    'a': {
        color: "white",
        textShadow: "0",
    },
    "a:hover": {
        textShadow: "2px 2px #444",
        backgroundImage: "none",
        borderBottom: "none"
    },
    "a:active": {
        textShadow: "2px 2px #444",
        backgroundImage: "none",
    }
})

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography