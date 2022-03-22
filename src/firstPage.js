import './firstPage.css';
import logo from "./image/logo.png"
import tweeter from "./image/twitter.png"
import fb from "./image/facebook.png"
import ins from "./image/in.png"
import myphoto from "./image/myphoto.jpg"
import k1 from "./image/kola_01.png"
import k2 from "./image/kola_02.png"
import k3 from "./image/kola_03.png"
import github from "./image/github_icon.png"
import dev from "./image/dev_icon.png"
import easyCode from "./image/easy_code_button.png"
import reacct from "./image/react.png"
import webpack from "./image/webpack.png"
import express from "./image/express.png"
import style from "./image/style.png"
import redux from "./image/redux.png"
import flexbox from "./image/flexbox.png"
import tool from "./image/tool_program_ikona.png"
import ext from "./image/external_link_icon.png"
import pr1 from "./image/portfolio_case_01.png"
import pr2 from "./image/portfolio_case_02.png"
import pr3 from "./image/portfolio_case_03.png"
import pr4 from "./image/portfolio_case_04.png"
import pr5 from "./image/portfolio_case_05.png"
import pr6 from "./image/portfolio_case_06.png"
import bl1 from "./image/blog1.jpg"
import bl2 from "./image/blog2.jpg"
import contact from "./image/contacts.png"

const FirstPage = () => {
	return (
		<div className="main-wrapper">
			<div className="header">
				<div className="header-logo"><img src={logo} className="logo" alt="logo.png" /></div>
				<div className="header-main__nav">
					<div className="header-main__nav-text">
						<div className="header-main__nav-word">About me</div>
						<div className="header-main__nav-word">Skills</div>
						<div className="header-main__nav-word">Portfolio</div>
						<div className="header-main__nav-word">Blog</div>
						<div className="header-main__nav-word">Contact me</div>
					</div>
					<hr />
					<div className="header-main__nav-social">
						<div className="header-main__nav-ikon"><img src={tweeter} className="twitter" alt="twitter_logo.png" /></div>
						<div className="header-main__nav-ikon"><img src={fb} className="facebook" alt="facebook_logo.png" /></div>
						<div className="header-main__nav-ikon"><img src={ins} className="instagram" alt="instagram_logo.png" /></div>
					</div>
				</div>
			</div>
			<div className="main-section">
				<div className="main-section__photo">
					<img src={k2} className="circle2" alt="circle2.png" />
					<img src={k1} className="circle3" alt="circle3.png" />
					<div className="main-section__photo-relative">
						<img src={myphoto} className="main-section__photo-image" alt="myphoto.jpg" />
						<img src={k3} className="circle1" alt="circle3.png" />
						<div className="main-section__name">
							<div className="main-section__name-flex">
								<div className="main-section__name-flex_data">
									<h2>'//Hi, My name is Michał Wierzbicki'</h2>
									<h3>Software Engineer</h3>
									<p>Passionate Techy and Tech Author with 3 years of experience within the field.</p>
								</div>
								<div className="main-section__name-flex_share">
									<p>See my works</p>
									<img src={github} className="main-section__name-cat" alt="cat_icon.png" />
									<img src={dev} className="main-section__name-dev" alt="dev_icon.png" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="main-section__freelancer">

					<h2>'//I am a freelancer'</h2>
					<p>Contact me if you want to work with me</p>
					<div className="main-section__freelancer-div">
						<input type="button" name="" className="main-section__freelancer-button" value="Hire ME" />
						<input type="button" name="" className="main-section__freelancer-button" value="Download CV" />
					</div>
				</div>
				<div className="main-section__about">
					<h2>'//About me'</h2>
					<h3>All about Techy</h3>
					<p>Lorem ipsum dolor sit amet,</p>
					<p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<h3>My interests</h3>
					<ul>
						<li><p>music</p></li>
						<li><p>movies</p></li>
						<li><p>sport</p></li>
					</ul>
					<div className="main-section__about-course">
						<p>Ukończyłem kurs Easy Code</p>
						<img src={easyCode} className="main-section__about-image" alt="easy_button.png" />
					</div>
				</div>
				<div className="main-section__skills">
					<img src={k3} className="circle4" alt="circle4.png" />
					<h2>'//Skills'</h2>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<div className="main-section__skills-table">
						<div className="main-section__skills-row">
							<div className="main-section__skills-animation__PHP">PHP 100%</div>
						</div>
						<div className="main-section__skills-row">
							<div className="main-section__skills-animation__JS">JS 90%</div>
						</div>
						<div className="main-section__skills-row">
							<div className="main-section__skills-animation__HTML">HTML 90%</div>
						</div>
						<div className="main-section__skills-row">
							<div className="main-section__skills-animation__NODEJS">NODEJS 60%</div>
						</div>
						<div className="main-section__skills-row">
							<div className="main-section__skills-animation__CSS">CSS 90%</div>
						</div>
						<div className="main-section__skills-row">
							<div className="main-section__skills-animation__GO">GO 60%</div>
						</div>
					</div>
				</div>
			</div>

			<div className="main-tools">
				<img src={k1} className="circle5" alt="circle5.png" />
				<h2>'//Tools'</h2>
				<h3>My essentials</h3>
				<div className="main-tools__div">
					<div className="main-tools__ikon">
						<img src={reacct} className="main-tools__div-ikons" alt="react_icon.png" />
						<p>React</p>
						<p>16.6.3</p>
					</div>
					<div className="main-tools__ikon">
						<img src={webpack} className="main-tools__div-ikons" alt="webpack_icon.png" />
						<p>Webpack</p>
						<p>4.19.1</p>
					</div>
					<div className="main-tools__ikon">
						<img src={express} className="main-tools__div-ikons" alt="express_icon.png" />
						<p>Express</p>
						<p>4.16.4</p>
					</div>
					<div className="main-tools__ikon">
						<img src={style} className="main-tools__div-ikons" alt="style_icon.png" />
						<p>Styled Components</p>
						<p>4.16.4</p>
					</div>
					<div className="main-tools__ikon">
						<img src={redux} className="main-tools__div-ikons" alt="redux_icon.png" />
						<p>Redux</p>
						<p>4.0.1</p>
					</div>
					<div className="main-tools__ikon">
						<img src={flexbox} className="main-tools__div-ikons" alt="flexbox_icon.png" />
						<p>Flexbox</p>
						<p>4.0.1</p>
					</div>
					<div className="main-tools__ikon">
						<img src={tool} className="main-tools__div-ikons" alt="tool_icon.png" />
						<p>Program</p>
						<p>5.2.1</p>
					</div>
					<div className="main-tools__ikon">
						<img src={tool} className="main-tools__div-ikons" alt="tool_icon.png" />
						<p>Program</p>
						<p>5.2.2</p>
					</div>
				</div>
			</div>
			<div className="main-myWorks">
				<div className="main-myWorks__portfolio-text">
					<h2>'//My works'</h2>
					<h3>Portfolio</h3>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</div>
				<img src={k1} className="circle6" alt="circle6.png" />
				<div className="main-myWorks__portfolio-base">
					<div className="main-myWorks__portfolio-elements">
						<img src={pr1} alt="portfolio_01.png" />
						<div className="main-myWorks__portfolio-animation">
							<h2>Office software</h2>
							<p>- task management</p>
							<p>Tools: React / Redux / Program 01 / Flexbox</p>
						</div>
						<div className="main-myWorks__portfolio-elements__share">
							<img src={github} className="main-myWorks__portfolio-elements__cat" alt="cat_icon.png" />
							<img src={ext} className="main-myWorks__portfolio-elements__arrow" alt="arrow_icon.png" />
						</div>
					</div>
					<div className="main-myWorks__portfolio-elements">
						<img src={pr2} alt="portfolio_02.png" />
						<div className="main-myWorks__portfolio-animation">
							<h2>Office software</h2>
							<p>- task management</p>
							<p>Tools: React / Redux / Program 01 / Flexbox</p>
						</div>
						<div className="main-myWorks__portfolio-elements__share">
							<img src={github} className="main-myWorks__portfolio-elements__cat" alt="cat_icon.png" />
							<img src={ext} className="main-myWorks__portfolio-elements__arrow" alt="arrow_icon.png" />
						</div>
					</div>
					<div className="main-myWorks__portfolio-elements">
						<img src={pr3} alt="portfolio_03.png" />
						<div className="main-myWorks__portfolio-animation">
							<h2>Office software</h2>
							<p>- task management</p>
							<p>Tools: React / Redux / Program 01 / Flexbox</p>
						</div>
						<div className="main-myWorks__portfolio-elements__share">
							<img src={github} className="main-myWorks__portfolio-elements__cat" alt="cat_icon.png" />
							<img src={ext} className="main-myWorks__portfolio-elements__arrow" alt="arrow_icon.png" />
						</div>
					</div>
					<div className="main-myWorks__portfolio-elements">
						<img src={pr4} alt="portfolio_04.png" />
						<div className="main-myWorks__portfolio-animation">
							<h2>Office software</h2>
							<p>- task management</p>
							<p>Tools: React / Redux / Program 01 / Flexbox</p>
						</div>
						<div className="main-myWorks__portfolio-elements__share">
							<img src={github} className="main-myWorks__portfolio-elements__cat" alt="cat_icon.png" />
							<img src={ext} className="main-myWorks__portfolio-elements__arrow" alt="arrow_icon.png" />
						</div>
					</div>
					<div className="main-myWorks__portfolio-elements">
						<img src={pr5} alt="portfolio_05.png" />
						<div className="main-myWorks__portfolio-animation">
							<h2>Office software</h2>
							<p>- task management</p>
							<p>Tools: React / Redux / Program 01 / Flexbox</p>
						</div>
						<div className="main-myWorks__portfolio-elements__share">
							<img src={github} className="main-myWorks__portfolio-elements__cat" alt="cat_icon.png" />
							<img src={ext} className="main-myWorks__portfolio-elements__arrow" alt="arrow_icon.png" />
						</div>
					</div>
					<div className="main-myWorks__portfolio-elements">
						<img src={pr6} alt="portfolio_06.png" />
						<div className="main-myWorks__portfolio-animation">
							<h2>Office software</h2>
							<p>- task management</p>
							<p>Tools: React / Redux / Program 01 / Flexbox</p>
						</div>
						<div className="main-myWorks__portfolio-elements__share">
							<img src={github} className="main-myWorks__portfolio-elements__cat" alt="cat_icon.png" />
							<img src={ext} className="main-myWorks__portfolio-elements__arrow" alt="arrow_icon.png" />
						</div>
					</div>
				</div>
			</div>
			<div className="main-blog">
				<h2>'//Blog posts'</h2>
				<h3>Hints and tips</h3>
				<div className="main-blog__div">
					<img src={k1} className="circle7" alt="circle7.png" />
					<div className="main-blog__div-photo">
						<img src={bl1} className="main-blog__div-photo_ph" alt="blog_1.jpg" />
					</div>
					<div className="main-blog__div-description">
						<div className="main-blog__div-description__header">
							<div className="main-blog__div-description__title">
								<h2>'//Title 01'</h2>
								<h3>Secondary Title</h3>
							</div>
							<div className="main-blog__div-description__date">
								<p>author, 01.09.2020</p>
							</div>
						</div>
						<div className="main-blog__div-description__des">
							<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
						<div className="main-blog__div-description__readMore">
							<p>Read more ➾</p>
						</div>
					</div>
				</div>
				<div className="main-blog__div">
					<div className="main-blog__div-photo">
						<img src={bl2} className="main-blog__div-photo_ph" alt="blog_2.jpg" />
					</div>
					<div className="main-blog__div-description">
						<div className="main-blog__div-description__header">
							<div className="main-blog__div-description__title">
								<h2>'//Title 01'</h2>
								<h3>Secondary Title</h3>
							</div>
							<div className="main-blog__div-description__date">
								<p>author, 01.09.2020</p>
							</div>
						</div>
						<div className="main-blog__div-description__des">
							<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea	commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
						<div className="main-blog__div-description__readMore">
							<p>Read more ➾</p>
						</div>
					</div>
				</div>
			</div>
			<div className="main-contact">
				<div className="main-contact__text">
					<h2>'//Contact me'</h2>
					<p>If you are willing to work with me, contact me. I can join your conference to serve you with my engeneering experience.</p>
					<div className="main-contact__text-form">
						<div className="main-contact__text-form_data">
							<input type="email" name="" placeholder="Your e-mail" className="contact-field" />
							<input type="" name="" placeholder="Your name" className="contact-field" />
							<textarea placeholder="How can I help you? Please, put here your message/request." className="contact-field" rows="7"></textarea>
						</div>
						<button className="main-contact__text-form_sendButton">Send</button>
					</div>
				</div>
				<div className="main-contact__author">
					<img src={k3} className="circle8" alt="circle8.png" />
					<div className="main-contact__author-mail">
						<img src={contact} alt="contacts.png" />
						<div className="main-contact__mail-div">
							<p>michalwierzbicki.miw@gmail.com</p>
							<p>+ 48 555 555 555</p>
						</div>
					</div>
					<img src={myphoto} className="main-contact__author-myphoto" alt="myphoto.jpg" />
					<p>autor: Michał Wierzbicki</p>
					<p>username: @michalwierzbicki</p>
					<p>description: University Graduate | Software Engineer</p>
					<p>homepage: lelalo.github.pl</p>
					<p>repository type: Open-source</p>
					<p>url: github.com/lelalo</p>
				</div>
			</div>
		</div>
	)
}
export default FirstPage;