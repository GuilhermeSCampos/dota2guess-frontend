import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import App from '../../App';
import { DotaProvider } from '../../context/Provider';

const renderWithRouterAndContext = (path) => {
  const history = createBrowserHistory();
  history.push(path);
  const { ...resources } = render(
    <Router history={history}>
      <DotaProvider>
        <App />
      </DotaProvider>
    </Router>,
  );
  return { ...resources, history };
};

export default renderWithRouterAndContext;
