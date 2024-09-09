  document.addEventListener('DOMContentLoaded', function() {
            const element = document.querySelector('.img_slide');
            const images = [
                '/Public/Image/Index/slide1.png',
                '/Public/Image/Index/slide2.png'
            ];
            let currentIndex = 0;

            function changeImage() {
                currentIndex = (currentIndex + 1) % images.length;
                element.style.backgroundImage = `url(${images[currentIndex]})`;
            }

            setInterval(changeImage, 5000); 
        });


// Chuyển sản phẩm

// function createProductSlider(cardContainerSelector, prevButtonSelector, nextButtonSelector) {
//   const cardContainer = document.querySelector(cardContainerSelector);
//   const cardProducts = cardContainer.querySelectorAll('.card_product');
//   const prevBtn = document.querySelector(prevButtonSelector);
//   const nextBtn = document.querySelector(nextButtonSelector);

//   let currentIndex = 0;

// function showSlide(index) {
//   currentIndex = index;
//   cardProducts.forEach((product, i) => {
//     const translateX = -index * (product.offsetWidth + 20);
//     product.style.transform = `translateX(${translateX}px)`;
// product.style.transiton=` all .3s`;
//   });

//   cardContainer.scrollTo({
//     left: cardProducts[index].offsetLeft
//   });
// }

// prevBtn.addEventListener('click', () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = cardProducts.length - 1; // Quay về card cuối cùng
//   }
//   showSlide(currentIndex);
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex++;
//   if (currentIndex >= cardProducts.length) {
//     currentIndex = 0; // Quay về card đầu tiên
//   }
//   showSlide(currentIndex);

// });

// }

window.addEventListener('load', function() {
  setupScroll('card_3', 'nextButton3', 'prewButton3');
  setupScroll('card_2', 'nextButton2', 'prewButton2');
  setupScroll('card', 'nextButton', 'prewButton');
});

function scrollNext(list) {
  if (list) {
    list.scrollLeft += 200;
  }
}

function scrollPrev(list) {
  if (list) {
    list.scrollLeft -= 200;
  }
}

function setupScroll(listId, nextButtonId, prevButtonId){
  var list = document.getElementById(listId);
  var nextButton = document.getElementById(nextButtonId);
  var prevButton = document.getElementById(prevButtonId);

  if (!list || !nextButton || !prevButton) {
    console.error('Không tìm thấy phần tử với ID:', { listId, nextButtonId, prevButtonId });
    return;
  }

  nextButton.addEventListener('click', function() {
    scrollNext(list);
  });

  prevButton.addEventListener('click', function() {
    scrollPrev(list);
  });
}
