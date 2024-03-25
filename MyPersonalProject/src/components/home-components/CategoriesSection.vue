<script setup>

</script>

<template>

  <div class="galery">
    <h1 class="text-center">¡Explora nuestras categorías de actividades!</h1>

    <div class="container_images">
      <router-link to="/deportes-y-aventuras">
        <div class="image">
          <img src="../assets/imgages/surfImage-jpg" alt="">
          <h2 class="category_title">Deportes y Aventuras</h2>
        </div>
      </router-link>
      <router-link to="/arte-y-creatividad">
        <div class="image">
          <img src="../assets/imgages/artImage.jpg" alt="">
          <h2 class="category_title">Arte y Creatividad</h2>
        </div>
      </router-link>
      <router-link to="/juego-saludable">
        <div class="image">
          <img src="../assets/imgages/freeImage.jpg" alt="">
          <h2 class="category_title">Juego Saludable</h2>
        </div>
      </router-link>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.galery {

  background-color: #FF8811;
  font-family: "Lakki Reddy", serif;
  font-weight: 200;
  padding: 2%;


  h1 {
    color: #fff;
    font-size: 3rem;
    padding: 3%;
  }
}

.container_images {
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5%;

}

.container_images .image {
  width: 32%;
  position: relative;
  height: 400px;
  margin-bottom: 5px;

}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

h2 {

  font-size: 3rem;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

.category_title {
  z-index: 10;
}

@media screen and (max-width:1000px) {
  .container_images {
    width: 95%;
  }
}

@media screen and (max-width:700px) {
  .container_images {
    width: 90%;
  }

  .container_images .image {
    width: 48%;
  }
}

@media screen and (max-width:450px) {
  h1 {
    font-size: 22px;
  }

  .container_images {
    width: 98%;
  }

  .container_images .image {
    width: 80%;
  }
}
</style>