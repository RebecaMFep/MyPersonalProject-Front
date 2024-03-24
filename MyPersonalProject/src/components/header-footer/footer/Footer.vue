<script setup>

</script>


<template>
<footer>
  <div class="container">

    <div class="footer-content">
      <h3>Contacto</h3>
        <p>Email: info@esparcerenbranu.com</p>
        <p>Teléfono: 985 321 654</p>
        <p>Dirección: C/ Óscar Olavarria, 22 <br>
                      Gijón, Asturias</p>
      </div>

      <div class="footer-content">
        <h3>Acceso Rápido</h3>
        <ul class="list">
          <li><a href="">Inicio</a></li>
          <li><a href="">Sobre Nosotros</a></li>
          <li><a href="">Actividades</a></li>
          <li><a href="">Servicios</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </div>

      <div class="footer-content">
        <h3>Síguenos en nuestras redes sociales</h3>
        <ul class="social-icons">
          <li><a href="https://www.facebook.com" class="social-btn" target="_blank">
            <img class="logo" src="/src/assets/images/logoFacebook.png" alt="Facebook"></a>
          </li>
          <li><a href="https://www.instagram.com" class="social-btn" target="_blank">
            <img class="logo" src="/src/assets/images/logoInstagram.png" alt="Instagram"></a>
          </li>
          <li><a href="https://www.youtube.com" class="social-btn" target="_blank">
            <img class="logo" src="/src/assets/images/logoYoutube.png" alt="YouTube"></a>
          </li>
          <li><a href="https://www.tiktok.com" class="social-btn" target="_blank">
            <img class="logo" src="/src/assets/images/logoTiktok.png" alt="TikTok"></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-bar">
        <p> © 2024 "Esparcer en branu". Todos los derechos reservados. </p>
    </div>
</footer>
</template>
<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

   *{
        margin: 0;
        padding: 0;
        font-family: "Lakki Reddy", serif;
        font-size: 16px;
        color: white;
    }
    footer{
        background:#00B8D4;
        padding-top: 50px;
    }
    .container{
        width: 1140px;
        margin: auto;
        display: flex;
        justify-content: center;
    }
    .footer-content{
        width: 33.3%;
    }
    h3{
        font-size: 28px;
        margin-bottom: 15px;
        text-align: center;
    }
    .footer-content p{
        width:190px;
        margin: auto;
        padding: 7px;
    }
    .footer-content ul{
        text-align: center;
    }
    .list{
        padding: 0;
    }
    .list li{
        width: auto;
        text-align: center;
        list-style-type:none;
        padding: 7px;
        position: relative;
    }
    .list li::before{
        content: '';
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 100%;
        width: 0;
        height: 2px;
        background: #f18930;
        transition-duration: .5s;
    }
    .list li:hover::before{
        width: 70px;
    }
    .social-icons{
        text-align: center;
        padding: 0;
    }
    .social-icons li{
        display: inline-block;
        text-align: center;
        padding: 5px;
    }
    .social-icons i{
        color: white;
        font-size: 20px;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        color: #f18930;
    }
    .social-icons i:hover{
        color: #f18930;
    }
    .bottom-bar{
        background: #f18930;
        text-align: center;
        padding: 8px 0;
        margin-top: 50px;
    }
    .bottom-bar p{
        color: white;
        margin: 0;
        font-size: 16px;
        padding: 5px;
    }

    @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .footer-content {
      width: 100%;
    }
  }
  // @media screen and (max-width: 768px) {
  //   .container {
  //     display: flex;
  //     justify-content: center;
  //   }
  //   .footer-content {
  //     width: 100%;
  //   }
  //   .bottom-bar {
  //     display: none;
  //   }
  // }

</style>