import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { dogById } from "../../Redux/actions";
import Card from "../../Components/Card/Card";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);
  const [showCard, setShowCard] = useState(false); // Controla la visibilidad de la Card

  useEffect(() => {
    setShowCard(false);
    dispatch(dogById(id));
  }, [id]);

  useEffect(() => {
    if (dogDetail) {
      setShowCard(true);
    }
  }, [dogDetail]);

  if (!dogDetail) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  const { name, temperament, weight, reference_image_id, height, life_span } =
    dogDetail;

  return (
    <div>
      <h2>Más detalles de: {name}</h2>
      {showCard && (
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
      )}
    </div>
  );
};

export default Details;
