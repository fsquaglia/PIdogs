import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { allDogs } from "../../Redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.breedDogs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza la acción de carga de perros si aún no se han cargado
    if (dogs.length === 0) {
      dispatch(allDogs());
    }
    setLoading(false);
  }, [dispatch, dogs]);

  if (loading) {
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  }

  return (
    <div>
      {dogs.map((dog) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Cards;
