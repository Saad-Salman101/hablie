import { clients } from "../constants";
import styles from "../style";
// eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// eslint-disable-next-line no-unused-vars


const Clients = () => (
<>
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  <div className=" bg-slate-300 w-full">

      </div>

  </>
);

export default Clients;
