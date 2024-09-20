

const Button = (prop) =>{
    const {disabled, children, variant = "text-white", onClick,
        Hover = "hover:bg-blue-600  active:bg-blue-700"
    } = prop;
    return (
        
        <button 
        className={`p-2 rounded-lg ${variant} ${Hover}  focus:outline-none focus:ring focus:ring-slate-300 ease-in-out duration-900`} 
        onClick={onClick}
        disabled = {disabled}
        >
            {children}
        </button>
    );
}

export default Button;


