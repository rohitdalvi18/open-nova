import WithNavbar from "../../components/WithNavbar"
import Tweet from "../../components/Tweet"

const NewTweet = ()=>{
    return(
        <WithNavbar>
            <div className="w-4/5 px-5 my-4">
                <h4 className="theme-text text-2xl font-semibold">New Tweet</h4>
                <div className="flex flex-col items-center content-start mt-5">
                    <Tweet/>
                </div>
            </div>
        </WithNavbar>
    )
}

export default NewTweet