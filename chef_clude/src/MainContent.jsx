import React, { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([
        "chicken", 
        "all the main spices", 
        "corn", 
        "heavy cream", 
        "pasta"
    ])
    const [recipe, setRecipe] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function getRecipe() {
        setIsLoading(true)
        setError(null)
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
            
            // Use the actual AI-generated recipe instead of hardcoding
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error("Error fetching recipe:", error)
            setError("Failed to generate recipe")
        } finally {
            setIsLoading(false)
        }
    }

    function addIngredient(event) {
        event.preventDefault()
        const newIngredient = event.target.elements.ingredient.value.trim()
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
            event.target.reset()
        }
    }

    return (
        <main className="p-4">
            <form onSubmit={addIngredient} className="mb-4">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="border p-2 mr-2"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add ingredient
                </button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {isLoading && <p>Generating recipe...</p>}

            {error && <p className="text-red-500">{error}</p>}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}