import './App.css'
import {Link, Message, Post, Video} from "./Post";

const months = "january february march april may june july august september november december".split(" ")
const now = new Date();

function today() {
  return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
}

function App() {
  return (
    <div>
      <Post id={"welcome"} title={"welcome!"} date={today()}>
        <Message name={"michael"}>
          hi! i'm a student who spends way too much free time coding and listening
          to music while doing it.
        </Message>
        <Message name={"nerissa"}>
          TODO!
        </Message>
      </Post>
      <Post id={"the_smiths_there_is_a_light"} genre={"indie"} title={"the smiths - there is a light that never goes out"} date={"may 20, 2024"}>
        <Message name={"michael"}>
          To start it off, I think we should try this rec from Sanjana.
        </Message>
        <Video link={"https://www.youtube.com/embed/siO6dkqidc4?si=BP51MwvFeP8auelS"}/>
        <Message name={"nerissa"}>
          The title sounds really hopeful, but the lyrics are definitely pretty depressing. Although I guess that's the point, finding hope in a bad situation.
        </Message>
        <Message name={"michael"}>
          I think you’re totally dead on. The instrumental is pretty bright, but the vocals sound kind of laid back, which I think supports what you’ve said.
          <br/><br/>
          I feel like this song is definitely going in a homework playlist. It’s not too distracting; it’s just pleasant, despite the sad lyrics.
        </Message>
        <Message name={"nerissa"}>
          For sure. I think the repetition in the song also contributes to how laid back it feels, so I definitely see how it'd fit in a homework playlist.
        </Message>
      </Post>
    </div>
  )
}

export default App
