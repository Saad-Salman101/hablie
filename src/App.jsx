import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Ticker from "./components/Ticker";
import Ticker2 from "./components/Ticker2";
import Services from "./components/Services";
import ServicesHardware from "./components/ServicesHardware";
import ContactUs from "./components/ContactUs";
import Ticker3 from "./components/Ticker3";
import Ticker4 from "./components/Ticker4";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
       
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        {/* <Clients /> */}
        <Ticker />
       <Ticker2 />
       <Ticker3 />
       <Ticker4 />
       <div className=' w-full text-center my-4 text-white text-[50px] font-extrabold'> Services</div>
       <Services />
       <ServicesHardware/>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
<ContactUs />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
