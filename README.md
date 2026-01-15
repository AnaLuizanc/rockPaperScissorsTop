# Rock, Paper, Scissors Game

A simple browser-based Rock, Paper, Scissors game built with vanilla JavaScript.  Play against the computer and track your scores!

## 🎮 How to Play

1. Open the `index.html` file in your web browser
2. Click one of the three buttons:  Rock, Paper, or Scissors
3. The computer will randomly choose its move
4. The winner of each round is determined by the classic rules:
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
5. Scores are tracked and displayed in the browser console
6. The game continues indefinitely until you close or refresh the page

## 🚀 Features

- Interactive button-based gameplay
- Random computer opponent
- Real-time score tracking
- Asynchronous game flow using JavaScript Promises
- Console-based feedback for each round

## 🛠️ Technologies Used

- HTML5
- JavaScript (ES6+)
- Vanilla JavaScript (no frameworks)

## 📁 Project Structure

```
rockPaperScissorsTop/
│
├── index.html      # Main HTML file with game interface
├── script.js       # Game logic and functions
└── README.md       # Project documentation
```

## 🎯 Game Logic

The game uses the following key functions:

- `getComputerChoice()`: Randomly selects rock, paper, or scissors for the computer
- `getHumanChoice()`: Captures player's choice through button clicks using Promises
- `playRound()`: Executes a single round and determines the winner
- Score tracking for both human and computer players

## 🔧 Setup

1. Clone this repository: 
   ```bash
   git clone https://github.com/AnaLuizanc/rockPaperScissorsTop.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rockPaperScissorsTop
   ```

3. Open `index.html` in your preferred web browser: 
   ```bash
   # On Mac
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
   ```

## 💡 Future Improvements

- Add a visual UI to display scores instead of console logs
- Add a "Best of 5" or "First to 10" game mode
- Include animations and styling with CSS
- Display the computer's choice visually
- Add sound effects
- Create a reset/restart button

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**AnaLuizanc**
- GitHub: [@AnaLuizanc](https://github.com/AnaLuizanc)

---

Made as part of [The Odin Project](https://www.theodinproject.com/) curriculum
