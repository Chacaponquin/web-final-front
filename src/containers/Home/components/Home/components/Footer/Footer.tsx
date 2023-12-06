import { APP_IMAGES } from "../../../../../../modules/app/constants";

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-left">
        <div className="footer-img">
          <img src={APP_IMAGES.FCB.src} alt={APP_IMAGES.FCB.alt} />
        </div>

        <div className="footer-dates">
          <p className="label"> Buenas tardes </p>
          <i className="pi pi-envelope label"> latino@inder.gob.cu </i>
          <i className="pi pi-phone label"> 7-877-42-51 </i>
        </div>
      </div>
    </footer>
  );
}
