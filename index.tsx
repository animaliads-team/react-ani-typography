import React, { Component } from 'react';
import { render } from 'react-dom';
import '@animaliads/typography';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Exemplo título nível 1</h1>

        <h2>Exemplo título nível 2</h2>

        <h3>Exemplo título nível 3</h3>

        <h4>Exemplo título nível 4</h4>

        <h5>Exemplo título nível 5</h5>

        <h6>Exemplo título nível 6</h6>

        <h2>Exemplo bloco de texto</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget sollicitudin eros. Cras ornare in metus ac vulputate. Aliquam
          dolor mauris, suscipit in ligula vel, imperdiet pretium ipsum. Etiam
          sit amet pharetra massa. Pellentesque tincidunt enim sed aliquet
          varius. Aliquam scelerisque quam at nisl tempor hendrerit. Praesent
          ultrices accumsan ante. Pellentesque risus lectus, mollis et felis
          quis, vestibulum tempus enim. Pellentesque elementum varius nisi sed
          tempus. Sed non erat id nisl imperdiet euismod. Phasellus ultricies ex
          vel dignissim congue. Etiam eu tellus dignissim massa malesuada
          accumsan vitae et sem.
        </p>

        <h2>Exemplo Código inline</h2>

        <code>npm install @animaliads/typography</code>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
