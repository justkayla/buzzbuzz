
const Home = ({ authUser }) => {
  
  return (    
    <div>      
      <h1>Hello!</h1>

      { authUser !== null && (
        <p>We have a logged in user: { authUser.email }</p>

      )}

    </div>
  )
}

export default Home