import Image from 'next/image'
import Result from './components/Result'
import axios from 'axios'
const fetchData = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res;
};

export default  async function Home() {
  const data = await fetchData()
  
  return (
    <main className="">
      
 <Result data={data.data}/>
      

      
    </main>
  )
}
