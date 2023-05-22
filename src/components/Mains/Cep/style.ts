import { styled } from "styled-components";

export const StyledDivCep = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;

    min-height: 100vh;
    width: 100%;
    

    h2 {
        font-size: var(--title2);
    }

    h3 {
        font-size: var(--title3);
    }

    form {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
            width: 48px;
            height: 48px;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }
        }

        input {
        /* width: 100%; */
        width: 409px;
        padding: 8px;
        height: 71px;
        border-radius: 15px;
        outline: none;
        border: none;
        box-shadow: 0 0 4px 0;
        transition: transform 0.2s ease-in-out;

        &::placeholder {
            font-size: 24px;
        }

        &:hover {
            transform: scale(1.01);
        }

    }
    }

    
`