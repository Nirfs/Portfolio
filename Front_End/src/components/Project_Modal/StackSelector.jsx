import '../../styles/addProjectModal.scss'
export function StackSelector({ selectedStacks, setSelectedStacks }) {
  const stacks = ["html", "css", "javaScript", "react", "node", "mongoDb", "scss", "photoshop", "illustrator", "afterEffect"]
  return (
    <fieldset>
      <legend>Choisir les stack du projet</legend>
      {stacks.map((stack) => (
        <div key={stack}>
          <input
            type="checkbox"
            id={stack}
            value={stack}
            checked={selectedStacks.includes(stack)}
            onChange={(e) => {
              const { checked, value } = e.target
              setSelectedStacks(
                checked
                  ? [...selectedStacks, value]
                  : selectedStacks.filter((s) => s !== value)
              )
            }}
          />
          <label htmlFor={stack}>{stack}</label>
        </div>
      ))}
    </fieldset>
  )
}
