import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogById } from "../../Redux/actions";
import Card from "../../Components/Card/Card";

const Details = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);

  useEffect(() => {
    dispatch(dogById(id));
    setDog(dogDetail);
  }, [id, dogDetail]);

  if (!dog) {
    return (
      <div>
        <h2 style={{ color: "white" }}>Loading....</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Details</h2>
      <Card
        key={dog.id}
        id={dog.id}
        name={dog.name}
        temperament={dog.temperament}
        weight={dog.weight}
        image={dog.reference_image_id}
        height={dog.height}
        life_span={dog.life_span}
      />
    </div>
  );
};

export default Details;
