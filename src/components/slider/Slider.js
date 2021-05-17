import React from 'react'
import crsl1 from '../../../src/assests/crsl-1.png'
import crsl2 from '../../../src/assests/crsl-2.png'
import crsl3 from '../../../src/assests/crsl-3.jpg'
import crsl4 from '../../../src/assests/crsl-4.jpg'
 function Slider() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={crsl1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={crsl2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={crsl3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={crsl4} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}
export default Slider