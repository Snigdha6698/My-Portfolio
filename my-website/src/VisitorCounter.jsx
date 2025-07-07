import { useEffect, useState } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://gjbf76esd2.execute-api.us-east-2.amazonaws.com/prod/visitor')
      .then(res => res.json())
      .then(data => {
        const parsed = typeof data.body === 'string' ? JSON.parse(data.body) : data;
        setCount(parsed.count);
      })
      .catch((err) => console.error("Visitor API error:", err));
  }, []);

  return (
    <div style={{ textAlign: 'right', marginTop: '5px' ,color:'orange'}}>
      {count !== null ? (
        <p>Visitor count: <strong>{count}</strong></p>
      ) : (
        <>
        <p>Loading visitor count... </p>
        <p>is is loading</p>
        </>
      )}
    </div>
  );
}

export default VisitorCounter;