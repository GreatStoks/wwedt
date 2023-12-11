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
        <svg viewBox="0 0 600 600">
          <router-link to="/about">
          <polygon id="spear" points="273,145,496,16,370,241,294,241,358,176,339,156,273,221" />
          <polygon id="spear" points="245,186,214,209,215,247,181,282,197,299,17,476,36,496,216,319,232,335,266,299,306,301,329,270,245,269" />
          </router-link>
          <router-link to="/projects">

          <polygon id="sword" points="
            6, 17,
           18, 71,
          138,232,
          183,324,
          218,337,
          240,367,
          229,394,
          256,433,
          229,529,
          315,451,
          376,530,
          382,557,
          418,569,
          418,529,
          399,518,
          338,434,
          436,374,
          339,371,
          308,335,
          279,338,
          258,310,
          254,271,
          177,199,
           61, 41,
           12, 13,
          187,252,
          191,260,
          183,253,
          187,252,
            6, 17" />
          </router-link>
        </svg>


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
      weatherBackgrounds: {
        Snow: 'url(\'../weather/snow.png\')',
        Rain: 'url(\'../weather/rain.png\')',
        Clouds: 'url(\'../weather/clouds.png\')',
        Fog: 'url(\'../weather/rain.png\')',
        Clear: 'url(\'../weather/clear.png\')',
      },
    }
  },


async mounted() {
  try 
  {
    this.resultImage1 = await addNoiseToImage(this.resultImage1, 0.3); //дальше добавлять сюда все картинки для шума



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



  },
}
</script>

<style lang="scss" scoped>
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
  margin-top: calc(5px + 3vw);
  font-size: calc(5px + 1.5vw);
}

.weather-sec3 p {
  margin-top: calc(5px + 3.5vw);
  font-size: calc(15px + 0.8vw);
}

p, h2 {
  margin: 1rem;
}

.presentnav {

  text-align: center;
  max-width: 900;
  max-height: 900;
}

.presentnav-el {
  color: #d65cb8;


}

.presentnav img {

}

svg {
  position: relative;
  fill:rgba(151, 162, 167, 0.849);
  left: calc(20px + 4vw);
  right: calc(20px + 4vw);

}

svg a{
  
  filter: drop-shadow(10px 9px 16px #00000086);
  -webkit-filter: drop-shadow(10px 9px 16px #000000c2);
  -moz-filter: drop-shadow(10px 9px 16px #000000bd);
  transition: 0.3s linear;
}

svg a:hover {
  fill:#d65cb8;
  filter: none;
  filter: drop-shadow(5px 3px 6px rgba(70, 1, 110, 0.644));

}


.presentnav svg {



}

.testel {
  color: #d65cb8;
  background-color: #d65cb8;
}

.sword {
  position: absolute;
  top: -500px;

}

</style>