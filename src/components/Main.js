import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/about.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>The music industry is failing. Unless you are Drake, Cardi B, Ed Sheerhan, Billie Eilish? Forget about making a living with music. Who has heard this narrative before? Who thought this when someone said “I want to be a musician”. Show of hands, real quick. I’ve thought it. This tale of doom and gloom has been parroted throughout society for almost two decades, all as we live through a massive revival of the Music Industry. Artists, labels and publishers are cashing in on the growing popularity of streaming platforms like Spotify and Apple music. There had never be an independent musician. So why does this narrative persist? Why do we think of independent artist as lyft drivers with a hobby? we believe it’s on key reason: the skills required to write amazing music are completely different than the skill required to monetize amazing music. </p>
          <p>In the past, the answer to this is simple: sign with a label. Their business is the music business after all. But it’s a people intensive business with gatekeepers that doesn’t scale, and it can’t cope with the deluge of new music being produced. As a result, labels lean on popularity as a key metric to decide who to sign, creating a giant big catch-22: youre act must be popular to get signed, and to be popular you need to get signed. So how does an artist get from 0-1?</p>
          <p>This is where Exec by Hollywood Principle Records comes in: a digital label exec to help artists. Our labels’s innovative digital services model has a simple pitch: Give us good content, we will provide artists with a snapshot of their current progress and how artists how to maximize it, the same way we do for our current roster artists. We offer a tailored comprehensive plan generated for each of an artists releases that *tells an artist what to do to be as successful as possible*, all for a low monthly fee. Tell us your type of release and your budget, no matter how big or how small, and we will dynamically generate the right plan for you, while automating as much of the dirty work as possible, and giving you easy to digest reports on how effective your efforts have been.</p>
          <p>Releasing an album? Our software will tell you if/when you should run Spotify ads. It will tell you which blogs to reach out to, and when, as well as templates of what to say. It will tell you when to run instagram ads, at what audience. Which agencies to register your songs with, ensuring you get paid, and much more. Its constantly learning what works from all our campaigns, becoming refined, more effective, and more automated to make the hardest part of being an independent musician straightforward, simple, and efficient.</p>
          {close}
        </article>

        <article id="contact" className={`active ${this.props.articleTimeout ? 'timeout' : ''}`}>
          <h2 className="major">Contact</h2>
          <form action="https://hollywoodprinciple.us9.list-manage.com/subscribe/post?u=61143e36dd2b444f1dd45ad6b&amp;id=55c9d07ae7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div className="field">
              <label htmlFor="mce-EMAIL">Email</label>
              <input type="email"  name="EMAIL" className="required email" id="mce-EMAIL"/>
          </div>
          <div className="field">
              <label htmlFor="message">Message</label>
              <textarea rows="6"  name="MESSAGE" className="required" id="mce-MESSAGE"></textarea>
          </div>
          <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
          </ul>
      </form>
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main