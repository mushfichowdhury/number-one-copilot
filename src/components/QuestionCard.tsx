import React from 'react';
import { AnswerObject } from '../App';
import { StyledQuestionCard, ButtonWrapper } from './QuestionCard.styles';

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
                    <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </ButtonWrapper>
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