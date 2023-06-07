import Link from "next/link"


const Form = ({type, post, setPost, submiting, setSubmiting}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p>{type} and share prompts across the world with promptopia</p>

      <form 
      onSubmit={setSubmiting}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label htmlFor="" className="font-satoshi font-semibold text-base text-gray-700">
          Your AI Prompt
        <textarea 
        value={post.prompt}
        onChange={(e) => setPost({...post, prompt: e.target.value})} 
        placeholder="Enter Your Prompt Here"
         className="form_textarea"
         required
         />
        </label>

         <label className="font-satoshi font-semibold text-base text-gray-700">
          Tag {' '}
          <span className="font-normal">(#product, #anythingyouwant)</span>
        <input 
        value={post.tag}
        onChange={(e) => setPost({...post, tag: e.target.value})} 
        placeholder="#tag"
         className="form_input"
         required
         />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-grey-500 text-sm">Cancel</Link>
          <button 
          type='submit'
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          disabled={submiting}>
            {submiting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form