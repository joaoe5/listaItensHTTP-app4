import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import ListaItens from './src/components/ListaItens';

class app4 extends Component {
    
    // constructor(props) {
    //     super(props);
    //     console.log('Construindo a aplicação');
    // }

    // componentWillMount() {
    //     console.log('Fazendo alguma coisa antes de renderizar');
    // }
    
    // componentDidMount() {
    //     console.log('Fazeer alguma coisa depois de renderizar.');
    // }
    render() {
        return (
            <ListaItens />
        );
    }
}

AppRegistry.registerComponent('app4', () => app4);
