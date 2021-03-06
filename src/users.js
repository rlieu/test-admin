import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const UserList = (props) => (
    <List title="All offers" {...props}>
        <Datagrid>
            <TextField source="rank" />
            <TextField source="name" />
            <TextField source="link" />
        </Datagrid>
    </List>
);