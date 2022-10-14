const Navbar = ()=>{
    return(
        <nav className="theme-bg-accent w-1/5 h-screen">
            <div className="flex flex-row mt-20 justify-evenly font-">
                <div className="">Logo</div><p className="theme-text font-medium text-2xl">Open Nova</p>
            </div>
            <ul className="mt-48 flex flex-col items-start mx-auto w-fit theme-text font-medium text-xl">
                <li>Dashboard</li>
                <li>Scheduled</li>
                <li>New</li>
            </ul>
        </nav>
    )
}

export default Navbar