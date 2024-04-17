import { Provider } from 'react-redux';
import { appStore } from '../store';
import { Fallback } from '@shared/ui/Fallback';
import ErrorBoundary from './ErrorBoundary';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={appStore}>{children}</Provider>
    </ErrorBoundary>
  );
};

export default Providers;
