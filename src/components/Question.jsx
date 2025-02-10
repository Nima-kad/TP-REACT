/* eslint-disable react/prop-types */

function Question({ question, correct_answer, incorrect_answers, onAnswerSelect, quizSubmitted, userAnswer }) {
    return (
        <div className="question-container">
            <h2>{question}</h2>
            <div className="checkInput">
                {[...incorrect_answers, correct_answer]
                    .sort(() => Math.random() - 0)
                    .map((answer, index) => {
                        let className = "";

                        if (quizSubmitted) {
                            if (answer === correct_answer) {
                                className = "correct"; // Réponse correcte en vert
                            } else if (answer === userAnswer) {
                                className = "incorrect"; // Réponse incorrecte en rouge
                            }
                        }

                        return (
                            <div key={index} className={`answer-item ${className}`}>
                                <input
                                    type="radio"
                                    id={`quiz-answer-${index}`}
                                    name={question}
                                    onChange={() => onAnswerSelect(answer)}
                                    disabled={quizSubmitted} // Désactive les boutons après soumission
                                />
                                <label htmlFor={`quiz-answer-${index}`}>{answer}</label>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Question;