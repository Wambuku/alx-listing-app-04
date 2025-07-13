const Pill: React.FC<{ title: string }> = ({ title }) => (
    <button className="px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">
      {title}
    </button>
  );
  
  export default Pill;