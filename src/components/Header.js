import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <Fragment>
<header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>The digital executive <br />  for the independent artist</h1>
                {/* <p>The digital executive for the independent artist</p> */}
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
            </ul>
        </nav>
    </header>

    <div style={{
            width: '100%',
            maxWidth: '600px',
            background: 'rgba(0,0,0,.5)',
            padding: '40px',
            borderRadius: '10px',
            margin: '100px 40px'
    }}>
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
        </div>
    </Fragment>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
