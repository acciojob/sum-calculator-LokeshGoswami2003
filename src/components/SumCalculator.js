import React,{useEffect,useState} from 'react'

const SumCalculator = () => {
  
    const [value,setValue]=useState(0);
    const [sum,setSum]=useState(0);

    const handleChange=(e)=>{
        setValue(e.target.value);
        
    }

    useEffect(() => {
        let num=parseInt(value);
      setSum(prevsum=>prevsum+num);
    }, [value]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" placeholder='Enter number' onChange={handleChange} value={value}/>
      <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator