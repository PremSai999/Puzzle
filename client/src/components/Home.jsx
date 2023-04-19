import "../css/home.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    useEffect(() => {
        document.body.classList.add('home');
        return () => {
          document.body.classList.remove('home');
        };
      }, []);

    const navigate = useNavigate();
    return (
        <>
        <div className="desc">
            <h1>Firefighter Rescue: The Puzzling Mission</h1>
            <h2>With great job comes great responsibilty</h2>
            <br/>
            <p> “Firefighter Rescue: The Puzzling Mission” is an exciting and challenging game that puts the player in the shoes of a brave firefighter on a mission to rescue a 10-year-old child who is trapped somewhere in a burning building. The player must navigate through the building, solving challenging puzzles on each floor to progress and reach the child. The puzzles will test the player’s problem-solving skills and quick thinking as they race against time to save the child. With each puzzle solved, the player moves one step closer to their goal and becomes a hero. Will you be able to solve all the puzzles and rescue the child in time?</p>
            <button onClick= {() => navigate("/puzzle")}>Start Game</button>
        </div>    
        </>
    );
}

export default Home;