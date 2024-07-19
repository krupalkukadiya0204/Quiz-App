import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Quiz from './Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App container mt-5">
      <Authenticator>
        {({ signOut }) => (
          <main>
            <header className="App-header">
              <Quiz />
              <button 
                onClick={signOut} 
                className="btn btn-danger mt-4"
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
