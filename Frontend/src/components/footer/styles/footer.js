import styled from 'styled-components'

export const Container = styled.div`
    vertical-align:center;
    padding: 80px 10px;
    background: radial-gradient(circle, rgb(59, 59, 59), rgba(59, 59, 59) );
    position:absolute;                  
    bottom:0;                          
    right:0;  
    left:0;
    @media (max-width: 3000px) {
      padding: 70px 30px;
    }

    `;
export const Wrapper = styled.div`
    displat: flex;
    flex-direction: colum;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
export const Column = styled.div`
    display:flex;
    vertical-align: middle;
    flex-direction: column;
    text-align: left;   


`

export const Row = styled.div`
display: grid;
vertical-align: middle;

grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
}
 
`;
export const Link= styled.a`
    color:#d4d4d4;
    margin-top:5px;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: rgb(53,173,255);
        transition: 200ms ease-in;
        cursor: pointer;
`;

export const Tittle = styled.div`
    font-size: 20px;
    color: #fff;
    margin-botton:40px;
    text-decoration:none;
`;
