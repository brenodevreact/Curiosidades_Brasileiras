import { styled } from "styled-components";

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