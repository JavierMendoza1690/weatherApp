<script>
    export let data;
</script>

<div class="details">
    <div class="col">
        <i class="fa-solid fa-water weatherIcon"></i>
         <div>
            <p class="humidity">{data.main.humidity}%</p>
            <p>Humidity</p>
         </div>
      </div>
      <div class="col">
         <i class="fa-solid fa-wind windIcon"></i>
         <div>
            <p class="wind">{data.wind.speed}km/h</p>
            <p>Wind speed</p>
         </div>
      </div>
</div>


<style>

    .details{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:  0 20px;
        margin-top: 40px;
    }



    .col{
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: center;
        margin-top: 0px;
    }

    .col i{
        
        font-size: 2.5rem;
        margin-right: 10px;
        align-self: center;
    }

    .col p{
        font-size: 1rem;
     
    }

    .humidity, .wind{
        font-size: 28px;
        margin-top: -6px;
    }

</style>