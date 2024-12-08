import { useContext } from "react";
import { TourContext } from "../../store/tour-context";
import ReviewCard from "../../components/reviewCard";
import classes from "../settingsRootLayout.module.css";

function Reviews() {
  const { addReview } = useContext(TourContext);

  return (
    <>
      <h1 className={classes.booked}>Your Reviews</h1>
      {/* {DUMMY_REVIEW.map((review) => {
        <ReviewCard />;
      })} */}
    </>
  );
}

export default Reviews;
