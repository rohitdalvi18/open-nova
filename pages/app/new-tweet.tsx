import { useState } from "react";
import WithNavbar from "../../components/WithNavbar";
import Tweet from "../../components/Tweet";

const NewTweet = () => {
  const [threadCount, setThreadCount] = useState(0);

  return (
    <WithNavbar>
      <div className="w-4/5 px-5 my-4">
        <h4 className="theme-text text-2xl font-semibold">New Tweet</h4>
        <div className="flex flex-col items-center content-start mt-5 mb-28">
          <Tweet />
          {[...Array(threadCount)].map((_, i) => (
            <Tweet key={i} />
          ))}
          <div className="w-3/5">
            <span
              onClick={() => setThreadCount(threadCount + 1)}
              className="text-sm theme-text-accent float-right hover:text-blue-500 hover:cursor-pointer"
            >
              Add below thread
            </span>
          </div>
          <div className="w-1/2 pb-4 fixed bottom-0 flex flex-row justify-evenly border-t border-slate-500 p-1 theme-bg">
            <div
              className="w-1/2 mx-4 bg-orange-500 hover:bg-orange-700 theme-text text-xl font-medium custom-btn"
              onClick={() => alert("tweet has been scheduled")}
            >
              Schedule
            </div>
            <div
              className="w-1/2 mx-4 bg-blue-500 hover:bg-blue-700 theme-text text-xl font-medium custom-btn"
              onClick={() => alert("new tweet")}
            >
              Tweet
            </div>
          </div>
        </div>
      </div>
    </WithNavbar>
  );
};

export default NewTweet;
