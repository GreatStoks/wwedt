<template>
<router-view/>
<div class="b-cont">
<canvas ref="resultCanvas"></canvas>

</div>
</template>

<script>


export default {

  data() {
    return {

    }
  },
  async mounted() {
    await this.applyNoiseToBackground();
  },
  methods: {
    applyNoiseToBackground() {
      const canvas = this.$refs.resultCanvas;
      const ctx = canvas.getContext('2d');
      const scaleFactor = window.devicePixelRatio + 0.5;

      // Получаем размеры холста для масштабирования
      const width = window.innerWidth * scaleFactor;
      const height = window.innerHeight * scaleFactor;

      // Установка физических размеров холста
      canvas.width = width - 200;
      canvas.height = height;

      // Установка размеров холста с помощью CSS
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';

      // Масштабирование контекста
      ctx.scale(scaleFactor, scaleFactor);
      // Создаем шум на холсте
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const value = Math.floor(Math.random() * 255);
          ctx.fillStyle = `rgba(${value}, ${value}, ${value}, 0.1)`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: "MarvinVisions", "LexendDecaRegular",   sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.b-cont {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw; /* Ширина равна ширине окна браузера */
  height: 100vh; /* Высота равна высоте окна браузера */
  z-index: -1;
}



@font-face { 
    font-family: "MarvinVisions";
    src: url("../src/assets/fonts/Marvin Visions/MarvinVisionsBig-Bold.eot");
    src: url("../src/assets/fonts/Marvin Visions/MarvinVisionsBig-Bold.eot?#iefix")format("embedded-opentype"),
    url("../src/assets/fonts/Marvin Visions/MarvinVisionsBig-Bold.woff") format("woff"),
    url("../src/assets/fonts/Marvin Visions/MarvinVisionsBig-Bold.woff2") format("woff2"),
    url("../src/assets/fonts/Marvin Visions/MarvinVisionsBig-Bold.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
}

@font-face { 
    font-family: "LexendDecaRegular";
    src: url("../src/assets/fonts/LexendDecaRegular/LexendDecaRegular.eot");
    src: url("../src/assets/fonts/LexendDecaRegular/LexendDecaRegular.eot?#iefix")format("embedded-opentype"),
    url("../src/assets/fonts/LexendDecaRegular/LexendDecaRegular.woff") format("woff"),
    url("../src/assets/fonts/LexendDecaRegular/LexendDecaRegular.ttf") format("truetype");
    font-style: bold;
    font-weight: 400;
}

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

h1 {
  margin: 1rem 0 1rem 0;
  float: left;
  font-size: calc(2rem + 4vw);
  justify-content: left;
}

h2 {
  font-size: calc(1.5rem + 2vw);
}

h3 {
  font-size: calc(1.3rem + 2vw);
}

h4 {
  font-size: calc(1.2rem + 1.5vw);
}

h5 {
  font-size: calc(1rem + 1.5vw);
}

.b-layout__header {
  position: fixed;
  padding: 1rem;
  width: 100%;
  margin-left: -1rem;
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.b-layout__header a {
  margin: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  color: #d65cb8;
  font-size: 20px;
  transition: 0.4s linear;
}

.b-layout__header a:hover {
  color: #2c3e50;
}

.b-layout__main {
  margin: 3rem 0 0 0;
  width: 100%;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;

}

</style>
