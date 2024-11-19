import stars from "../assets/bento-box-assets/illustration-five-stars.webp"
import follow from "../assets/bento-box-assets/illustration-multiple-platforms.webp"
import calender from "../assets/bento-box-assets/illustration-consistent-schedule.webp"
import posts from "../assets/bento-box-assets/illustration-schedule-posts.webp"
import nonStop from "../assets/bento-box-assets/illustration-grow-followers.webp"
import faces from "../assets/bento-box-assets/illustration-audience-growth.webp"
import createPost from "../assets/bento-box-assets/illustration-create-post.webp"
import aiPic from "../assets/bento-box-assets/illustration-ai-content.webp"


export default function Home() {
    return (
        <div className="gridContainer">
            <div className="fiveStar one card" >
                <h1>Social Media <span>10x</span> Faster with Al</h1>
                <img src={stars} alt="Five golden stars" />
                <p>Over 4,000 5-star reviews</p>
            </div>
            <div className="following two card">
                <img className="follows" src={follow} alt="following stats" />
                <p>Manage multiple accounts and platforms.</p>
            </div>
            <div className="postSchedule three card">
                <p>Maintain a consistant <br /> posting schedule.</p>
                <img className="calender" src={calender} alt="posting calender" />
            </div>
            <div className="socialMedia four card">
                <h2>Schedule to social media.</h2>
                <img className="schedulePosts" src={posts} alt="best time to post chart" />
                <p>Optimize post timings to publish content at the perfect time for your audience.</p>
            </div>
            <div className="growthChart five card">
                <img className="growth" src={nonStop} alt="follower growth chart" />
                <h2>Grow followers with non-stop content.</h2>
            </div>
            <div className="facesDiv six card">
                <div className="textFaces">
                    <h1> {`>`}56%</h1>
                    <p>faster audience</p>
                </div>
                <img className="faces" src={faces} alt="faces" />
            </div>
            <div className="crtePost seven card">
                <h2>Create and schedule content <span className="pur">quicker</span>.</h2>
                <img className="post" src={createPost} alt="" />
            </div>
            <div className="AIPost eight card">
                <h2>Write your content using AI.</h2>
                <img className="AI" src={aiPic} alt="" />
            </div>
        </div>
    )
        ;
}
