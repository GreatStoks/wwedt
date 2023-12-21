<template>
  <div class="homeview-container">
    <nav-pan/>
    <div class="b-layout__main">
    <h1>Привет всем!!<br>Посмотрите что есть</h1>

      <div :style="{ backgroundImage: backgroundImageUrl }" class="background-block1" v-if="weatherData">
        <div class="zindex2">
        <div class="weather-sec1">
          <h3>темп {{(weatherData.main.temp - 273.15).toFixed(2)}} °C</h3>
          <p>осадки: {{ weatherData.weather[0].main }}</p>
          <p>сила осадков: {{ weatherData.weather[0].description }}</p>
        </div>
        <div class="weather-sec2">
        <h4>{{cityName}}</h4>
        <h5>{{region}}</h5>
        </div>
        <div class="weather-sec3">
          <p>{{weatherData.dt_txt}}</p>

          <p>давление: {{ weatherData.main.pressure }}</p>
          <p>туман: {{ weatherData.main.humidity }}</p>

        </div>
        </div>
      </div>
        <div v-else>
          <p>Загрузка...</p>
        </div>
        <h2>ОЧЕРЕДНАЯ ПОДПИСЬ<br>О ЧЕМ-ТО ГОВОРЯЩАЯ</h2>
        <div class="presentnav">
     <!--   <img :src="resultImage1" alt="Result Image 1" v-if="resultImage2" class="backsideimg1"/> -->
        <div class="presentnav-block">
        <svg viewBox="0 0 600 600">


        <g @mouseover="showDescription('events')" @mouseleave="hideDescription('events')">
          <router-link to="/events" target="_blank">
            <polygon id="uroboros" points="388,92,439,59,416,47,401,44,385,41,362,31,349,26,319,18,296,11,247,8,231,10,211,10,170,26,125,49,69,98,63,110,43,139,31,172,23,200,18,231,18,257,23,294,25,309,30,326,36,342,53,371,61,388,71,401,82,412,107,435,125,451,139,460,167,474,195,481,223,486,249,486,290,486,303,481,314,478,324,473,352,460,357,461,377,448,385,442,403,430,426,407,444,386,460,360,467,340,473,322,480,296,480,283,481,273,483,255,483,231,480,201,470,168,478,201,481,244,480,265,473,308,465,326,452,352,437,373,417,397,383,429,340,451,304,463,265,468,218,463,170,447,134,427,101,396,95,391,75,358,61,330,49,296,47,265,49,234,54,204,72,168,82,150,100,128,116,110,147,80,180,64,211,59,236,54,272,52,290,57,301,61,314,61,330,65,345,74,357,79,362,77,373,83" />
            <polygon id="uroboros" points="386,92,401,106,411,105,414,115,424,121,433,134,443,137,429,106,432,101,445,108,445,111,450,113,461,123,463,121,473,126,469,119,476,123,484,121,458,80,448,67,440,59" />
            <polygon id="uroboros" points="440,59,450,65,463,79,460,82,453,70" />
            <polygon id="uroboros" points="203,61,173,72,155,82,186,61" />
            <polygon id="uroboros" points="64,184,56,222,54,274,53,205" />
            <polygon id="uroboros" points="497,269,492,304,483,341,468,372,456,394,440,410,397,443,363,464,391,444,429,413,440,397,456,379,469,353,484,327,491,304" />
          </router-link>
          <text class="description1" v-show="showDescriptions.events">ПРОХОДЯЩИЕ ИВЕНТЫ</text>
        </g>


        <g @mouseover="showDescription('projects')" @mouseleave="hideDescription('projects')">
          <router-link to="/projects" target="_blank">
          <polygon id="sword" points="42,37,57,82,160,186,219,263,232,249,232,234,115,115" />
          <polygon id="sword" points="47,33,165,155,232,229,232,209,242,201,190,155,92,51" />
          <polygon id="sword" points="267,300,290,321,283,347,309,379,298,467,363,390,429,454,435,475,468,482,465,446,445,439,381,371,465,307,376,315,345,287,322,292,316,289,314,291,276,291" />
          <polygon id="sword" points="263,217,263,261,272,271,301,271,294,258,291,246,293,237" />
          </router-link>
          <text class="description2" v-show="showDescriptions.projects">ПРОЕКТЫ</text>
        </g>
          <g @mouseover="showDescription('news')" @mouseleave="hideDescription('news')">


          <router-link to="/news" target="_blank">
        <polygon id="posoh" points="244,11,229,40,224,57,224,76,244,86,249,93,250,135,249,160,254,186,254,271,263,271,265,207,263,178,262,150,265,142,267,133,262,99,262,93,267,89,276,82,285,79,290,76,286,65,268,11,283,63,273,65,268,70,263,76,260,71,263,68,267,65,270,62,268,45,257,26,242,48,239,63,249,71,250,78,240,69,232,66,227,62,231,48" />
        <polygon id="posoh" points="249,319,247,368,245,378,247,389,249,402,249,425,249,438,245,448,247,459,249,474,249,492,255,495,260,489,260,446,263,430,262,404,260,373,263,360,262,343,263,304" />
        <circle id="posoh" cx="283" cy="72" r="8" />
        <circle id="posoh" cx="230" cy="72" r="9" />
        </router-link>
        <text class="description3" v-show="showDescriptions.news">ПОЛИСТАТЬ НОВОСТИ</text>
        </g>


        <g @mouseover="showDescription('about')" @mouseleave="hideDescription('about')">
        <router-link to="/about" target="_blank">
          <polygon id="spear" points="491,30,290,148,290,204,347,148,357,148,375,166,375,176,321,233,378,233" />
          <polygon id="spear" points="445,112,438,126,429,107,430,101,437,106" />
          <polygon id="spear" points="253,195,233,210,232,249,203,280,213,291,213,301,39,472,50,483,223,313,235,312,245,322,276,291,315,291,330,271,253,271" />
          </router-link>
          <text class="description4" v-show="showDescriptions.about">ЭБАУТ</text>
        </g>
        </svg>
        </div>
        <!--<img :src="resultImage1" alt="Result Image 1" v-if="resultImage2" class="backsideimg2"/>-->

        </div>

    <!--<img :src="resultImage1" alt="Result Image 1" v-if="resultImage1" />  -->
    </div>
  </div>
</template>

<script>
import NavPan from '@/components/NavPan.vue'
import AboutView from './AboutView.vue';
import {addNoiseToImage} from '../scripts/noise.js';

export default {
  name: 'HomeView',
  components: {
    NavPan,
    AboutView
  },
  data() {
    return {
      weatherData: null,
      cityName: null,
      region: null,
      resultImage1: "/square.jpg",
      resultImage2: "/backside1.jpg",
      weatherBackgrounds: {
        Snow: 'url(\'../weather/snow.png\')',
        Rain: 'url(\'../weather/rain.png\')',
        Clouds: 'url(\'../weather/clouds.png\')',
        Fog: 'url(\'../weather/rain.png\')',
        Clear: 'url(\'../weather/clear.png\')',
      },
      showDescriptions: {
        events: false,
        projects: false,
        news: false,
        about: false,
      }
    }
  },


async mounted() {
  try 
  {
    this.resultImage1 = await addNoiseToImage(this.resultImage1, 0.3); //дальше добавлять сюда все картинки для шума
    this.resultImage1 = await addNoiseToImage(this.resultImage2, 0.3);



    } catch (error) {
      console.error('Ошибка при добавлении шума к изображению:', error);
    }

  await this.getWeatherData();


this.updateAreaCoordinates;
},

computed: {
  backgroundImageUrl() {
      if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
        return this.weatherBackgrounds[this.weatherData.weather[0].main] || '';
      }
      return '';
    },
},

  methods: {
    async toNoise() {

    },

    async getWeatherData() {

      try {
        const response = await fetch(`https://ipapi.co/json/`);
        const data = await response.json();
        this.cityName = data.city;
        this.region = data.region;
        
      } catch (error) {
        console.error('Ошибка при получении данных о местоположении', error);
      }

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=f064523db05b7c362e186a13a5a67a8d`);
        const data = await response.json();
        this.weatherData = data;
        
      } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
      }
    },

    showDescription(item) {
      this.showDescriptions[item] = true;
    },
    hideDescription(item) {
      this.showDescriptions[item] = false;
    }

  },
}
</script>

<style lang="scss" scoped>
h1, h3, h4, h5 {
  transition-duration: 0.6s;
}

h3 {
  margin-bottom: calc(1vw);
}

.homeview-container {
  display: flex;
  margin: 0 1rem 0 1rem;
  width: 100%;
}
.container {
  width: 100%;
  height: 100vh;
  background-size: cover;
  /* Дополнительные стили по вашему усмотрению */
}

.container1 {
  width: calc(100% + 4vw);
  height: calc(30% + 4vw);
  background-color: #d65cb8;
  z-index: 1;
  transition-duration: 0.6s;
}

.zindex2 {
  display: flex;
  position: relative;
  z-index: 2;
}


.background-block1 {

  padding: 1rem;
  margin-bottom: 1rem;
  height: calc(160px + 8vw);
  margin-right: 2rem;
  border-radius: 20px;

  background-position: center;
  position: relative;
  overflow: hidden;
  transition-duration: 0.6s;
}

@keyframes animatedBackground {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(91%);
  }
}

.background-block1::before,
.background-block1::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-image: inherit;
  animation: animatedBackground 10s linear infinite; /* Измените продолжительность анимации по вашему усмотрению */
}

.background-block1::before {
  top: 0;
  z-index: 0;
}

.background-block1::after {
  top: -100%;
  z-index: 0;
}

.weather-sec1, .weather-sec2, .weather-sec3 {
  flex: 1;
  text-align: center;
  z-index: 3;

}

.weather-sec1 p{
  margin-top: calc(2px + 1vw);
  font-size: calc(5px + 1.5vw);
  transition-duration: 0.6s;
}

.weather-sec3 p {
  margin-top: calc(5px + 3.5vw);
  font-size: calc(15px + 0.8vw);
  transition-duration: 0.6s;
}

p, h2 {
  margin: 1rem;

}

.presentnav {
  position: relative;
  display: flex;
  text-align: center;
  margin-top: 1.5rem;
  margin-left: -2rem;
  height: calc(25vw);
  transition-duration: 0.6s;
  z-index: 0;
  background: radial-gradient(circle, rgba(150, 42, 126, 0.082) 40%, rgb(199, 161, 211) 120%);
}

.presentnav-block {
  min-width: calc(250px + 5vw);
  position: absolute;
  top:64%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    transition-duration: 0.6s;
}

.presentnav-el {
  color: #d65cb8;


}


svg {
  position: relative;
  fill:rgba(151, 162, 167, 0.849);
  left: calc(20px + 4vw);
  right: calc(20px + 4vw);
  width: calc(200px + 30vw);
  transition-duration: 0.6s;
}

svg a{
  fill:#1d404e;
  filter: drop-shadow(7px 5px 10px #149ae786);
  -webkit-filter: drop-shadow(6px 4px 8px #ac0f1c8c);
  -moz-filter: drop-shadow(7px 5px 12px #9f0ef3f1);
  transition: 0.3s linear;

}

svg a:hover {
  fill:#d65cb8;
  filter: none;
  filter: drop-shadow(5px 3px 6px rgba(70, 1, 110, 0.644));

}

.description1 {
  position: absolute;
  font-size: 22px;
  transform:rotate(-45deg) translate(450px, 325px);
  transform-origin: 50% 50%;
  fill: #1d404e;
}

.description2 {
  font-size: 22px;
  transform: rotate(48deg) translate(200px, 35px);
  fill: #1d404e;
}

.description3 {
  font-size: 22px;
  transform: rotate(-10deg) translate(250px, 315px);
  fill: #1d404e;
}

.description4 {
  font-size: 22px;
  transform: rotate(-10deg) translate(80px, 325px);
  fill: #1d404e;
}


@media screen and (min-width: 1450px) {
  .backsideimg1, .backsideimg2 {
  width: calc(45vw);
  }
}

@media screen and (min-width: 1600px) {
  .backsideimg1, .backsideimg2 {
  width: 7000px;
  }
}

@media screen and (max-width: 448px) {
  .weather-sec2, .weather-sec3 {
  display: none;
  }
}


.sword {
  position: absolute;
  top: -500px;

}

</style>