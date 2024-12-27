import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an AI chef assistant that receives a list of ingredients and creates a unique, creative recipe using some or all of those ingredients. 
- Use markdown formatting
- Include a catchy recipe name
- List all ingredients with specific measurements
- Provide clear, step-by-step cooking instructions
- If possible, incorporate most of the ingredients the user mentions
- If an ingredient doesn't fit the recipe, explain why or suggest a creative use
`

const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN || import.meta.env.REACT_APP_HF_ACCESS_TOKEN || ''

export async function getRecipeFromChefClaude(ingredientsArr) {
    console.log(REACT_APP_HF_ACCESS_TOKEN);
    // If no token is available, return a mock recipe
    if (!HF_ACCESS_TOKEN) {
        return `## Chef's Special Recipe

**Ingredients Used:**
${ingredientsArr.map(ing => `- ${ing}`).join('\n')}

**Mock Recipe Note:**
Unable to generate a full recipe due to missing API token. Please check your Hugging Face access token.`
    }

    try {
        const hf = new HfInference(HF_ACCESS_TOKEN)
        
        const ingredientsString = ingredientsArr.join(", ")
        
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have these ingredients: ${ingredientsString}. Please create a unique and delicious recipe that incorporates as many of these ingredients as possible.` },
            ],
            max_tokens: 1024,
        })
        
        return response.choices[0].message.content || 
            `## Unable to Generate Recipe

Unfortunately, I couldn't create a recipe with the ingredients: 
${ingredientsArr.map(ing => `- ${ing}`).join('\n')}`
    } catch (err) {
        console.error("Recipe generation error:", err)
        return `## Error Generating Recipe

Sorry, I encountered an error while trying to generate a recipe with these ingredients:
${ingredientsArr.map(ing => `- ${ing}`).join('\n')}

Error details: ${err.message}`
    }
}