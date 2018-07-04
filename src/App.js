import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
// import jsonServerProvider from 'ra-data-json-server';
// import dataProvider from './dataProvider';
// import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { RestClient } from 'aor-firebase-client';

const firebaseConfig = {
    apiKey: "AIzaSyB-E97IWtwbjToqVm8aCXink8ZOQYhEz4A",
    authDomain: "imarket-dev-de6d9.firebaseapp.com",
    databaseURL: "https://imarket-dev-de6d9.firebaseio.com",
    projectId: "imarket-dev-de6d9",
    storageBucket: "imarket-dev-de6d9.appspot.com",
    messagingSenderId: "90262004030"
};

const clientOptions = {
    trackedResources: ['users']
}

const App = () => (
    <Admin restClient={RestClient(firebaseConfig, clientOptions)}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
