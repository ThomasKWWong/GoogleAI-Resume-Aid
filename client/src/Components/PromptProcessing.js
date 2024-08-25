const PromptProcessing = {
    async sendObjective(objective) {
        const prompt = objective.concat("\nProvide a resume objective statement that is an improvement of the provided statement without any extra text.")

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
    }
    
}

export default PromptProcessing