import React, { useState, useEffect } from "react";


const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    alert("I am clicked")
  }, [num]);
  return (
    <>
    <button onClick={(() => {
      setNum(num+1);
    }
    )}>
      Click me {num}
    </button>
    < br/>
    <button onClick={(() => {
      setNums(nums+1);
    }
    )}>
      Click me {nums}
    </button>
    </>
  )
}

export default App;
