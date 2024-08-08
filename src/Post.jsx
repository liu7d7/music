export function Post(props) {
  return (
    <div id={props.id} className={"w-screen overflow-clip"}>
      <div className={"pt-4"}/>
      <div className={"w-screen flex place-content-center sf-ui-reg text-lg"}>
        <div
          className={`2xl:w-1/3 xl:w-2/5 lg:w-1/2 md:w-2/3 w-full pb-4 pl-4 pr-4`}>
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
              <div className={"border-b-4 mb-4 border-black"}/>
              <p>
                that's the end of this post. thanks for reading!
                <br/>
                <Link link={`#`}>back to top <i
                  className="fa-solid fa-arrow-turn-up"></i></Link>
              </p>
              <div className={"mb-6"}/>
            </>
          }
        </div>
      </div>
    </div>
  )
}

const CyanName = "nerissa"

export function Message(props) {
  return (
    <div className={`flex ${props.name === CyanName ? "bg-sky-100" : "bg-fuchsia-100"} p-4 rounded-xl overflow-clip flex-row gap-4 mb-6 shadow-lg shadow-slate-300`}>
      <div className={"sf-ui-bold text-2xl my-auto"}>
        {props.name}
      </div>
      <div className={"my-auto"}>
        {props.children}
      </div>
    </div>
  )
}

export function Nerissa(props) {
  return (
    <div className={`flex bg-sky-100 p-4 rounded-xl overflow-clip flex-row gap-4 mb-6 shadow-lg shadow-slate-300`}>
      <div className={"sf-ui-bold text-2xl my-auto"}>
        nerissa
      </div>
      <div className={"my-auto"}>
        {props.children}
      </div>
    </div>
  )
}

export function Michael(props) {
  return (
    <div className={`flex bg-fuchsia-100 p-4 rounded-xl overflow-clip flex-row gap-4 mb-6 shadow-lg shadow-slate-300`}>
      <div className={"sf-ui-bold text-2xl my-auto"}>
        michael
      </div>
      <div className={"my-auto"}>
        {props.children}
      </div>
    </div>
  )
}

export function Video(props) {
  return (
    <iframe className={"w-full rounded-xl border-none aspect-square mb-6 shadow-lg shadow-slate-300"}
            src={props.link + "?showinfo=1&modestbranding=1"}
            title={"YouTube video player"}
            allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
            referrerPolicy={"strict-origin-when-cross-origin"}
            loading={"lazy"}
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
  return (
    <a
      href={link}
      className={"font-medium text-blue-600 hover:text-blue-500 hover:underline hover:cursor-pointer"}>{props.children}</a>
  )
}