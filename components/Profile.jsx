import PromptCard from "./PromptCard"


const Profile = ({name, desc, data, handlEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h3 className="head_text blue_gradient">{name} Profile</h3>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
      {data.map((post) => (
        <PromptCard 
        key={post._id}
        post={post}
        handleEdit={handlEdit}
        handleDelete={handleDelete}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile