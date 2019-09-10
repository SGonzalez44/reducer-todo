import React from 'react';

export const Todo = props => (
    <div onClick={() => {props.markComplete(props.id)}}>
        <p style={{textDecoration: props.completed ? 'line-through' : 'none'}}>{props.title}</p>
    </div>
)