// Styles
import "../../styles/addProjectModal.scss"

/**
 * Composant pour sélectionner les stacks/technologies utilisées dans un projet.
 *
 * @component
 * @param {Object} props
 * @param {string[]} props.selectedStacks - Tableau des stacks actuellement sélectionnées.
 * @param {Function} props.setSelectedStacks - Setter pour mettre à jour les stacks sélectionnées.
 * @returns {JSX.Element} Composant StackSelector.
 */

export function StackSelector({ selectedStacks, setSelectedStacks }) {
  const stacks = [
    "html",
    "css",
    "javaScript",
    "react",
    "node",
    "mongoDb",
    "scss",
    "photoshop",
    "illustrator",
    "afterEffect",
  ]

  return (
    <fieldset className="stack_selector">
      <legend>Choisir les stacks du projet</legend>
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
