import { useState } from 'react';
type Props = {
  onSearch: (query: string) => void;
};

const Search: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", input); // 👈 Check if this appears
    onSearch(input.trim());
  };

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button type="submit">Search</button>
      </form>
    </div>
    
  );
};
