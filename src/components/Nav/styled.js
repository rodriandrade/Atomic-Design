import styled from 'styled-components'

const List = styled.li`
    font-size: 50px;
    font-family: 'Staatliches', cursive;
    color: #fff !important ;
    a{
        color: #fff;
        text-decoration: none;
        :hover {text-decoration: underline #fff;}
    }
`

const Ul = styled.ul`
    list-style: none;
`

export {List, Ul}