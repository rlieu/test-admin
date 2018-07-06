import React from 'react';
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
// import dataProvider from './dataProvider';
// import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { RestClient } from './dataProvider';

const firebaseConfig = {
    apiKey: "AIzaSyA_zLJNeHik17VpCEQZcJ7MOSG0xKST-zQ",
    authDomain: "cmc-api.firebaseapp.com",
    databaseURL: "https://cmc-api.firebaseio.com",
    projectId: "cmc-api",
    storageBucket: "cmc-api.appspot.com",
    messagingSenderId: "849334807828"
};

const clientOptions = {
    trackedResources: ['tokens']
}

const App = () => (
    <Admin dataProvider={RestClient(firebaseConfig, clientOptions)}>
        <Resource name="tokens" list={UserList} />
    </Admin>
);

export default App;
