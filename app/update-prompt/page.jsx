'use client'
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Form from "@components/Form"

const EditPrompt = () => {
    const router = useRouter()
    const searchparams = useSearchParams()

    const promptid = searchparams.get('id')

    const [submiting, setSubmiting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    useEffect(() => {
        const getPromptDetails = async () => {
            const res = await fetch(`/api/prompt/${promptid}`)
            
            const data = await res.json()

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }

        if(promptid) getPromptDetails()
    }, [promptid])

    const UpdatePrompt = async (e) => {
        e.preventDefault()
        setSubmiting(true)

        try {
            const res = await fetch(`/api/prompt/${promptid}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })

            console.log(res)
            if (res.ok) {
                router.push('/profile')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmiting(false)
        }
    }

    return (
        <Form
            type='Edit'
            post={post}
            setPost={setPost}
            submiting={submiting}
            setSubmiting={UpdatePrompt}
        />
    )
}

export default EditPrompt