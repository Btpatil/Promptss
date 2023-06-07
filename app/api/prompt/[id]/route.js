import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// get for reading
export const GET = async (req, { params }) => {
    try {
        await connectToDB()

        const post = await Prompt.findById(params.id).populate('creator')

        if (!post) {
            return new Response('Post not found', { status: 404 })
        }
        return new Response(JSON.stringify(post), {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to fetch the posts', {
            status: 500
        })
    }
}

// patch for updating
export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json()
    console.log(prompt, tag, params.id)

    try {
        await connectToDB()

        const existingPost = await Prompt.findById(params.id)
        console.log(existingPost)

        if (!existingPost) {
            return new Response('Post not found', { status: 404 })
        }

        existingPost.prompt = prompt
        existingPost.tag = tag

        await existingPost.save()

        return new Response(JSON.stringify(existingPost), { status: 200 })
    } catch (error) {
        return new Response('Error Updating Prompt', {
            status: 500
        })
    }
}

// delete
export const DELETE = async (req, { params }) => {
    // console.log(params.id)
    try {
        await connectToDB()
        await Prompt.findByIdAndRemove(params.id)
        return new Response('Post Deleted successfully', { status: 200 })
    } catch (error) {
        return new Response('Faiiled to delete the post', { status: 500 })
    }
}