

const Wrapp = (prop) =>{
    const {children, title} = prop;
    return (
        <div className="flex min-h-screen justify-center items-center" >
                <div className="flex-col border-cyan-500 border-4 border-double fixed backdrop-blur-2xl justify-center items-center text-center px-10 py-5 rounded-3xl text-3xl  shadow-lg shadow-blue-300/50">
                    <h1 className=" font-extrabold pb-8">{title}</h1>
                    {children}
                </div>
            </div>
    );
}

export default Wrapp;