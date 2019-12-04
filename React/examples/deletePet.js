deletePet = (petId) => {
  axios.delete(`http://localhost:3000/pets/${petId}`)
    .then((response) => {
      const petList = this.state.originalPets.filter((pet) => pet.id !== petId);

      this.setState({
        petList,
        originalPets: petList
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
};