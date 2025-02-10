/* eslint-disable react/prop-types */
import  { useState } from 'react';
import Question from './Question';
import Result from './Result';

function Quiz({ questions = [] }) {
    const [userAnswers, setUserAnswers] = useState([]);
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    // Fonction pour enregistrer la réponse de l'utilisateur
    const handleAnswerSelect = (questionIndex, answer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = answer;
        setUserAnswers(updatedAnswers);
    };

    // Fonction pour soumettre les réponses
    const handleSubmit = () => {
        setQuizSubmitted(true);
    };

    return (
        <div className="quiz">
           
            {questions.length > 0 ? (
                <>
                    {questions.map((element, index) => (
                        <Question
                            key={index}
                            question={element.question}
                            correct_answer={element.correct_answer}
                            incorrect_answers={element.incorrect_answers}
                            onAnswerSelect={(answer) => handleAnswerSelect(index, answer)}
                            quizSubmitted={quizSubmitted} // Ajout de la propriété quizSubmitted
                            userAnswer={userAnswers[index]} // Ajout de la propriété userAnswer
                        />
                    ))}

                    {!quizSubmitted && (
                        <button onClick={handleSubmit} className="submit-btn">
                            Envoyer
                            
                        </button>
                    )}

                    {quizSubmitted && <Result questions={questions} userAnswers={userAnswers} />}
                </>
            ) : (
                <p>Chargement des questions...</p>
            )}
        </div>
    );
}

export default Quiz;
