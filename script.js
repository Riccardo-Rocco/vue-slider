const app = Vue.createApp({
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          immagine: 'https://img.freepik.com/free-photo/close-up-friendly-looking-happy-positive-lucky-young-female-wearing-checked-shirt-t-shirt-smiling-broadly-delighted-feeling-awesome-joyful-day-enjoying-life-standing-white-background_176420-34722.jpg',
          titolo: 'Esperienza fantastica!',
          contenuto: 'Ho apprezzato molto il servizio e la qualità del prodotto. Sicuramente tornerò!',
          autoreNome: 'Marco',
          autoreCognome: 'Rossi'
        },
        {
          immagine: 'https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg',
          titolo: 'Prodotto eccezionale!',
          contenuto: 'Il prodotto supera le aspettative, funziona benissimo e ha un ottimo design.',
          autoreNome: 'Laura',
          autoreCognome: 'Bianchi'
        },
        {
          immagine: 'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg',
          titolo: 'Servizio impeccabile!',
          contenuto: 'Il personale è cordiale e attento alle esigenze del cliente. Consigliato!',
          autoreNome: 'Giovanni',
          autoreCognome: 'Verdi'
        }
      ],
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
  },
});

app.mount('#app');
