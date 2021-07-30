import Block from './block';
const Board=()=>{
    return(
        <div className="heading">
            <h1>Chessboard</h1>
        <div className="board">
            <Block/>
        </div>
        </div>
    );
  }
  
  export default Board;