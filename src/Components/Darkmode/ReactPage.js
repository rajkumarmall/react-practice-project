

function ReactPage() {
  return (
    <div className = "container">
       <h2>Animated Progress Bar</h2>
       <p>Add the .progress-bar-animated class to animate the progress bar:</p> 
       <div className = "progress">
          <div className = "progress-bar progress-bar-striped progress-bar-animated" style={{width:"80%"}}></div>
       </div>
    </div>
  )
}

export default ReactPage;