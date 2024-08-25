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

    handlePrompts(inputs){
        // console.log(inputs)
        for (const key in inputs){
            switch(key) {
                case "Objective Statement":
                    console.log(this.sendPrompt(inputs[key], prompts["Objective Statement Prompt"]))
                    break
                case "Education":
                    console.log(this.sendPrompt(inputs[key], prompts["Education Prompt"]))
                    break
                case "Professional Experience":
                    console.log(this.sendPrompt(inputs[key], prompts["Professional Experience Prompt"]))
                    break
                case "Certifications":
                    console.log(this.sendPrompt(inputs[key], prompts["Certifications Prompt"]))
                    break
                case "Projects":
                    console.log(this.sendPrompt(inputs[key], prompts["Projects Prompt"]))
                    break
                case "Volunteer Experience":
                    console.log(this.sendPrompt(inputs[key], prompts["Volunteer Experience Prompt"]))
                    break
                case "Skills":
                    console.log(this.sendPrompt(inputs[key], prompts["Skills Prompt"]))
                    break
                default:
                    break
            }
        }
    }
    
}

export default PromptProcessing