const smallBtn = document.querySelector(".font-size_small");
const bigBtn = document.querySelector(".font-size_big");
const standartBtn = document.querySelector(".font-size_normal");
const bookContent = document.querySelector(".book");

const blackBtn = document.querySelector(".text_color_black");
const grayBtn = document.querySelector(".text_color_gray");
const smokeBtn = document.querySelector(".text_color_whitesmoke");
const book = document.querySelector(".book__content");

const blackBgBtn = document.querySelector(".bg_color_black");
const grayBgBtn = document.querySelector(".bg_color_gray");
const whiteBgBtn = document.querySelector(".bg_color_white");

smallBtn.addEventListener('click', getSmall);
bigBtn.addEventListener('click', getBig);
standartBtn.addEventListener('click', getStandart);

blackBtn.addEventListener('click', getFontBlack);
grayBtn.addEventListener('click', getFontGray);
smokeBtn.addEventListener('click', getFontSmoke);

blackBgBtn.addEventListener('click', getBlackBackground);
grayBgBtn.addEventListener('click', getGrayBackground);
whiteBgBtn.addEventListener('click', getWhiteBackground);

function getSmall(event) {
    bookContent.classList.add("book_fs-small");

    smallBtn.classList.add("font-size_active");

    if(bigBtn.classList.contains("font-size_active") || standartBtn.classList.contains("font-size_active")){
      bigBtn.classList.remove("font-size_active"); 
      standartBtn.classList.remove("font-size_active");
    };
    
    if(bookContent.classList.contains("book_fs-big")){
      bookContent.classList.remove("book_fs-big");
    };
    
    event.preventDefault();
};

function getBig(event) {
  bigBtn.classList.add("font-size_active");

  if(smallBtn.classList.contains("font-size_active") || standartBtn.classList.contains("font-size_active")){
    smallBtn.classList.remove("font-size_active"); 
    standartBtn.classList.remove("font-size_active");
  };

  bookContent.classList.add("book_fs-big");
  event.preventDefault();

  if(bookContent.classList.contains("book_fs-small")){
    bookContent.classList.remove("book_fs-small");
  }
}

function getStandart(event) {
  event.preventDefault();

  standartBtn.classList.add("font-size_active");

  if(smallBtn.classList.contains("font-size_active") || bigBtn.classList.contains("font-size_active")){
    smallBtn.classList.remove("font-size_active"); 
    bigBtn.classList.remove("font-size_active");
  };

  bookContent.classList.remove("book_fs-small");
  bookContent.classList.remove("book_fs-big");
}

function getFontBlack(event) {
  book.classList.add("book_color-black");

  blackBtn.classList.add("color_active");

  book.classList.remove("book_color-gray");
  book.classList.remove("book_color-whitesmoke");

  grayBtn.classList.remove("color_active");
  smokeBtn.classList.remove("color_active");

  event.preventDefault();
}

function getFontGray(event) {
  book.classList.add("book_color-gray");

  grayBtn.classList.add("color_active");

  book.classList.remove("book_color-black");
  book.classList.remove("book_color-whitesmoke");

  blackBtn.classList.remove("color_active");
  smokeBtn.classList.remove("color_active");

  event.preventDefault();
}

function getFontSmoke(event) {
  book.classList.add("book_color-whitesmoke");

  smokeBtn.classList.add("color_active");

  book.classList.remove("book_color-black");
  book.classList.remove("book_color-gray");

  grayBtn.classList.remove("color_active");
  blackBtn.classList.remove("color_active");

  event.preventDefault();
}

function getBlackBackground(event) {
  book.classList.add("book_bg-black");

  blackBgBtn.classList.add("color_active");

  book.classList.remove("book_bg-white");
  book.classList.remove("book_bg-gray");

  grayBgBtn.classList.remove("color_active");
  whiteBgBtn.classList.remove("color_active");

  event.preventDefault();
}

function getGrayBackground(event) {
  book.classList.add("book_bg-gray");

  grayBgBtn.classList.add("color_active");

  book.classList.remove("book_bg-white");
  book.classList.remove("book_bg-black");

  blackBgBtn.classList.remove("color_active");
  whiteBgBtn.classList.remove("color_active");

  event.preventDefault();
}

function getWhiteBackground(event) {
  book.classList.add("book_bg-white");

  whiteBgBtn.classList.add("color_active");

  book.classList.remove("book_bg-black");
  book.classList.remove("book_bg-gray");

  blackBgBtn.classList.remove("color_active");
  grayBgBtn.classList.remove("color_active");

  event.preventDefault();
}