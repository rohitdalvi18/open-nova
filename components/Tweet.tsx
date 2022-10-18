const Tweet = () => {

    let circumference = 60
    let percent = 75

    return (
        <div className="w-3/5 flex flex-row">
            <div className="flex flex-col items-center">
                <div className="w-14 rounded-full mb-2">
                    <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCdyi-jV5u0bVQC1BIH0LAH2wJT_p56qUNQ&usqp=CAU" alt="avatar" />
                </div>
                <div className="w-0.5 h-10 theme-thread-link"></div>
            </div>
            <div className="w-full ml-3 flex flex-col">
                <div className="flex items-center justify-between">
                    <p>
                        <span className="theme-text font-semibold">Paul Hutton</span>&nbsp;
                        <span className="theme-text-accent font-regular">@paulcito07</span>
                    </p>
                    <div className="rounded-full">
                        <svg className="w-8 h-8">
                            <circle
                            className="text-gray-300"
                            stroke-width="5"
                            stroke="currentColor"
                            fill="transparent"
                            r="10"
                            cx="14"
                            cy="14"
                            />
                            <circle
                            className=" stroke-blue-500"
                            strokeWidth="5"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - percent / 100 * circumference}
                            strokeLinecap="round"
                            // stroke="stroke:text-blue-600"
                            fill="transparent"
                            r="10"
                            cx="14"
                            cy="14"
                            />
                        </svg>
                    </div>
                </div>
                <div className="mt-1 w-full">
                    <input className=" w-full bg-transparent" type="textarea" name="tweet" placeholder="What's happening?" />
                </div>
            </div>
        </div>
    )
}

export default Tweet;