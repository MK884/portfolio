import Calculator from "../assets/calculator.png";
import GuessW from "../assets/guess-words.png";
import ColorP from "../assets/color-plate.png";
import QR from "../assets/qr.png";
import Password from "../assets/password.png";
import Translator from "../assets/translator.png";
import Typing from "../assets/typing.png";
import Movies from "../assets/movies.jpeg";
import Blog from "../assets/blog.jpeg";

const projects = [
  {
    id: 8,
    thumbnail: Movies,
    title: "Movies Informations",
    demoUrl: "https://movies-info-card.netlify.app/",
    codeUrl: "https://github.com/MK884/Movie-Info",
    desc: "Its just a React Project which uses OMBD API for displaying movies information.",
  },
  {
    id: 9,
    thumbnail: Blog,
    title: "Blog Website",
    demoUrl: "https://movies-info-card.netlify.app/",
    codeUrl: "https://github.com/MK884/Movie-Info",
    desc: "Simple Blog Website with comments features",
  },
  {
    id: 1,
    thumbnail: Calculator,
    title: "Simple Calculator",
    demoUrl: "https://calculator-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/JsTutorials/tree/main/Calculator",
    desc: "In this project, we'll create a basic calculator using HTML for the structure, CSS for styling, and JavaScript for functionality. By combining these technologies, we'll build a user-friendly calculator interface that can perform simple arithmetic operations",
  },
  {
    id: 2,
    thumbnail: GuessW,
    title: "Guess The Words",
    demoUrl: "https://guess-words-game.vercel.app/",
    codeUrl: "https://github.com/MK884/JsTutorials/tree/main/GuessWords",
    desc: "The word guessing game is a task that which the player has to find all letters of a random word in the given tries. The game will also give you hints to make your guess easy.",
  },
  {
    id: 3,
    thumbnail: ColorP,
    title: "Random Color Plate Generator",
    demoUrl: "https://color-plate-khalid.vercel.app/",
    codeUrl:
      "https://github.com/MK884/JsTutorials/tree/main/Color%20Palette%20Generator",
    desc: "Create A Random Color Palette Generator in HTML, CSS, and JavaScript. Users can click on the “Refresh Palette” button in this color palette generator to generate a new set of random colors with their hex color code. They can also easily copy the hex color code by clicking on the corresponding color card.",
  },
  {
    id: 4,
    thumbnail: QR,
    title: "QR Code Generator",
    demoUrl: "https://qr-code-generator-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/Qr-code-generator",
    desc: "QR (Quick Response) codes are capable of storing lots of data, and users can easily access the information by scanning the QR code. In my QR Code Generator app, users can enter a text or URL to generate a QR code for it. It is a QR code generator app, not a QR code scanner.",
  },
  {
    id: 5,
    thumbnail: Password,
    title: "Passowrd Generator",
    demoUrl: "https://qr-code-generator-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/Qr-code-generator",
    desc: "In my Random Password Generator App, users can generate random passwords by customizing their preferred settings such as lowercase, uppercase, number, etc. There is also a password strength meter that indicates the strength of the user’s generated password. And last, user can copy their generated password to the clipboard.",
  },
  {
    id: 6,
    thumbnail: Translator,
    title: "Translator WebApp",
    demoUrl: "https://translator-app-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/translator",
    desc: "In my language translator app, users can easily translate text into different languages, copy translated text, and convert text to speech. It is similar to Google Translate.",
  },
  {
    id: 7,
    thumbnail: Typing,
    title: "Typing WebApp",
    demoUrl: "https://typing-app-khalid.vercel.app/",
    codeUrl: "https://github.com/MK884/translator",
    desc: "Typing speed test is a game where you can check your typing speed like WPM (Word Per Minute), CPM (Character Per Minute), Accuracy, etc.",
  },
];

export default projects;
