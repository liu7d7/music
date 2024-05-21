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
        <Message name={"name1"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Message>
        <Message name={"name2"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Message>
      </Post>
      <Post id={"welcome"} genre={"indie"} title={"the smiths - there is a light that never goes out"} date={"may 20, 2024"}>
        <Message name={"name1"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Message>
        <Message name={"name2"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Message>
        <Video link={"https://www.youtube.com/embed/siO6dkqidc4?si=BP51MwvFeP8auelS"}/>
      </Post>
    </div>
  )
}

export default App
