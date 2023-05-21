import { styled } from "styled-components";

export const StyledDivHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 100vh;
    width: 100%;
    

    div {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 17px;

        h2 {
            font-size: var(--title2);
        }
        h1{
            font-size: var(--title1);
            
        }
        p {
            font-size: var(--text2);
        }

        span {
            margin-right: 10px;
        }

        button {
            width: 192px;
            height: 62px;
            border-radius: 10px;

            background: linear-gradient(to left, var(--green), var(--yellow));
            
            font-size: var(--text1);
            font-weight: bold;
            color: var(--blue);
                
        }
    }
`

export const ColorBlue = styled.span`
    color: var(--blue)
`
export const ColorYellow = styled.span`
    color: var(--yellow)
`
export const ColorGreen = styled.span`
    color: var(--green)
`