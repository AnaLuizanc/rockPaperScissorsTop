# Rock, Paper, Scissors Game

A modern, interactive browser-based Rock, Paper, Scissors game built with vanilla JavaScript and styled with CSS. Play against a computer opponent with a beautiful UI featuring SVG icons, animations, and real-time score tracking!

**🎲 [Play the game online!](https://analuizanc.github.io/rockPaperScissorsTop/)**

**This project was created as part of [The Odin Project](https://www.theodinproject.com/) curriculum.**

## 🎮 How to Play

1. Open the `index.html` file in your web browser
2. Click one of the three buttons: Rock, Paper, or Scissors
3. The computer will randomly choose its move with a loading animation
4. Both choices are displayed with visual icons
5. The winner of each round is determined by the classic rules:
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
6. Scores are tracked and displayed on screen with a digital font
7. Each round result is shown with colored alert messages
8. The game continues indefinitely with automatic round resets

## 🚀 Features

- **Visual Interface**: Beautiful UI with SVG icons for all choices and players
- **Real-time Scoring**: Digital scoreboard that updates automatically
- **Interactive Feedback**: Hover effects and visual choice previews
- **Loading Animation**: CSS-powered spinning loader for computer thinking
- **Alert Messages**: Color-coded win/lose/draw notifications
- **Responsive Design**: Mobile-friendly layout with CSS media queries
- **Smooth Animations**: Timed transitions between rounds
- **Modular Code**: ES6 modules for clean code organization

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling, animations, flexbox, and media queries
- **JavaScript (ES6+)**: Modules, event handling, and DOM manipulation
- **SVG Icons**: Scalable vector graphics for crisp visuals
- **Custom Fonts**: Digital clock font for retro scoreboard styling

## 📁 Project Structure

```
rockPaperScissorsTop/
│
├── index.html              # Main HTML file with game interface
├── README.md              # Project documentation
├── digital-font/          # Custom font files
│   └── readme.txt
└── static/
    ├── css/
    │   ├── style.css      # Main styles and responsive design
    │   └── loader.css     # CSS loading animation
    └── js/
        ├── script.js      # Main game controller and UI logic
        ├── gameLogic.js   # Game rules and computer AI
        └── svgIcons.js    # SVG icon definitions
```

## 🎯 Game Logic

The game architecture uses modern JavaScript practices:

- **`getComputerChoice()`**: Randomly selects rock, paper, or scissors for the computer
- **`getWinner(human, computer)`**: Determines round winner based on classic rules
- **Event-driven gameplay**: Button clicks trigger rounds with proper state management
- **Round state control**: Prevents multiple clicks during computer "thinking"
- **Visual feedback system**: Icons update to show both player and computer choices
- **Score persistence**: Scores maintained throughout the session

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
   # On Mac/Linux
   open index.html
   
   # On Windows
   start index.html
   
   # Or simply double-click the index.html file
   ```

No build process or dependencies required - it's pure vanilla JavaScript!

## 🎨 Key Features Explained

- **SVG Icons**: All game icons are embedded as SVG for crisp display at any size
- **Digital Scoreboard**: Uses a custom digital font for retro arcade feel
- **Loading Animation**: Pure CSS spinning animation while computer "thinks"
- **Alert System**: Color-coded feedback (green for wins, red for losses)
- **Responsive Design**: Adapts layout for mobile devices
- **Hover Previews**: See your choice before clicking


## 📝 License

This project is open source and available for educational purposes as part of The Odin Project curriculum.

## 👤 Author

**AnaLuizanc**
- GitHub: [@AnaLuizanc](https://github.com/AnaLuizanc)

---

Made with ❤️ as part of [The Odin Project](https://www.theodinproject.com/) curriculum
