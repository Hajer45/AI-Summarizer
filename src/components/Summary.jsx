import {linkIcon,loader,tick,copy} from "../assets"
import { useState, useEffect } from "react"
import { useLazyGetSummaryQuery } from "../services/article.js"
const Summary = () => {
  const [article,setArticle] = useState({
    url:"",
    summary:""
  })
  const [allArticles,setAllArticles] = useState([])
  const [getSummary,{isFetching,error}] = useLazyGetSummaryQuery()
  const [copied,setCopied] = useState("")
  useEffect(()=>{
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"))
    if(articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage)
    }
  },[])
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {data} = await getSummary({articleUrl:article.url})

    if(data?.summary){
      const newArticle = { ...article, summary: data.summary }
      const updatedArticles = [newArticle,...allArticles];
      setArticle(newArticle)
      setAllArticles(updatedArticles)

      localStorage.setItem("articles",JSON.stringify(updatedArticles))
    }
  }
  const handleCopy = (copyUrl)=>{
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(()=>setCopied(false),3000)
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

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.reverse().map((item,index)=>{  

            return(
              <div key={`link-${index}`} className="link_card">
                <div className="copy_btn" >
                  <img src={copied==item.url?tick:copy} onClick={()=>handleCopy(item.url)} alt="copy_icon" className="w-[40%] h-[40%] object-contain"/>
                </div>
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate"
                onClick={()=>{
                  setArticle(item)
                }}>
                  {item.url}
                </p>
              </div>
            )
          })}
        </div>



        {/* results */}

        <div className="my-10 max-w-full flex justify-center items-center">
          {isFetching ? ( 
            <img src={loader} alt="loader" className="w-20 h-20 object-contain"/>
          ) : error ? ( 
            <p className="font-inter font-bold text-black text-center">
              Something went wrong ...<br/>
              <span className="font-satoshi font-normal text-gray-700">
                {error.data?.error}
              </span>
              </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="font-satoshi font-bold text-3xl text-gray-600 ">
                  Article <span className="blue_gradient">Summary</span>
                </h2>
                <div className="summary_box">
                  <p className="font-inter font-medium text-md text-gray-700">
                    {article.summary}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

    </section>
  )
}

export default Summary