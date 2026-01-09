import React from 'react';

type ContainerProps = {
    title : string
    children : React.ReactNode
}

const Container = (props: ContainerProps) => {
    const { title, children } = props;

    return (
        <div style={{ background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title = 'title'>
            <p>This is children props</p>
        </Container>
    )
}

export default Parent;