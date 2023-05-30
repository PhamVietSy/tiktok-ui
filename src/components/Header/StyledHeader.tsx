import styled, { css } from 'styled-components';

export const HeaderPage = styled.header`
    --search-boder-radius: 92px;
    --search-height: 46px;
    --search-top-spacer: 9px;
    --search-button-width: 52px;
    height: 60px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 19%) 0px 1px 1px;
    display: flex;
    justify-content: center;
`;
export const Inner = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ccc;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5), 0 0 10px 0 rgba(0, 0, 0, 0.25);
`;
export const LogoHead = styled.div`
    margin-left: 20px;
`;
export const SearchHead = styled.div`
    position: relative;
    width: 360px;
    height: var(--search-height);
    display: flex;
    padding-left: 16px;
    background-color: rgba(22, 24, 35, 0.06);
    border-radius: var(--search-boder-radius);
    &::after {
        content: '';
        position: absolute;
        top: var(--search-top-spacer);
        right: var(--search-button-width);
        width: 1px;
        height: calc(var(--search-height) - var(--search-top-spacer) * 2);
        background-color: rgba(22, 24, 35, 0.12);
    }
    &:focus-within {
        border: 1.5px solid rgba(22, 24, 35, 0.2);
    }
`;
export const InputHead = styled.input`
    flex: 1;
    color: #000;
    font-size: 1rem;
    border: none;
    outline: none;
    padding: 12px 16px;
    background-color: transparent;
`;

export const ButtonType = {
    SEARCH: 'SEARCH',
    LOADING: 'LOADING',
    LOGIN: 'LOGIN',
    UPLOAD: 'UPLOAD',
};
export const Button = ({ ...rest }) => {
    return <AppButton {...rest}></AppButton>;
};

export const AppButton = styled.button`
    border-radius: 5px;

    outline: none;
    cursor: pointer;
    background: transparent;
    ${(props) =>
        props.type === ButtonType.SEARCH &&
        css`
            width: var(--search-button-width);
            height: 100%;
            border-top-right-radius: var(--search-boder-radius);
            border-bottom-right-radius: var(--search-boder-radius);
            font-size: 1.8rem;
            color: rgba(26, 29, 48, 0.34);
            border: none;
            &:hover {
                cursor: pointer;
                background-color: rgba(22, 24, 35, 0.03);
            }
            &:active {
                background-color: rgba(22, 24, 35, 0.06);
            }
        `};
    ${(props) =>
        props.type === ButtonType.LOADING &&
        css`
            position: absolute;
            right: calc(var(--search-button-width) + 16px);
            top: 50%;
            transform: translateY(-50%);
            border: none;
        `};
    ${(props) =>
        props.type === ButtonType.LOGIN &&
        css`
            font-size: 16px;
            padding: 6px 20px;
            margin: 0 20px;
            color: white;
            background-color: rgba(254, 44, 85, 1);
            border: none;
            &:hover {
                cursor: pointer;
                background-color: #c2334f;
            }
        `};
    ${(props) =>
        props.type === ButtonType.LOGIN &&
        css`
            font-size: 16px;
            padding: 6px 25px;
            margin: 0 20px;
            color: white;
            background-color: rgba(254, 44, 85, 1);
            border: none;
            &:hover {
                cursor: pointer;
                background-color: #c2334f;
            }
        `};
    ${(props) =>
        props.type === ButtonType.UPLOAD &&
        css`
            font-size: 16px;
            padding: 5px 16px;
            margin: 0 20px;
            border: 0.1px solid;
        `};
`;
export const ActionHead = styled.div``;
export const UploadHead = styled.div``;

// export const A = styled.a`
//     color: white;
//     font-size: 18px;
//     padding: 5px;
//     margin: 5px;
//     &:hover,
//     &:focus {
//         color: palevioletred;
//     }
//     &:active {
//         color: red;
//     }
// `;
// export const AA = styled.a`
//     font-size: 18px;
//     padding-top: 12px;
//     margin: 5px;
//     &:hover,
//     &:focus {
//         color: palevioletred;
//     }
//     &:active {
//         color: red;
//     }
// `;
