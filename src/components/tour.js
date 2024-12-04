import TourImg from "../img/tours/tour-2-cover.jpg";
import classes from "./tour.module.css";

function Tour() {
  return (
    <>
      <div className={classes.cover_img_box}>
        <div
          style={{
            backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
            backgroundSize: "cover",
          }}
          className={classes.cover_img}
        >
          <h3 className={classes.tour_title}>
            <span>The Sea Explorer</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Tour;
