import styled from 'styled-components'

export const Container = styled.div`
    z-index: 1;
    vertical-align:center;
    background: radial-gradient(circle, rgb(59, 59, 59), rgba(59, 59, 59) );
    position:fixed;                  

    bottom:0;                          
    right:0;  
    left:0;
    width: 100%;
    height:  20%;
    overflow-x:hidden;
    overflow-y:hidden;

    @media (max-width: 3000px) {
      padding: 3rem;
        
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
    margin-left:10px;
    margin-top:5px;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: #CD4E4E;
        transition: 200ms ease-in;
        cursor: pointer;
    }
`;

export const Tittle = styled.div`
    font-size: 20px;
    color: #fff;
    margin-botton:40px;
    text-decoration:none;
    margin-left:10px;
`;