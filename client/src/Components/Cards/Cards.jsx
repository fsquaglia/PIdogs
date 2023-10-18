import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterAndOrder, setCurrentPage } from "../../Redux/actions";
import styled from "styled-components";

const DivCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* Agrega otros estilos según tus preferencias */
`;

const Cards = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.breedDogs);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  // const [hasUpdated, setHasUpdated] = useState(false); // Variable de control
  // useEffect(() => {
  //   if (!hasUpdated) {
  //     dispatch(filterAndOrder());
  //     setHasUpdated(true);
  //   }
  // }, [dispatch, dogs, hasUpdated]); //hasUpdated

  // useEffect(() => {
  //   // Restablecer la variable de control cuando cambia currentPage u otras dependencias
  //   setHasUpdated(false);
  // }, [currentPage, itemsPerPage]);

  //*paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dogsToDisplay = dogs.slice(startIndex, endIndex);
  // Calcular la cantidad total de páginas
  const totalItems = dogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Crear un array de números para representar las páginas
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Función para cambiar la página actual
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  if (dogs.length === 0) {
    return (
      <div>
        <p>ups! nada por aquí?</p>

        <p>Replantea tu búsqueda y quita algunos filtros.</p>
      </div>
    );
  }

  return (
    <div>
      <DivCardContainer>
        {dogsToDisplay.map((dog) => {
          return (
            <div key={dog.id}>
              <Card
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
        })}
      </DivCardContainer>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Cards;