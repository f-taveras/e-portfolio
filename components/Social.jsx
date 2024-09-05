const Social = () => {
    return (

        <div className=' w-full h-34 flex gap-4'>
            
            <div className=" flex overflow-hidden">

                <a className="rounded-full flex justify-center text-accent hover:bg-accent" href="http://linkedin.com" target="_blank">
                    <img className="" src="/assets/icons/linkedin_icon.png" alt="linkedin icon" />
                </a>
            </div>
            <div className="flex overflow-hidden">

                <a className=" rounded-full flex justify-center text-accent hover:bg-accent" href="https://github.com/f-taveras" target="_blank">
                    <img className="" src="/assets/icons/github_icon.png" alt="github icon" />
                </a>
            </div>
            

        </div>)
};

export default Social;
