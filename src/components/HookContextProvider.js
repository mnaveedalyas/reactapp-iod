import React, { createContext, useContext } from 'react'

const moodsList = { happy: 'Happy Test', sad: 'sad Test'}  
const MoodContext = createContext(moodsList);
MoodContext.displayName = 'My Context Display Name';
export default function HookContextProvider() {
  return (
    <div>
        <h1>HookContextProvider</h1>
        <MoodContext.Provider value={moodsList.happy}>
            <MoodWithUseContext />
            <MoodWithConsumer />
        </MoodContext.Provider>

        <MoodContext.Provider value={moodsList.sad}>
            <MoodWithConsumer />
        </MoodContext.Provider>
    </div>
)};
function MoodWithUseContext() {
    console.log('MoodContext.displayName: ', MoodContext.displayName);
    const mood = useContext(MoodContext);
    return <p> My Mood with useContext : {mood}</p>;
}
function MoodWithConsumer() {
    console.log('MoodContext.displayName: ', MoodContext.displayName);
    return (
        <MoodContext.Consumer>{ (mood) =>{
                    return <p>my mood with MoodContext.Consumer : {mood}</p>
                }
            }
        </MoodContext.Consumer>
    );
}





