import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { setCurrentPage } from "../../Redux/actions";
import { DivCardContainer, CardMargin, PaginationButton } from "../../styles";

const Cards = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.breedDogs);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

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
            <CardMargin key={dog.id}>
              <Card
                id={dog.id}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight}
                image={dog.reference_image_id}
                height={dog.height}
                life_span={dog.life_span}
                origin={dog.origin}
              />
            </CardMargin>
          );
        })}
      </DivCardContainer>
      <CardMargin>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </PaginationButton>
        {pages.map((page) => (
          <PaginationButton
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          {">"}
        </PaginationButton>
      </CardMargin>
    </div>
  );
};

export default Cards;
