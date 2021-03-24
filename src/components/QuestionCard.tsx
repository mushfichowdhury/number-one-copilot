import React from 'react';
import { AnswerObject } from '../App';
import styled from 'styled-components';

const StyledQuestionCard = styled.div`
p {
    font-size: calc(10px + (16 - 12) * ((100vw - 320px) / (1200 - 320)));
}

.quizheader {
    font-weight: 800;
    font-size: calc(24px + (32 - 24) * ((100vw - 320px) / (1200 - 320)));
    padding: 1.5rem 2.5rem;
    display: flex;
    justify-content: center;
    ailgn-content: center;    
}

.quizbody {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1rem;
    padding: 2.5rem 3.25rem;
    min-height: 140px;

    button {
        padding: 0.75rem 2rem;
        border-radius: 0.375rem;
        color: black;
        font-weight: 700;
        border: none;
        cursor: pointer;
        font-family: "Cabin", sans-serif;
        font-size: 1rem;
        transition: 0.3s all;
        width: 100%;
        height: 5vh;
    }
}

.next {
    background: black;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: none;
    font-size: calc(10px + (18 - 14) * ((100vw - 320px) / (1200 - 320)));
}
.next-disabled {
    pointer-events: none;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: none;
    font-size: calc(10px + (18 - 14) * ((100vw - 320px) / (1200 - 320)));
}

.quizfooter {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

.question-number {
}

.next-btn {
}

.score {
    
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
                        {questionNumber} / {totalQuestions}
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