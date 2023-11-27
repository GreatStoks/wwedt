<template>
  <div class="homeview-container">
    <nav-pan/>
    <div class="b-layout__main">
    <h1>Привет всем!!<br>Посмотрите что есть</h1>

      <div class="background-block1" v-if="weatherData">
        <div class="weather-sec1">
          <h2>темп {{(weatherData.main.temp - 273.15).toFixed(2)}} °C</h2>
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
        <div v-else>
          <p>Загрузка...</p>
        </div>



    <img :src="resultImage1" alt="Result Image 1" v-if="resultImage1" />
    <img :src="resultImage1" alt="Result Image 1" v-if="resultImage1" />
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

.background-block1 {
  display: flex;
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  height: calc(160px + 8vw);
  margin-right: 2rem;
  border-radius: 20px;
  background-color: #e5a5f5;
}

.weather-sec1, .weather-sec2, .weather-sec3 {
  flex: 1;
  text-align: center;

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



</style>