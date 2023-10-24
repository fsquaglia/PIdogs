import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { dogById } from "../../Redux/actions";
import Card from "../../Components/Card/Card";
import { StyledH2 } from "../../styles";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(dogById(id))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        alert("Ups! tuvimos un error al mostrar el dog: " + error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <StyledH2>Loading....</StyledH2>
      </div>
    );
  } else {
    return (
      <div>
        <StyledH2>Más detalles de: {dogDetail.name}</StyledH2>
        <Card
          key={dogDetail.id}
          id={dogDetail.id}
          name={dogDetail.name}
          temperament={dogDetail.temperament}
          weight={dogDetail.weight}
          image={dogDetail.reference_image_id}
          height={dogDetail.height}
          life_span={dogDetail.life_span}
        />
      </div>
    );
  }
};

export default Details;
