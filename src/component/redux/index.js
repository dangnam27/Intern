import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { Provider } from 'react-redux';
// import store  from './redux/store';

// root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <PersistGate loading={<Loader />} persistor={persistor}>
//           <App />
//         </PersistGate>
//       </Provider>
//     </React.StrictMode>
//   );