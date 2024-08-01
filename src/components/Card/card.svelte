<script lang="ts">
  import { error } from "@sveltejs/kit";
  import WeatherConditions from "./weatherConditions.svelte";

  const apiKey = "d4769737e48e7116f84a7b83ba15782a";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  // QuerySelectors
  let input = { value: "" };
  let city = "";
  let buscar = false;
  let response = fetch(apiUrl + `London&appid=${apiKey}`)
    .then((res) => res.json())
    .then((apiResponse) => {
      console.log(apiResponse);
      return apiResponse;
    });
  console.log("here");
  $: {
    if (buscar) {
      fetch(apiUrl + `${city}&appid=${apiKey}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Not Found");
          }
          buscar = false;
          return res.json();
        })
        .then((apiResponse) => {
          response = apiResponse;
          buscar = false;
          return response;
        });
    }
  }

  // Evento botón
  function eventoBoton(ciudadEnviada = "") {
    city = ciudadEnviada;
    buscar = true;
  }

  function presionarEnter(e): void {
    if (e.key == "Enter") {
      eventoBoton(input.value);
      input.value = "";
    }
  }
</script>

<div class="card">
  <div class="search">
    <form action="GET"></form>
    <input
      type="text"
      placeholder="Enter city name"
      spellcheck="false"
      on:keydown={presionarEnter}
      bind:this={input}
    />
    <button on:click={() => eventoBoton(input.value)}
      ><i class="fa-solid fa-magnifying-glass"></i></button
    >
  </div>

  {#await response}
    <p class="temp mt-36">...Wait</p>
  {:then data}
    <div class="weather">
      <i class="fa-solid fa-sun wheater"></i>
      <p class="text-3xl">{data.weather[0].main}</p>
    </div>
    <p class="temp">{data.main.temp}°C</p>
    <p class="city">{data.name}</p>
    <WeatherConditions {data} />
  {/await}
</div>

<style>
  .card {
    width: 90%;
    max-width: 470px;
    background: linear-gradient(135deg, #00feba, #5b548a);
    color: #fff;
    margin: auto;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;
    height: 90vh;
  }

  .search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search input {
    /* border: 0;
    outline: 0; */
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    height: 60px;
    border-radius: 30px;
    flex: 1;
    margin-right: 16px;
    font-size: 18px;
  }

  .search button {
    background-color: #ebfffc;
    width: 60px;
    height: 60px;
    border-radius: 40%;
    cursor: pointer;
  }

  .search button i {
    font-size: 1.3rem;
    color: #555;
  }

  .weather {
    font-size: 5rem;
    margin-top: 40px;
  }
  .temp {
    font-size: 50px;
    font-weight: 500;
  }

  .city {
    font-size: 30px;
    font-weight: 400;
    margin-top: -10px;
  }
</style>
