export function Post(props) {
  return (
    <div id={props.id} className={"w-screen overflow-clip"}>
      <div className={"w-screen flex place-content-center sf-ui-reg text-lg"}>
        <div
          className={`2xl:w-1/3 xl:w-2/5 lg:w-1/2 md:w-2/3 w-full p-4`}>
          <div className={"sf-ui-bold text-6xl pb-4"}>
            {props.title}
          </div>
          <div>
            {props.date}
          </div>
          {props.genre &&
            <div>
              {props.genre}
            </div>
          }
          <div className={"pb-6 mt-2 border-t-4 border-black"}/>
          {props.children}
          {props.id !== "welcome" &&
            <>
              <div className={"mb-6 pt-6 mt-2 border-b-4 border-black"}/>
              <p>
                That's the end of this post. Thanks for reading!
                <br/>
                <Link link={`${window.location.hostname}/#welcome`}>Back to
                  top</Link>
              </p>
            </>
          }
          <div className={"pt-4"}/>
        </div>
      </div>
    </div>
  )
}

const CyanName = "name1"

export function Message(props) {
  return (
    <div className={`flex ${props.name === CyanName ? "bg-cyan-50" : "bg-pink-50"} p-4 rounded-xl flex-row gap-4 mb-6 place-content-center`}>
      <div className={"sf-ui-bold text-2xl my-auto"}>
        {props.name}
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export function Video(props) {
  return (
    <iframe className={"w-full rounded-xl border-none"}
            style={{aspectRatio: "1 / 1"}}
            src={props.link}
            title={"YouTube video player"}
            allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
            referrerPolicy={"strict-origin-when-cross-origin"}
            allowFullScreen></iframe>
  )
}

export function Subtitle(props) {
  return (
    <div>
      <div className={"sf-ui-bold text-3xl pb-2"}>
        {props.children}
      </div>
      <div className={"pb-6 mt-2 border-t-4 border-black"}/>
    </div>
  )
}

export function InlineCode(props) {
  return (
    <span className={"bg-slate-200 rounded pl-0.5 pr-0.5 iosevka"}>
      {props.children}
    </span>
  )
}

export function Link(props) {
  let link = props.link
  if (!link.startsWith("htt")) link = "https://" + link;
  return (
    <a
      href={link}
      className={"font-medium text-blue-600 hover:text-blue-500 hover:underline hover:cursor-pointer"}>{props.children}</a>
  )
}