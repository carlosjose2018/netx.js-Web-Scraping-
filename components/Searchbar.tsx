"use client"

import { FormEvent, useState } from "react"

const isValidAamazonProductURL = (url: string) =>{
  try{
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
      ){
        return true;
      }
  }catch(error){
    return false;
  }

  return false;

}

const Searchbar = () => {
  const [searchPrompt, setSetsearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidLink = isValidAamazonProductURL(searchPrompt);
  
      if(!isValidLink) return alert('Please Provide a valid Amozon Lnk');

      try{
        setIsLoading(true);
      }catch(error){
        console.log(error)
      }finally{
        setIsLoading(false);
      }
    }
    
  return (
    <form className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSubmit}>
   
    <input 
      type="text"
      value={searchPrompt}
      onChange={(e) => setSetsearchPrompt(e.target.value)}
      placeholder="Enter Product Link"
      className="Searchbar-input"
      />


      <button
       type="submit" 
       className="search-btn"
       disabled={searchPrompt === ''}
       >
        {isLoading ? 'Searching ...' : 'Search'}
      </button>
    </form>
  )
}

export default Searchbar