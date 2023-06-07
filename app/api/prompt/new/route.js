import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export const POST = async (req, res) => {
    const {userid, prompt, tag} = await req.json()

    try {
        await connectToDB()

        const newPrompt = new Prompt({
            creator: userid,
            tag: tag,
            prompt: prompt
        })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), {
            status: 201
        })
    } catch (error) {
        return new Response('Failed to create a Post', {
            status: 500
        })
    }
}