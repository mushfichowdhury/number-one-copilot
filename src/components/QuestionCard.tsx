import React from 'react';
import { AnswerObject } from '../App';
import styled from 'styled-components';

const StyledQuestionCard = styled.div`
.quizheader {
    font-weight: 800;
    font-size: 22px;
    padding: 1.5rem 2.5rem;
    border-bottom: 1px solid $border-color;
}

.quizbody {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1rem;
    padding: 2.5rem 3.25rem;
    min-height: 140px;
}

.next {
    background: green;
}
.next-disabled {
    pointer-events: none;
    background: grey;
}

.quizfooter {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 0.5fr;
    grid-template-rows: 50px;
    gap: 0% 5%;
    grid-template-areas:
    "score . question-number next-btn";
    padding: 15px;
}

.question-number {
    grid-area: question-number;
}

.next-btn {
    grid-area: next-btn;
}

}

`;

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
    gameOver: boolean;
    loading: boolean;
    number: number;
    allAnswers: any;
    nextQuestion: any;
    score: number;
}
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
    gameOver,
    loading,
    number,
    allAnswers,
    nextQuestion,
    score
}) => {
    return (
        <StyledQuestionCard>
            <header className="quizheader">
                <p dangerouslySetInnerHTML={{ __html: question }} />
            </header>
            <main className="quizbody">
                {answers.map(answer => (
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </div>
                ))}
            </main>
            <footer className="quizfooter">
                {!gameOver ? <p className="score">Score: {score}</p> : null}
                    <p className="question-number">
                        Question: {questionNumber} / {totalQuestions}
                    </p>
                    <div className="next-btn">
                        {!gameOver && !loading && allAnswers.length === number + 1 && number !== totalQuestions - 1 ? (
                            <button className="next" onClick={nextQuestion}>
                                Next Question
                            </button>
                        ) : <button className="next-disabled" onClick={nextQuestion}>
                                    Next Question
                            </button>}
                    </div>
            </footer>
        </StyledQuestionCard>
    )
}

export default QuestionCard;