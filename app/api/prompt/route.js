import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET =async (req) => {
try {
    await connectToDB()

    const posts = await Prompt.find({}).populate('creator')

    return new Response(JSON.stringify(posts), {
        status: 200
    })
} catch (error) {
    return new Response('Failed to fetch the posts', {
        status: 500
    })
}
}