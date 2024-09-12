import {linkIcon,loader,tick,copy} from "../assets"
import { useState, useEffect } from "react"
const Summary = () => {
  const [article,setArticle] = useState({
    url:"",
    summary:""
  })
  const handleSubmit = async(e)=>{
    alert("submited")
  }
  
  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form className="relative flex items-center justify-center" 
        onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link-icon" className="absolute left-0 my-2 ml-3 w-5" />
          <input type="url" 
          placeholder="Enter a url" 
          value={article.url}
          onChange={(e)=>setArticle({...article,url:e.target.value})} 
          required
          className="url_input peer "/>
          <button type="submit"
          className="submit_btn peer-focus:border-gray-600 peer-focus:text-gray-600">
          ➣
          </button>
        </form>
        {/* url History */}




        {/* results */}

      </div>

    </section>
  )
}

export default Summary