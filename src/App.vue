<template>
<router-view/>
<home-view/>
</template>

<style lang="scss">
#app {
  font-family: "MarvinVisions", "LexendDecaRegular",   sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
}

h1 {
  margin: 1rem;
  float: left;
  font-size: calc(2rem + 4vw);
  justify-content: left;
}

.b-layout__header {
  position: fixed;
  padding: 1rem;
  width: 100%;
}

.b-layout__header a {
  margin: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  color: #d65cb8;
  font-size: 20px;
}

</style>
