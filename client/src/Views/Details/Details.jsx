import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { dogById } from "../../Redux/actions";
import Card from "../../Components/Card/Card";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);

  useEffect(() => {
    // Dispatch the action to fetch dog details using the 'id' from params
    dispatch(dogById(id));
  }, [id]);

  // You can directly use dogDetail from the Redux store
  if (!dogDetail) {
    return (
      <div>
        <h2 style={{ color: "white" }}>Loading....</h2>
      </div>
    );
  }

  const { name, temperament, weight, reference_image_id, height, life_span } =
    dogDetail;

  return (
    <div>
      <h2>Details</h2>
      <Card
        key={dogDetail.id}
        id={dogDetail.id}
        name={name}
        temperament={temperament}
        weight={weight}
        image={reference_image_id}
        height={height}
        life_span={life_span}
      />
    </div>
  );
};

export default Details;
