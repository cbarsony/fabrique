import React from 'react'
import update from 'immutability-helper'
import logo from './logo.svg';
import {Transformable, Transormable} from './cmp/Zone'
import { Stage, Layer, Rect, Transformer } from 'react-konva'
import './App.css';

const shapesData = [
  {
    x: 100,
    y: 200,
    radius: 66,
    fill: 'blue',
  },
]

const xshapesData = [
  {
    id: 1,
    width: 200,
    height: 300,
    x: 10,
    y: 100,
    fill: 'red',
  },
  {
    id: 2,
    width: 100,
    height: 100,
    x: 400,
    y: 400,
    fill: 'blue',
  },
]

function App() {
  const [shapes, setShapes] = React.useState(shapesData)
  const [selectedShapeIdx, setSelectedShapeIdx] = React.useState(null)

  return (
    <div className="App">
      <Stage
        width={600}
        height={600}
      >
        <Layer>
          {shapes.map((shape, shapeIdx) => (
            <Transormable
              key={shapeIdx}
              shapeProps={shape}
              isSelected={shapeIdx === selectedShapeIdx}
              onSelect={() => {
                setSelectedShapeIdx(shapeIdx);
              }}
              onChange={newShape => {
                setShapes(update(shapes, {
                   [shapeIdx]: {
                     $set: newShape,
                   },
                }))
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
