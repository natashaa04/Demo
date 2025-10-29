import BlogPage from "./BlogPage/BlogPage";


export default async function page({params}:{params:Promise<{id:number}>}) {
    const {id}=await params;
    
  
  return (
    <BlogPage id={Number(id)}/>
  )
}


