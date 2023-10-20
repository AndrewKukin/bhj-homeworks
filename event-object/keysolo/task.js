class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = timerElement;
    this.timer = 0;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.resetTimer();
  }

  resetTimer() {
    if (this.timerInterval) {
        clearInterval(this.timerInterval);
    }
    this.timer = 0;
    this.timerElement.textContent = this.timer;
}

startTimer(seconds) {
    this.timer = seconds;
    this.timerElement.textContent = this.timer;
    this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
            this.timer--;
            this.timerElement.textContent = this.timer;
        } else {
            clearInterval(this.timerInterval);
            this.fail();
        }
    }, 1000);
}

stopTimer() {
    if (this.timerInterval) {
        clearInterval(this.timerInterval);
    }
}

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
          this.success();
      } else {
          this.fail();
      }
    });
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    this.stopTimer();
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    this.resetTimer();
    const word = this.getWord();
    const timeLimit = word.length;

    this.renderWord(word);
    this.startTimer(timeLimit);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

const timerElement = document.getElementById('timer');
new Game(document.getElementById('game'), timerElement)

