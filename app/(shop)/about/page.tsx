import AboutStart from "./AboutStart";
import AboutStats from "./AboutStats";
import AboutStory from "./AboutStory";
import OurValue from "./OurValues";

export default function AboutPage(){
    return(
        <main>
            <AboutStory />
            <AboutStart />
            <OurValue />
            <AboutStats/>
        </main>
    )
}