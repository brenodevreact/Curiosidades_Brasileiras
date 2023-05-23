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
            font-size: 16px;
        }

        &:hover {
            transform: scale(1.01);
        }

    }
    }
`

export const ResponseDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    box-shadow: 0px 0px 4px 0px;
    border-radius: 10px;
    gap: 20px;
    position: relative;

    /* width: 100%; */
    max-width: 499px;
    max-height: 299px;
    overflow: auto;
    padding: 20px;
    font-size: var(--text2);
    transition: transform 0.2s ease-in-out;

    img {
            width: 34px;
            height: 34px;
            position: absolute;
            right: 20px;
            top: 20px;
            transition: transform 0.2s ease-in-out;
         cursor: pointer;

            &:hover {
            transform: scale(1.1);
        }

        }
`

export const LottieDiv = styled.div`
    width: 499px;
    height: 299px;
    transition: transform 0.2s ease-in-out;
`

export const DivDDD = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    gap: 17px;

    div {
        display: flex;
        
    max-width: 80%;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    }
`