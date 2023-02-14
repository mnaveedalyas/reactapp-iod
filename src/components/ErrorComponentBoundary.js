import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundaries';
import ErrorComponent from './ErrorComponent';
import BuggyCounter from './BuggyCounter';

const ClockWithLifeCycle = React.lazy( () => import('./ClockWithLifeCycle') ) ;

const GreetingFunc = React.lazy( () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve( import('./GreetingFunc'));
        }, 10000 );
    })
} );

function ErrorComponentBoundary() {
  return (
    <div> 
         <h1>ErrorComponentBoundary</h1>
         <ErrorBoundary>
            <Suspense fallback = { <div>Loading ..... </div>}>
                <section>
                    <ClockWithLifeCycle />
                    <BuggyCounter />
                </section>
            </Suspense>
            <Suspense fallback = { <div>Loading ..... </div>}>
                <section>
                    
                    <GreetingFunc />
                </section>
            </Suspense>
         </ErrorBoundary>

    </div>
  )
}

export default ErrorComponentBoundary;
