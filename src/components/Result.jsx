/* eslint-disable react/prop-types */

function Result({ questions, userAnswers }) {
    const score = questions.reduce((total, question, index) => {//parcourir le tableau question et calculer la somme de réponses correct 
        return total + (userAnswers[index] === question.correct_answer ? 1 : 0);// total accumalateur le score  si la rep est correct on ajout 1 au score sinon on ajout 0
    }, 0);

    let message = "";
    if (score < 5) {
        message = "Ne vous découragez pas ! Vous pouvez essayer de nouveau pour améliorer votre score💪​💪​";
    } else {
        message = "Bravo ! Vous avez fait un excellent travail ! Continuez comme ça​🎉🥰";
    }
    return (
        <>
        <div className="result-container">
            <h2>Résultats</h2>
            <p>
                Vous avez obtenu {score} sur {questions.length} bonnes réponses.
            </p>
            <p>{message}</p> {/* Affichage du message dynamique */}

        </div>
 
        <button
        onClick={() => window.location.reload()}//rechargee la page ce qui permet de redémarer le quiz
      
      >
        Rejouer
      </button>
        </>
    );
}

export default Result;

