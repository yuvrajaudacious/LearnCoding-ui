import React, { useState } from "react";
import { Button, Row, Col, message, Card } from "antd";
import styles from "./styles.module.less"
const Game: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const newSquares: (string | null)[] = [...squares];
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => {
    return (
      <Button type="primary" size="large" onClick={() => handleClick(i)}>
        {squares[i]}
      </Button>
    );
  };

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
    message.success(status);
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <Card className={styles.box}>
      <div className={styles.codeboc}>
        <Row   gutter={[16, 16]}>
          <Col className={styles.codeboc} span={8}>{renderSquare(0)}</Col>
          <Col span={8}>{renderSquare(1)}</Col>
          <Col span={8}>{renderSquare(2)}</Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>{renderSquare(3)}</Col>
          <Col span={8}>{renderSquare(4)}</Col>
          <Col span={8}>{renderSquare(5)}</Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>{renderSquare(6)}</Col>
          <Col span={8}>{renderSquare(7)}</Col>
          <Col span={8}>{renderSquare(8)}</Col>
        </Row>
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </Card>
  );
};

function calculateWinner(squares: (string | null)[]): string | null {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
