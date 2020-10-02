import styled from 'styled-components'

const List = styled.li`
    font-size: 80px;
    font-family: 'Staatliches';
    letter-spacing: 10px;
    color: #fff !important ;
    a{
        color: #fff;
        text-decoration: none;
        position: relative;
        :hover::after {
            content: '';
            position: absolute;
            background: linear-gradient(90.01deg,#68F4DB 0%,#1E0358 99.98%);
            width: 45%;
            bottom: 0;
            left: 0;
            padding-bottom: 12px;
        }
    }
`

const Ul = styled.ul`
    list-style: none;
    padding:0;
`

export {List, Ul}