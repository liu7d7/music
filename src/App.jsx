import './App.css'
import {Link, Message, Michael, Nerissa, Post, Video} from "./Post";
import {useState, memo} from "react";

const months = "january february march april may june july august september november december".split(" ")
const now = new Date();

function today() {
  return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
}

const posts =
  [
    <Post id={"oh_wonder_without_you"} title={"oh wonder - without you"} genre={"alt-pop"} date={"august 19, 2024"}>
      <Michael>
        It's only four days into the school year and I'm already missing summer so much, so here's a song that my summer class instructor played before class from time to time.
      </Michael>
      <Video link={"https://www.youtube.com/embed/zLAhRiUeJ8E"}/>
      <Nerissa>
Ooh this is probably one of my favorites so far. Their voices fit so well together, which makes it sound really soothing and almost motivating.
      </Nerissa>
      <Michael>
I agree! Their voices really do fit great together. It works great with the instrumental too, especially in the chorus. That last "without you" sung after the piano note is extremely satisfying. 
      </Michael>
      <Michael>
The rest of the songs in the album also have a similar vibe to them, and they're all I've been listening to for the past week or so. This duo is brilliant!
      </Michael>
    </Post>,
    <Post id={"the_marias_sienna"} title={"the marías - sienna"} genre={"indie"} date={"august 7, 2024"}>
      <Michael>
        The new school year’s almost here, so it’s time to start making my homework playlist. I think this song is a perfect starter for it.
      </Michael>
      <Video link={"https://www.youtube.com/embed/EiS7cKfuf6w"}/>
      <Nerissa>
Yeah it feels so relaxing yet almost haunting. Her voice really adds to the soothing and dreamy quality of the song.
      </Nerissa>
      <Michael>
    I know, right? And that soothing voice combined with the simple drum beat makes the song so undistracting when doing work. That ending is pretty cool, too.
      </Michael>
    </Post>,
    <Post id={"oma_nujabes_luvsic_pt4"} title={"oma & nujabes - luv(sic) pt4"}
          genre={"hip-hop"} date={"august 2, 2024"}>
      <Michael>
        Alright, I've spent the last *checks watch* hour deciding which one of the songs in this performance to discuss here, because all of them are brilliant. But here we go!
      </Michael>
      <Video link={"https://www.youtube.com/embed/FGOEMvymSIE?t=1020&si=7UL0u3Ru4S7ihwvX"}/>
      <Michael>
         The YouTube algorithm has actually shown me so many songs that I like over the past few months; it's pretty cool. Anyways, I ended up choosing this song for today, because, though it doesn't have as interesting of an instrumental as some of the other tracks, the wordplay that's peppered in throughout the entire song is really interesting to me. 
      </Michael>
      <Nerissa>
Yeah the instrumental sounds almost like lo-fi, so it's surprising that it works so well with rap. I think it helps balance out the energy of the song really well, so that it's relaxing but also energetic.
      </Nerissa>
    </Post>,
    <Post id={"gracie_adams_close_to_you"} title={"gracie adams - close to you"}
          genre={"indie"} date={"july 30, 2024"}>
      <Nerissa>
        This is one that my friends at dance are always listening to.
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/PmJuMNGp5YE"}></Video>
      <Nerissa>
        I think it just feels nice.
      </Nerissa>
      <Michael>
        That's true, it does feel pretty nice! I love the sort of carefree vibe
        the music video has, and the drums and bass make the song sound really
        cheerful and energetic.
      </Michael>
    </Post>,
    <Post id={"clairo_bags"} title={"clairo - bags"} genre={"indie"}
          date={"july 24, 2024"}>
      <Michael>
        We've probably both heard this song before sometime given it's so
        popular, but today's the first time I've listened to it intently.
      </Michael>
      <Video link={"https://www.youtube.com/embed/L9HYJbe9Y18"}></Video>
      <Michael>
        The melody at the beginning has this really nostalgic feel to it, and
        the drum beat that stays consistent the whole way through gives it some
        nice bounce, which I like a lot.
      </Michael>
      <Nerissa>
        I also really like how soft the whole song is, but without making the
        song boring. I think it’s the more unique sounds/instruments in the
        background that keep the song so engaging.
      </Nerissa>
    </Post>,
    <Post id={"matt_maeson_hallucinogenics"}
          title={"matt maeson - hallucinogenics"} genre={"indie"}
          date={"july 23, 2024"}>
      <Nerissa>
        Here's one that I heard from dance:
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/doRUhDIB29s"}></Video>
      <Nerissa>
        I really like how well done the music video is with representing the
        meaning and lyrics for the song.
      </Nerissa>
      <Michael>
        I like this song a lot, and I totally agree with you. At first, I
        listened to the song on Spotify and thought it was a nice, relaxing,
        song like Hozier's Too Sweet. But then I saw the video, which made it
        feel completely different.
      </Michael>
    </Post>,
    <Post id={"the_fray_over_my_head"}
          title={"the fray - over my head (cable car)"} genre={"pop"}
          date={"july 17, 2024"}>
      <Michael>
        I've been listening to this song recently, and I like it (and the album
        it's in) a lot. It even sounds pretty recent despite being released
        nearly twenty years ago.
      </Michael>
      <Video link={"https://www.youtube.com/embed/fFRkpvvop3I"}></Video>
      <Michael>
        And something about it just makes it good background music when doing
        work.
      </Michael>
      <Nerissa>
        Yeah I think the repetition and the instrumental make it a lot less
        overwhelming or exciting than some other pop songs, so it wouldn't take
        up too much attention.
      </Nerissa>
    </Post>,
    <Post id={"niki_lowkey"}
          title={"niki - lowkey"} genre={"indie"}
          date={"july 10, 2024"}>
      <Video link={"https://www.youtube.com/embed/9jz3fWYwMuc"}></Video>
      <Nerissa>
        This was one of my favorites a couple months ago, and I love her voice
        so much.
      </Nerissa>
      <Michael>
        It's nice how they kept the instrumental lowkey (:D) so as to not
        overpower her voice. The "ah, ah" in the background of the chorus is
        brilliant.
      </Michael>
    </Post>,
    <Post id={"glass_animals_a_tear_in_space"}
          title={"glass animals - a tear in space (airlock)"} genre={"pop"}
          date={"july 8, 2024"}>
      <Michael>
        Here's a song from Glass Animals, the guys who did Heat Waves a while
        back.
      </Michael>
      <Video link={"https://www.youtube.com/embed/9-LI98Q-rsg"}></Video>
      <Michael>
        I had always assumed Heat Waves was their only good song for some
        reason, because the others had way less listens, but I'm glad I was
        wrong. It's not super upbeat, but it's still a banger, isn't it?
      </Michael>
      <Nerissa>
        Yeah I really like how the beat in the background is constant, even
        during the quieter parts. I didn't realize Glass Animals were still
        releasing music.
      </Nerissa>
    </Post>,
    <Post id={"ajr_bang"} title={"ajr - bang!"} genre={"pop"}
          date={"july 7, 2024"}>
      <Nerissa>
        I've heard about this band a lot, but I think this is the only song of
        theirs I've listened to before.
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/4THFRpw68oQ"}></Video>
      <Michael>
        For some reason, the song sounded really familiar for the first five
        seconds, and the rest of it sounded completely new. I think it’s the
        rhythm of the singing at the beginning that makes that happen, but I’m
        not really sure.
      </Michael>
      <Michael>
        Anyways, I actually found the video really interesting.
        I paid nearly all my attention to the video the first time around
        because I was trying to figure out how they did those invisible cuts so
        well. The animal faces when they said “put your best face on everybody”
        were pretty funny, too.
      </Michael>
      <Nerissa>
        Yeah the video was super interesting, and apparently some of the adlibs
        in the song are done by the person who voiced announcements for the NYC
        subway so those sound really cool.
      </Nerissa>
    </Post>,
    <Post id={"sigrid_strangers"} title={"sigrid - strangers"} genre={"pop"}
          date={"july 4, 2024"}>
      <Michael>
        Sigrid's an artist I haven't really listened to before, but I got this
        song recommended to me and I've gotta say, it's a real banger. I love
        everything about it.
      </Michael>
      <Video link={"https://www.youtube.com/embed/cIriwVhRPVA"}></Video>
      <Michael>
        Her voice is so nice, the instrumental's fast tempo gets me so hyped,
        and the energy she puts into the dance in the music video is super
        contagious.
      </Michael>
      <Nerissa>
        Yeah, her voice really stands out, especially at the beginning of the
        song when the instrumental is quieter. I also really like how catchy and
        upbeat the song is, even with sadder lyrics.
      </Nerissa>
    </Post>,
    <Post id={"the_midnight_gloria"} title={"the midnight - gloria"}
          genre={"synthwave"} date={"july 1, 2024"}>
      <Michael>
        Last year I was obsessed with Nathan Barnatt’s music videos on
        youtube, and this song appeared in one of them.
      </Michael>
      <Video link={"https://www.youtube.com/embed/18-Ye2L3ej8"}></Video>
      <Michael>
        I haven’t been listening to synthwave as much recently, but this song
        is getting me back into the genre.
      </Michael>
      <Nerissa>
        I think the drums throughout make the song a lot more catchy, and the
        electric guitar sections sound really cool. I was kind of surprised
        that the song came out in 2014 given that it sounds more like 80s (?)
        music.
      </Nerissa>
      <Michael>
        It definitely has that 80s feel. I think the music video does a good
        job of supporting that as well, because the clips from Back to the
        Future they selected make everything feel extra epic.
      </Michael>
      <Michael>
        Another interesting thing is that the song doesn't feel repetitive to
        me even though the chorus is repeated five times. I think the synths
        and guitar in the middle eight kind of break it up enough to prevent
        that.
      </Michael>
    </Post>,
    <Post id={"bakar_hell_n_back"} title={"bakar - hell n back"}
          genre={"indie"} date={"june 30, 2024"}>
      <Nerissa>
        This was one of the songs they kept playing at a summer camp I went to
        and it's been stuck in my head since.
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/BdrNvQ4YCng"}></Video>
      <Michael>
        Nothing in the song especially stands out to me except the bit where
        he rhymes “mountain dew” with “amount to.” That rhyme is just
        fantastic.
      </Michael>
      <Michael>
        Though, to be fair, it’s still a nice listen, and I could definitely
        see this going in a schoolwork playlist since it’s not too
        distracting.
        What's the bit of the song that stands out the most for you?
      </Michael>
      <Nerissa>
        I don't know if there's a specific part I like, but I just think his
        voice and the instrumentation make for a song that feels nostalgic and
        sounds more old school.
      </Nerissa>
    </Post>,
    <Post id={"still_woozy_lemon"} title={"still woozy - lemon"}
          genre={"indie"} date={"june 22, 2024"}>
      <Michael>
        We did a Still Woozy song not too long ago, but he just came out with
        another banger.
      </Michael>
      <Video link={"https://www.youtube.com/embed/z81vNSdV3fs"}></Video>
      <Michael>
        Not too sure how he's doing this, but he just released like four songs
        in the past six months, though I suppose it's not too different from
        releasing an album, just all spread out.
      </Michael>
      <Nerissa>
        It's such a relaxing song, and I like the bounce it has with the
        guitar in the background. The video is also a nice addition that
        really matches the song.
      </Nerissa>
      <Michael>
        I totally agree. I think what does it for me with a lot of songs from
        Still Woozy is the instrumental. This one is especially cheerful,
        which I like a lot. The distortion on his vocals is also pretty
        interesting, though I don't really know if it adds anything.
      </Michael>
    </Post>,
    <Post id={"dhruv_double_take"} title={"dhruv - double take"}
          genre={"indie"} date={"june 19, 2024"}>
      <Nerissa>
        This one was really popular so you might’ve heard it before:
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/R8FHtIhWqNo"}></Video>
      <Nerissa>
        The whole song is so smooth and laid back but doesn’t really get
        boring for me.
      </Nerissa>
      <Michael>
        Hmm, I haven’t heard this one before! Or maybe I have and I just
        didn’t really listen to it. I like the gentle addition of drums and
        bass every time the chorus comes around, which gives it a little extra
        boost/excitement without going overboard.
      </Michael>
    </Post>,
    <Post id={"lvther_one_look"} title={"lvther - one look"} genre={"edm"}
          date={"june 17, 2024"}>
      <Michael>
        Yesterday I brought up rediscovering EDM, and this is one of the songs
        I’ve just found again.
      </Michael>
      <Video link={"https://www.youtube.com/embed/RJOkI8k_VU0"}></Video>
      <Michael>
        I feel like the main drop has been used in a lot of videos on YouTube,
        but the rest of the song is pretty nice too!
      </Michael>
      <Nerissa>
        The heavy bass sounds so nice in contrast to the lighter vocals.
        Because of the lighter vocals, I can definitely see it playing in the
        background without being too attention-grabbing.
      </Nerissa>
      <Michael>
        I know, right? And the drop (electronic chorus?) is so hype as well.
        This might be super weird, but I swear whenever I listen to songs like
        this on the BART or in a car I just pretend I'm in a travel montage or
        something. Like I pretend my eyes are a camera and I pretend to shoot
        a video. Is that weird? It's probably weird. Anyways, that's the vibe
        I get from these types of songs, and I really wish more artists
        continued to make stuff like this.
      </Michael>
      <Michael>
        But then again, if more artists made stuff like this today, those new
        songs might not have the same effect as this does for me because I
        wouldn't have listened to those when I was a little kid.
      </Michael>
      <Michael>
        Maybe I should stop actively looking for songs that I used to listen
        to as a kid, because it's kind of a nonrenewable resource. Sure, I get
        joy every time I find another song that I used to play on my dad's old
        phone, but eventually I'll run out of them.
      </Michael>
      <Nerissa>
        I think it’s fine to run out of old songs to find again because I feel
        like the nostalgia each one brings doesn’t ever really get old.
      </Nerissa>
    </Post>,
    <Post id={"ricky_montgomery_snow"} title={"ricky montgomery - snow"}
          genre={"indie"} date={"june 15, 2024"}>
      <Video link={"https://www.youtube.com/embed/d8cSJaSaArU"}></Video>
      <Nerissa>
        When I first listened to this album I didn’t think much of it, but
        it’s become one of my favorites over time. All of the songs just feel
        comforting and I think this one might be the one I listen to the most.
      </Nerissa>
      <Michael>
        The bit where he says "bury me six feet in snow" is pretty powerful,
        and it kind of hooked me into the song. As for it being comforting, I
        totally agree with you, because something about the chorus just does
        it for me.
      </Michael>
      <Michael>
        On a more general note, do you often listen for the lyrics in songs? I
        feel like I haven't really been paying much attention to them lately.
        Maybe I'm just tired, but I have trouble sometimes with keeping track
        of what the singer's saying. Or maybe the point isn't to really get
        the lyrics consciously. What do you think?
      </Michael>
      <Nerissa>
        I don’t think too much about the lyrics on my first listen, but
        usually if I end up liking how it sounds I’ll search the lyrics up.
        Sometimes lyrics will stand out to me on the first listen which gets
        me more interested in it, but I don’t really pay them much attention
        at first otherwise.
      </Nerissa>
      <Michael>
        That makes more sense. I was kind of worried that my hearing was
        regressing or
        something cos I sometimes hardly understand any lyrics on first
        listen, even in slower songs like There is a Light that Never Goes
        Out.
      </Michael>
    </Post>,
    <Post id={"league_of_legends_legends_never_die"} genre={"pop"}
          title={"against the current - legends never die"}
          date={"june 14, 2024"}>
      <Michael>
        Have you ever listened to any League of Legends music? I've never
        played
        the game, but Brady showed this to me a couple years ago and I just
        remembered it's a thing like a week ago. I've been listening to this
        song a lot whenever I'm doing something that's high intensity.
      </Michael>
      <Video link={"https://www.youtube.com/embed/r6zIGXun57U\n"}></Video>
      <Nerissa>
        It sounds vaguely familiar, so I might have. The whole song is just
        really hype, especially with the vocals like you mentioned, so I can
        definitely see it being played during workouts or anything intense.
      </Nerissa>
    </Post>,
    <Post id={"conan_gray_people_watching"}
          title={"conan gray - people watching"} genre={"indie"}
          date={"june 13, 2024"}>
      <Nerissa>
        This one's a really popular song by Conan Gray. It's not one that
        stands out the most to me out of his whole discography, but it feels
        like a proper pop song.
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/goqqohUitmw"}></Video>
      <Michael>
        I've heard of Conan Gray a lot, but I've never really listened to any
        of their songs. I agree with you that it sounds like a pop song, cos
        it kind of gives me similar vibes to All of Me by John Legend. Not
        really upbeat, but still the type of song that'd play on the radio.
      </Michael>
    </Post>,
    <Post id={"nao_kodama_magic_hour"}
          title={<span>nao kodama & kan sano - <span
            className={"noto-sans-jp"}>きみだけのマジックアワー</span></span>}
          genre={"indie jpop"} date={"june 12, 2024"}>
      <Michael>
        Alright, I think I’m for sure back in my indie jpop phase.
      </Michael>
      <Video link={"https://www.youtube.com/embed/wwugO9WvyPE"}></Video>
      <Michael>
        I listened to the original version of this song a lot last year and
        didn’t like the remix much then, but now I think this remix is better
        than the original!
      </Michael>
      <Nerissa>
        I really like the instruments and sounds in the background. It makes
        the song sound a lot more unique and upbeat.
      </Nerissa>
      <Michael>
        Yeah the instrument that goes “wuh-wuh” and the trumpets around the
        chorus really tie it together.
      </Michael>
    </Post>,
    <Post id={"one_direction_heart_attack"}
          title={"one direction - heart attack"} genre={"pop"}
          date={"june 11, 2024"}>
      <Nerissa>
        I haven't listened to a ton of One Direction, but I really like this
        song that my friend sent me a while back.
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/pBz8CWRZi6c"}></Video>
      <Michael>
        I've definitely heard this song on the radio, and though it doesn't
        really do anything for me, it's still a pretty nice song.
      </Michael>
      <Michael>
        It's definitely pretty nostalgic, though. It brings me back to when I
        was little and made sure to get my parents to turn on the radio every
        time I rode on the car.
      </Michael>
      <Nerissa>
        For sure, I think the main reason this song stands out to me is
        nostalgia. I’m not sure I would like it nearly as much if I had only
        recently found it.
      </Nerissa>
    </Post>,
    <Post id={"still_woozy_again"} title={"still woozy - again"}
          genre={"indie"} date={"june 10, 2024"}>
      <Michael>
        Here's a chill song from Still Woozy, an artist I've listened to for a
        while.
      </Michael>
      <Video link={"https://www.youtube.com/embed/nMavmk_jbwc"}></Video>
      <Nerissa>
        I really like how laid-back it is without sounding boring.
        I also found the video pretty interesting, with what I assume is some
        insecurity or anxiety being represented through the tree and the man
        constantly feeling the need to prove it wrong.
      </Nerissa>
      <Michael>
        Woah yeah! I should've read the text in the music video, because it
        definitely adds a lot of meaning to the song.
      </Michael>
    </Post>,
    <Post id={"kiss_of_life_nobody_knows"}
          title={"kiss of life - nobody knows"} genre={"kpop"}
          date={"june 9, 2024"}>
      <Nerissa>
        I’ve been listening to this song recently:
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/unLuba-TQiE"}/>
      <Nerissa>
        It somehow feels simultaneously pretty relaxed and intense.
        I also really like all the falsetto parts in it.
      </Nerissa>
      <Michael>
        The instrumental in that song is what sold it for me, but I can’t
        really describe why. You know when you first hear a song and you just
        get the feeling that it’s going to be a banger? That’s what I got with
        this one.
      </Michael>
    </Post>,
    <Post id={"atarashii_gakko_nainainai"}
          title={"atarashii gakko - nainainai"} genre={"jpop"}
          date={"june 7, 2024"}>
      <Michael>
        Alright, this might be a longshot question, but have you ever listened
        to Atarashii Gakko?
      </Michael>
      <Nerissa>
        I think I’ve heard of them before, but I’ve never listened to any
        songs.
      </Nerissa>
      <Michael>
        One song by them's been in my mind lately, and it's pretty
        interesting.
      </Michael>
      <Video link={"https://www.youtube.com/embed/4qWc_6u4V9M"}></Video>
      <Nerissa>
        Woah, that song is really fun, especially with the video. It kind of
        felt like I was watching a drama. I don’t know if I would listen to it
        regularly, but it’s definitely super interesting.
      </Nerissa>
      <Michael>
        Yeah! It's so refreshing compared to the other stuff I usually listen
        to. All of their songs are a real departure from the mainstream, so I
        agree with you that it's not something I'd often listen to, but I keep
        coming back to this song from time to time.
      </Michael>
      <Michael>
        And they put so much energy into the video! It really does feel like a
        drama.
      </Michael>
    </Post>,
    <Post id={"noah_kahan_false_confidence"}
          title={"noah kahan - false confidence"} genre={"indie"}
          date={"june 6, 2024"}>
      <Nerissa>
        I originally found this song through one of my dance teachers a couple
        years ago, but I've never seen the music video until now and it's
        pretty interesting.
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/SF84c-Ehxls"}></Video>
      <Michael>
        That music video definitely fits the song, and the lyrics are very
        meaningful, but it’s probably not the type of song I’d listen to every
        day. The bit at the end does get me hyped, though!
      </Michael>
    </Post>,
    <Post id={"paramore_misery_business"} title={"paramore - misery business"}
          genre={"alt rock"} date={"june 5, 2024"}>
      <Michael>
        I’ve only just discovered this song by Paramore, but man, I really
        wish I found it earlier.
      </Michael>
      <Video link={"https://www.youtube.com/embed/aCyGvGEtOwc"}></Video>
      <Michael>
        It’s gotta be the one thing that’s improving my running pace right
        now.
      </Michael>
      <Nerissa>
        Yeah I love how energetic the song is, so it's definitely a song I
        would listen to when exercising. But because of how repetitive it is,
        I think I would get tired of it if I were just listening to it by
        itself.
      </Nerissa>
      <Michael>
        The fact that I left it on loop and forgot about it while coding
        earlier today isn’t helping its chances either; I’m definitely tired
        of it now. I’ll definitely still use it as a workout song, because its
        steady rhythm really helps me out.
      </Michael>
    </Post>,
    <Post id={"coin_talk_too_much"} title={"coin - talk too much"}
          genre={"indie pop"} date={"june 4, 2024"}>
      <Nerissa>
        Here's a fun song that I think feels a lot like summer.
      </Nerissa>
      <Video link={"https://www.youtube.com/embed/KWxM_zLJGsU"}></Video>
      <Michael>
        I love that chorus! The subtle audio distortion when he yells, “We
        talk too much!” gives it some extra oomph, which is pretty nice.
      </Michael>
      <Michael>
        I’m with you 100% on the summer feel, and the music video contributes
        a lot to it as well.
      </Michael>
    </Post>,
    <Post id={"mindfreakkk_have_you_ever"}
          title={"mindfreakkk - have you ever"} genre={"indie"}
          date={"june 3, 2024"}>
      <Michael>
        Here’s a pretty chill song I’ve been listening to lately!
      </Michael>
      <Video link={"https://www.youtube.com/embed/QBk13LJfSVw"}></Video>
      <Nerissa>
        Ooh, I really like the trumpets(?) near the end that make the song
        feel a lot more upbeat.
      </Nerissa>
      <Michael>
        Damn, nice find! I never noticed them consciously but they definitely
        add to the song.
      </Michael>
      <Michael>
        And now that I’ve listened to the song more closely (I usually just
        listen to songs in the background while doing work), I’m finding that
        the lyrics are pretty nice and the story they tell is lovely.
      </Michael>
    </Post>,
    <Post id={"renee_rapp_in_the_kitchen"}
          title={"reneé rapp - in the kitchen"} genre={"indie"}
          date={"june 1, 2024"}>
      <Nerissa>
        This is one of my favorite Reneé Rapp songs, but I don’t know if this
        video really matches what the song is like.
      </Nerissa>
      <Video link={"https://youtube.com/embed/cTEuCFTFa9g"}></Video>
      <Michael>
        Hmm yeah, I think the original music video fits the mood better. The
        song is beautiful, though. I can definitely relate to the theme of
        sentimentality (nostalgia?) that it has.
      </Michael>
      <Nerissa>
        Yeah her voice sounds so good too, and she expresses that sentiment so
        well. I haven’t seen the music video yet, so I’ll have to watch that.
      </Nerissa>
      <Michael>
        Oh man, her voice is really something. I don’t often hear songs that
        go that high and that loud for the chorus.
      </Michael>
    </Post>,
    <Post id={"clairo_sexy_to_someone"} title={"clairo - sexy to someone"}
          genre={"indie"} date={"may 29, 2024"}>
      <Michael>
        NEW CLAIRO!
      </Michael>
      <Video link={"https://www.youtube.com/embed/dwZB3Fx3MSg "}></Video>
      <Nerissa>
        I’ve been hearing about this song recently, but it’s my first time
        actually listening to it. I really like how it manages to be upbeat
        yet relaxed at the same time.
      </Nerissa>
      <Michael>
        I totally agree! I love how the bright synths and high-tempo drums
        combine with the laid back vocals.
      </Michael>
      <Michael>
        Well, right now I’m debating whether to listen to this song a lot
        upfront and risk getting tired of it or be disciplined to avoid that.
      </Michael>
      <Nerissa>
        Yeah when I find a new song I really like, I try to dilute my
        listening with similar songs or other songs from the same artist to
        avoid getting sick of it.
      </Nerissa>
      <Michael>
        That's a good idea. I'll try it out with this one!
      </Michael>
    </Post>,
    <Post id={"kygo_whatever"} title={"kygo - whatever"} genre={"pop"}
          date={"may 27, 2024"}>
      <Michael>
        Do you often listen to pop music?
        This song is definitely more mainstream than the stuff we’ve done so
        far.
      </Michael>
      <Video link={"https://www.youtube.com/embed/ZDZiXmCl4pk"}/>
      <Nerissa>
        I was wondering why it sounded so familiar before I realized it was
        sampling Shakira's song.
      </Nerissa>
      <Message name={"michael"}>
        Okay I’ll be honest here: I’ve never listened to Shakira’s music, so I
        didn’t even know it was a remix.<br/><br/>
        Remix or not though, this one’s kind of a banger though, isn’t it?
      </Message>
      <Michael>
        Well, two things learned in one day. I just found out that the proper
        term for this style of song is an “interpolation” and not a remix.
      </Michael>
      <Nerissa>
        Damn I never knew that either but yeah, this song is a solid pop song.
        Nothing about it particularly stands out to me, but it’s still nice to
        listen to.
      </Nerissa>
    </Post>,
    <Post id={"elliott_smith_angeles"} title={"elliott smith - angeles"}
          genre={"indie"} date={"may 24, 2024"}>
      <Michael>
        This song is one that’s been in my mind ever since we watched Paranoid
        Park in class.
      </Michael>
      <Video link={"https://www.youtube.com/embed/APPbDOBzdi4"}/>
      <Michael>
        I watched another Gus Van Sant film with my brother on Tuesday, and
        this song was in it as well. It’s got a sort of calming mood to it,
        which I like a lot.
      </Michael>
      <Nerissa>
        Yeah, I could see how it fits well in the background of a movie
        because of how gentle it is. It’s probably also the type of song that
        I’d put in a playlist for studying.
      </Nerissa>
      <Michael>
        It’s definitely fit for a studying playlist, and I think part of that
        is because I’ve only seen it in films. With nothing added to it, I
        kind of find it uninteresting for some reason, though maybe that’s
        because my attention span’s been fried.
      </Michael>
      <Michael>
        But at the same time, I do love songs that evoke a nostalgic feeling
        in me, and this song does just that.
      </Michael>
      <Nerissa>
        Yeah, I think there’s a certain time and place necessary to appreciate
        any song, so I’d probably like it a lot more when I’m already looking
        for that feeling.
      </Nerissa>
    </Post>,
    <Post id={"hozier_too_sweet"} genre={"indie"} title={"hozier - too sweet"}
          date={"may 23, 2024"}>
      <Nerissa>
        Today let's look at a more recent song, one that was released earlier
        this year.
      </Nerissa>
      <Video
        link={"https://www.youtube.com/embed/aezstCBHOPQ?si=bVyRHU6dnmZKoUv1"}/>
      <Michael>
        Wow, I haven’t listened to any of Hozier’s songs since Take Me to
        Church. This one’s really interesting though. On first listen, my only
        gripe is that they tried to rhyme grape with wait, but to be fair, I
        only noticed because I was looking at the lyrics.
      </Michael>
      <Nerissa>
        Ooh, I didn't notice that. But I really like how comfortable and
        easygoing the song sounds, probably helped by the guitar and the
        earthy background in the video.
      </Nerissa>
      <Michael>
        I totally agree with you. After putting my headphones on and listening
        to it again, I can hear a lot more of the bassier bits, which I like a
        lot. You know, for some reason, I almost wrote it off on first listen,
        because I thought it sounded too much like country music, which I
        usually don’t like, but now I’m definitely coming around to it.
      </Michael>
      <Nerissa>
        Yeah I can definitely see how it sounds somewhat country, which I
        typically don't listen to a lot either.
      </Nerissa>
    </Post>,
    <Post id={"the_smiths_there_is_a_light"} genre={"indie"}
          title={"the smiths - there is a light that never goes out"}
          date={"may 22, 2024"}>
      <Michael>
        To start it off, I think we should try this rec from Sanjana.
      </Michael>
      <Video
        link={"https://www.youtube.com/embed/siO6dkqidc4?si=BP51MwvFeP8auelS"}/>
      <Nerissa>
        The title sounds really hopeful, but the lyrics are definitely pretty
        depressing. Although I guess that's the point, finding hope in a bad
        situation.
      </Nerissa>
      <Message name={"michael"}>
        I think you’re totally dead on. The instrumental is pretty bright, but
        the vocals sound kind of laid back, which I think supports what you’ve
        said.
        <br/><br/>
        I feel like this song is definitely going in a homework playlist. It’s
        not too distracting; it’s just pleasant, despite the sad lyrics.
      </Message>
      <Nerissa>
        For sure. I think the repetition in the song also contributes to how
        laid back it feels, so I definitely see how it'd fit in a homework
        playlist.
      </Nerissa>
    </Post>
  ]

function App() {
  const [page, setPage] = useState(0)
  const pageSize = 5
  const numPages = Math.ceil(posts.length / pageSize)

  function PageTurner() {
    let other = []

    function Page(props) {
      return (<button
        id={`page-${props.n}`}
        onClick={() => {
          if (page === props.n - 1) return
          window.scrollTo(0, 0);
          setPage(props.n - 1)
        }}
        className={`h-20 w-10 text-xl flex flex-row place-items-center ${page === props.n - 1 ? "sf-ui-bold hover:cursor-default" : "sf-ui-reg font-medium text-blue-600 hover:text-blue-500 hover:underline hover:cursor-pointer"}`}>
        {props.n}
      </button>)
    }

    for (let i = Math.max(page - 1 + 1, 2); i <= Math.min(page + 1 + 1, numPages - 1); i++) {
      other.push(<Page n={i}/>)
    }

    return (
      <div className={"w-screen flex place-content-center -mt-10"}>
        <div
          className={"2xl:w-1/3 xl:w-2/5 lg:w-1/2 md:w-2/3 w-full flex flex-row pl-4 pr-4"}>
          <Page n={1}/>
          {page >= 3 &&
            <div
              className={`h-20 w-10 text-xl sf-ui-reg flex flex-row place-items-center`}>
              ...
            </div>
          }
          {other}
          {page <= numPages - 4 &&
            <div
              className={`h-20 w-10 text-xl sf-ui-reg flex flex-row place-items-center`}>
              ...
            </div>
          }
          <Page n={numPages}/>
          <div className={"flex flex-row-reverse w-full"}>
            {page !== numPages - 1 &&
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setPage(page + 1)
                }}
                className={`h-20 w-20 text-xl sf-ui-reg flex flex-row-reverse place-items-center font-medium text-blue-600 hover:text-blue-500 hover:underline hover:cursor-pointer`}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            }
            {page !== 0 &&
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setPage(page - 1)
                }}
                className={`h-20 w-20 text-xl sf-ui-reg flex flex-row-reverse place-items-center font-medium text-blue-600 hover:text-blue-500 hover:underline hover:cursor-pointer`}>
                <i
                  className="fa-solid fa-arrow-left"></i>
              </button>
            }
          </div>
        </div>
      </div>
    )
  }

  const Page = memo(() => <div>
      {posts.slice(page * pageSize, Math.min(posts.length, page * pageSize + pageSize))}
    </div>
  )
  
  let random = Math.random() > 0.5
  return (
    <div>
      <div className={"pt-4"}/>
      {page === 0 &&
        <Post id={"welcome"} title={"welcome!"} date={today()}>
          { random &&
            <>
          <Michael>
            I'm a student who spends way too much free time coding, and I'm
            always
            listening to music or looking for new music to listen to.
          </Michael>
          <Nerissa>
            I'm a student who finds new music mostly from dance, so I'm always
            open to some different song recs.
          </Nerissa>
            </>
          }
          { !random &&
            <>
          <Nerissa>
            I'm a student who finds new music mostly from dance, so I'm always
            open to some different song recs.
          </Nerissa>
          <Michael>
            I'm a student who spends way too much free time coding, and I'm
            always
            listening to music or looking for new music to listen to.
          </Michael>
            </>
          }

        </Post>
      }
      <Page/>
      <PageTurner/>
    </div>
  )
}

export default App
