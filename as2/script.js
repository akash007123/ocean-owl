const myCarousel = document.querySelector('#myCarousel')

    if (myCarousel) {
      const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true
      })
    }


    