
import FreeTrialSignup from "../components/FreeTrialSignup"
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import KioskFeatures from "../components/KioskFeatures"
import KioskModes from "../components/KioskModes"
import PlatformSupport from "../components/PlatformSupport"
import RecognitionSection from "../components/RecognitionSection"
import TestimonialSlider from "../components/TestimonialSlider"
function Home() {
  return (
    <div>
        <Header/>
        <HomeBanner/>
        <RecognitionSection/>
        <KioskModes/>
        <KioskFeatures/>
        <TestimonialSlider/>
        <PlatformSupport/>
        <FreeTrialSignup/>
    </div>
  )
}

export default Home