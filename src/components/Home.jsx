import { useState } from "react";
import Quiz from "./Quiz";

function Home() {
    const [questions, setQuestions] = useState([]);  // Stocke les questions
    const [quizStarted, setQuizStarted] = useState(false);  // Contrôle l'affichage du quiz

    // Fonction pour récupérer les questions
    const fetchQuestions = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const data = await response.json();
        setQuestions(data.results);  // Met à jour l'état avec les questions
        setQuizStarted(true);  //  Affiche le quiz
    };

    return (
        <div >
            {!quizStarted ? (  // Affiche le bouton seulement avant le début du quiz
                <>
                <div className="home-container">
                    <h1>Prêt à tester tes connaissances ? 🌟</h1>
                    <h2>Challenge-toi avec notre super quizz interactif !</h2>
                    <p>10 questions, 4 réponses, un seul champion. Réussiras-tu à atteindre le score parfait ?</p>
                    <img src="https://img.freepik.com/vecteurs-premium/quiz-dans-style-bande-dessinee-pop-art_175838-505.jpg?w=360" alt="Illustration Quiz" />
                    <button className="start-btn" onClick={fetchQuestions}>Commencer le Quizz</button>
                </div>
                </>
            ) : (
                <Quiz questions={questions} />  // Affiche le quiz après le clic
            )}
        </div>
    );
}

export default Home;