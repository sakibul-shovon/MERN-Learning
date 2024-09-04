export default function TabButton({label,onSelect,isSelect}) {
    
  
  
  return (
      <li>
        <button className={ isSelect?'active' : undefined} onClick={onSelect}>{label}</button>
      </li>
    );
  }