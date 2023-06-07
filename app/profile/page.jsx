'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"

const MyProfile = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await res.json()

      setPosts(data)
    }

    if (session?.user.id) fetchPosts()
  }, [])

  const handlEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const handleConfirm = confirm('Are you sure you want to Delete this Post?')

    if (handleConfirm) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE'
        })

        const filterdPosts = posts.filter((p) => p._id !== post._id)

        setPosts(filterdPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Profile
      name='my'
      desc='welcome to your personalized profile page'
      data={posts}
      handlEdit={handlEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile