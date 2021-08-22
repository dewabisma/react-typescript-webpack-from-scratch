import "./app.css";
import IMAGE from "./image.jpg";
import SVG from "./image.svg";

const App = () => {
  return (
    <div>
      <h1>React TypeScript Webpack From Scratch</h1>
      <img src={IMAGE} alt="gambar" />
      <img src={SVG} alt="svg deh" />
    </div>
  );
};

export default App;
