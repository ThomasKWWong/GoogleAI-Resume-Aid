import prompts from "../Assets/prompts.json"

const PromptProcessing = {
    async sendPrompt(objective, promptAdd) {
        const prompt = objective.concat("\n" + promptAdd)

        const response = await fetch('api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: prompt
            })
        })

        const data = await response.json()

        return data.message;
    },

    async handlePrompts(inputs){
        // array to be returned
        let result = []
        // determines the final prompt sent to Google AI
        for (const key in inputs){
            switch(key) {
                case "Objective Statement":
                    result = {...result, [key] : await this.sendPrompt(inputs[key], prompts["Objective Statement Prompt"])}
                    break
                case "Education":
                    result = {...result, [key] : await this.sendPrompt(inputs[key], prompts["Education Prompt"])}
                    break
                case "Professional Experience":
                    result = {...result, [key] : await this.sendPrompt(inputs[key], prompts["Professional Experience Prompt"])}
                    break
                case "Certifications":
                    result = {...result, [key] : await this.sendPrompt(inputs[key], prompts["Certifications Prompt"])}
                    break
                case "Projects":
                    result = {...result, [key] : await this.sendPrompt(inputs[key], prompts["Projects Prompt"])}
                    break
                case "Volunteer Experience":
                    result = {...result, [key] : await this.sendPrompt(inputs[key], prompts["Volunteer Experience Prompt"])}
                    break
                case "Skills":
                    result = {...result, [key] : await this.sendPrompt(inputs[key], prompts["Skills Prompt"])}
                    break
                default:
                    break
            }
        }
        return result
    }
    
}

export default PromptProcessing