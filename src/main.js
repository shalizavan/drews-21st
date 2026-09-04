import './style.css'
import confetti from 'canvas-confetti'
import { PageFlip } from 'page-flip'
import { fish } from './data/fish.js'

const app = document.querySelector('#app')

const dorado = fish.find(fishItem => fishItem.id === 'dorado')
const bluefinTuna = fish.find(fishItem => fishItem.id === 'bluefin-tuna')
const fishPages = fish.map((fishItem) => {

  const leftPhoto =
    fishItem.drewPhoto || fishItem.speciesPhoto

  const rightSide =
    fishItem.type === 'saltwater'
      ? `
          <img
            src="${fishItem.pixelFish}"
            alt="Pixel art ${fishItem.name}"
            class="pixel-fish-image"
          >
        `
      : ''

  return `
    <div class="book-page">
      <div class="fish-page">

        <p class="fish-number">DREW'S CATCH</p>

        <h2>${fishItem.name}</h2>

        <img
          src="${leftPhoto}"
          alt="${fishItem.name}"
          class="sample-fish-photo"
          style="object-fit: contain; padding: 0;"
        >

        <div class="fish-divider">♡ ♡ ♡</div>

      </div>
    </div>

    <div class="book-page">
      <div class="fish-page fish-info-page">

        ${rightSide}

        
        <h3>FACT</h3>

        <p>
          ${fishItem.fact || 'Fact coming soon...'}
        </p>

      </div>
    </div>
  `
}).join('')

app.innerHTML = `
  <main>

    <!-- ==================================================
         HOME PAGE
    =================================================== -->

    <section id="home-view" class="view active">

      <!-- FLOATING BALLOONS -->
      <div class="balloon-layer" aria-hidden="true">
        <div class="balloon balloon-1"></div>
        <div class="balloon balloon-2"></div>
        <div class="balloon balloon-3"></div>
        <div class="balloon balloon-4"></div>
        <div class="balloon balloon-5"></div>
        <div class="balloon balloon-6"></div>
      </div>

      <!-- FLOATING BUBBLES -->
      <div class="bubble-layer" aria-hidden="true">

        <span class="bubble bubble-1"></span>
        <span class="bubble bubble-2"></span>
        <span class="bubble bubble-3"></span>
        <span class="bubble bubble-4"></span>
        <span class="bubble bubble-5"></span>
        <span class="bubble bubble-6"></span>
        <span class="bubble bubble-7"></span>
        <span class="bubble bubble-8"></span>
        <span class="bubble bubble-9"></span>
        <span class="bubble bubble-10"></span>
        <span class="bubble bubble-11"></span>
        <span class="bubble bubble-12"></span>

        <span class="bubble bubble-1"></span>
        <span class="bubble bubble-2"></span>
        <span class="bubble bubble-3"></span>
        <span class="bubble bubble-4"></span>
        <span class="bubble bubble-5"></span>
        <span class="bubble bubble-6"></span>
        <span class="bubble bubble-7"></span>
        <span class="bubble bubble-8"></span>
        <span class="bubble bubble-9"></span>
        <span class="bubble bubble-10"></span>
        <span class="bubble bubble-11"></span>
        <span class="bubble bubble-12"></span>

      </div>

      <div class="home-page">

        <!-- TITLE -->
        <header class="birthday-header">
          <h1>♡ Drew's 21st ♡</h1>
        </header>

        <!-- OUR PHOTO -->
        <section class="photo-section">

          <div class="photo-frame">

            <img
              src="/photos/us.png"
              alt="Shaliz and Drew"
              class="main-photo"
            >

          </div>

        </section>

        <!-- BIRTHDAY DESSERT DECORATIONS -->
        <section class="party-section">

          <img
            src="/decorations/sundae-cup.png"
            alt=""
            class="party-dessert small-dessert"
          >

          <img
            src="/decorations/banana-split.png"
            alt=""
            class="party-dessert small-dessert"
          >

          <button
            id="cake-button"
            class="cake-button"
            type="button"
            aria-label="Birthday cake"
          >

            <img
              src="/decorations/cakedrew.png"
              alt="Birthday cake"
              class="main-cake"
            >

          </button>

          <img
            src="/decorations/chocolate-cake.png"
            alt=""
            class="party-dessert small-dessert"
          >

          <img
            src="/decorations/berry-cake.png"
            alt=""
            class="party-dessert small-dessert"
          >

        </section>

        <!-- MAIN FEATURES -->
        <section class="main-attractions">

          <!-- FISHING BOOK -->
          <button
            id="book-button"
            class="attraction-card"
            type="button"
          >

            <img
              src="/decorations/fishing-book-icon.png"
              alt="Fishing book"
              class="attraction-image"
            >

            <h2>Drew's Fishing Book</h2>

          </button>

          <!-- AQUARIUM -->
          <button
            id="aquarium-button"
            class="attraction-card"
            type="button"
          >

            <img
              src="/decorations/aquarium-icon.png"
              alt="Aquarium"
              class="attraction-image"
            >

            <h2>Drew's Saltwater Aquarium</h2>

          </button>

        </section>

      </div>

    </section>


    <!-- ==================================================
         FISHING BOOK PAGE
    =================================================== -->

    <section id="book-view" class="view">

      <button
        class="back-button"
        type="button"
      >
        ← Back Home
      </button>

      <div class="book-page-layout">

        <h1 class="book-title">
          Drew's Fishing Book
        </h1>

        <!-- PAGE FLIP BOOK -->
        <div id="fishing-book">

          <!-- COVER -->
          <div
            class="book-page book-cover"
            data-density="hard"
          >

            <div class="cover-content">

              <div class="cover-fish">
                🐟
              </div>

              <h2>
                Drew's<br>
                Fishing Book
              </h2>

              <p>
                21st Birthday Edition
              </p>

              <span class="cover-heart">
                ♡
              </span>

            </div>

          </div>


          ${fishPages}

          <!-- END PAGE -->
          <div class="book-page">

            <div class="fish-page book-end-page">

              <h2>
                More fish<br>
                coming soon...
              </h2>

              <div class="end-decoration">
                ~ ~ ~ 🐟 ~ ~ ~
              </div>

              <p>
                This page is temporary while
                we build Drew's collection.
              </p>

              <span class="cover-heart">
                ♡
              </span>

            </div>

          </div>

        </div>


        <!-- BOOK CONTROLS -->
        <div class="book-controls">

          <button
            id="previous-page"
            type="button"
          >
            ← Previous
          </button>

          <span id="page-counter">
            Page 1
          </span>

          <button
            id="next-page"
            type="button"
          >
            Next →
          </button>

        </div>

      </div>

    </section>


    <!-- ==================================================
         AQUARIUM PAGE
    =================================================== -->

    <section id="aquarium-view" class="view">

      <button
        class="back-button"
        type="button"
      >
        ← Back Home
      </button>

      <h1>
        Drew's Saltwater Aquarium
      </h1>

      <p>
        The aquarium will go here.
      </p>

    </section>

  </main>
`


// ==================================================
// PAGE NAVIGATION
// ==================================================

const homeView = document.querySelector('#home-view')
const bookView = document.querySelector('#book-view')
const aquariumView = document.querySelector('#aquarium-view')

function showView(view) {

  homeView.classList.remove('active')
  bookView.classList.remove('active')
  aquariumView.classList.remove('active')

  view.classList.add('active')

  window.scrollTo(0, 0)

}


// OPEN FISHING BOOK

document.querySelector('#book-button').addEventListener('click', () => {
  showView(bookView)

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'))
  }, 100)
})


// OPEN AQUARIUM

document
  .querySelector('#aquarium-button')
  .addEventListener('click', () => {

    showView(aquariumView)

  })


// BACK HOME

document
  .querySelectorAll('.back-button')
  .forEach((button) => {

    button.addEventListener('click', () => {

      showView(homeView)

    })

  })


// ==================================================
// FISHING BOOK
// ==================================================

const bookElement =
  document.querySelector('#fishing-book')

const pageFlip =
  new PageFlip(bookElement, {

    width: 430,
    height: 580,

    size: 'stretch',

    minWidth: 300,
    maxWidth: 470,

    minHeight: 400,
    maxHeight: 630,

    maxShadowOpacity: 0.45,

    showCover: true,

    mobileScrollSupport: false

  })

pageFlip.loadFromHTML(
  document.querySelectorAll('.book-page')
)


// BOOK BUTTONS

document
  .querySelector('#previous-page')
  .addEventListener('click', () => {

    pageFlip.flipPrev()

  })

document
  .querySelector('#next-page')
  .addEventListener('click', () => {

    pageFlip.flipNext()

  })


// PAGE COUNTER

const pageCounter =
  document.querySelector('#page-counter')

pageFlip.on('flip', (event) => {

  const pageNumber =
    event.data + 1

  pageCounter.textContent =
    `Page ${pageNumber}`

})


// ==================================================
// OPENING CONFETTI
// ==================================================

function birthdayConfetti() {

  confetti({

    particleCount: 120,

    spread: 90,

    startVelocity: 45,

    origin: {
      x: 0.5,
      y: 0.3
    }

  })


  setTimeout(() => {

    confetti({

      particleCount: 70,

      angle: 60,

      spread: 70,

      origin: {
        x: 0,
        y: 0.5
      }

    })


    confetti({

      particleCount: 70,

      angle: 120,

      spread: 70,

      origin: {
        x: 1,
        y: 0.5
      }

    })

  }, 350)

}

birthdayConfetti()


// ==================================================
// BIRTHDAY CAKE EASTER EGG
// ==================================================

let cakeClicks = 0

document
  .querySelector('#cake-button')
  .addEventListener('click', () => {

    cakeClicks++

    if (cakeClicks === 21) {

      confetti({

        particleCount: 300,

        spread: 150,

        startVelocity: 55,

        origin: {
          x: 0.5,
          y: 0.5
        }

      })

      setTimeout(() => {

        alert(
          'HAPPY 21ST BIRTHDAY OLD MAN ♡'
        )

      }, 500)

      cakeClicks = 0

    }

  })

