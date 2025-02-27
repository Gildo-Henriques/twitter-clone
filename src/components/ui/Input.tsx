type Props = {
    placeholder : string;
    value ?: string;
    onChange ?: (newValue:string) => void;
    password?: boolean;
}
export default function Input({placeholder, value, onChange, password}:Props){
    return ( 
        <div className="flex">
            <input type={password ? "password" : "text"} 
            className="block w-full px-4 py-4 mt-2 text-gray-400 placeholder-gray-500 border rounded-lg bg-black border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
            
             />

        </div>
    )
}