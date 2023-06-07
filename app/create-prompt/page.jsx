'use client'
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"

const CreatePrompt = () => {
    const router = useRouter()
    const {data: session} = useSession()
  const [submiting, setSubmiting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const creatingPrompt = async (e) => {
        e.preventDefault()
        setSubmiting(true)

        try {
            const res = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userid: session?.user.id,
                    tag: post.tag
                })
            })

            if (res.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }finally{
            setSubmiting(false)
        }
    }

    return (
    <Form
        type='create'
        post={post}
        setPost={setPost}
        submiting={submiting}
        setSubmiting={creatingPrompt}
    />
  )
}

export default CreatePrompt