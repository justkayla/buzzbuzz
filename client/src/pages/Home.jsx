import { useAppContext } from "../utils/AppContext"

const Home = () => {
  const { appState, setAppState } = useAppContext()
  console.log(appState)
  return (    
    <div>      
      <h1>Hello!</h1>
       
      { appState.user !== null && (
        <p>We have a logged in user: { appState.user.email }</p>

      )}

    </div>
  )
}

export default Home