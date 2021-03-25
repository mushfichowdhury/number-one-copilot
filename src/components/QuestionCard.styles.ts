import styled from 'styled-components';

export const StyledQuestionCard = styled.div`
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
    font-size: calc(10px + (32 - 24) * ((100vw - 320px) / (1200 - 320)));
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

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    translation: all 0.3s ease;

    :hover {
        opacity: 0.75;
    }

    button {
        curser: pointer;
        user-select: none;
        padding: 0.75rem 2rem;
        border-radius: 0.375rem;
        color: black;
        font-weight: 700;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        width: 100%;
        height: 5vh;
        background: ${
            ({ correct, userClicked }) =>
                correct ? 'green' : !correct && userClicked ? 'red' : null
            };
    }
`;