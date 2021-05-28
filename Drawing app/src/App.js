import { useRef, useState } from "react";
import { Stage, Layer, Text, Line } from "react-konva";
import "./App.css";

function App() {
  const [selectedTool, setSelectedTool] = useState("pen");
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const mouseDown = (e) => {
    isDrawing.current = true;
    const position = e.target.getStage().getPointerPosition();
    setLines([...lines, { selectedTool, points: [position.x, position.y] }]);
  };

  const mouseUp = () => {
    isDrawing.current = false;
  };

  const mouseMove = (e) => {
    if (isDrawing.current) {
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      let lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const penTool = () => {
    setSelectedTool("pen");
  };

  const eraserTool = () => {
    setSelectedTool("eraser");
  };

  return (
    <div className="app">
      <div className="app__toolbar">
        <div
          style={{
            cursor: "pointer",
            margin: "1rem 0.2rem",
          }}
          onClick={penTool}
        >
          ✏️
        </div>
        <div
          style={{
            cursor: "pointer",
            margin: "1rem 0",
          }}
          onClick={eraserTool}
        >
          ❌
        </div>
      </div>
      <div className="app__canvas">
        <Stage
          width={window.innerWidth - 350}
          height={window.innerHeight - 150}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          onMouseMove={mouseMove}
        >
          <Layer>
            <Text text="Start Drawing" x={10} y={10} />
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke="#000"
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                globalCompositeOperation={
                  line.selectedTool === "eraser"
                    ? "destination-out"
                    : "source-over"
                }
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default App;
