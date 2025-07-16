// import './App.css';
import React, { Suspense } from 'react';
// const FooterApp = React.lazy(() => import('mfFooter/App'));
import { CustomButton } from "./CustomButton";

function App() {
  return (
    <div style={{ height: '100%'}}>
      <CustomButton />
      {/* <Suspense fallback="Loading . . . ">
        <FooterApp />
      </Suspense> */}
    </div>
  );
}

export default App;
