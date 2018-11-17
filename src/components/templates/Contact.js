import React, { Component } from 'react';
import { Svg } from '../../utilities'
class Contact extends Component {

    render() {
        const { heading, subheading } = this.props.pageContent;
        return (
            <div className={`page contact`}>
                <div className="small-12 medium-10 medium-centered contact__wrapper">
                    <div className="contact-left intro-top__wrapper">
                        <div className="heading__wrapper">
                            <h1 className="page__heading">{heading}</h1>
                        </div>
                        <div className="small-12 paragraph__wrapper">
                            <p className="page__paragraph">{subheading}</p>
                        </div>

                    </div>
                    <div className="contact-right">
                        <div className="contact-icons">
                            <div className="icon__wrapper">
                                <Svg name="pin" />
                                <span>London, UK</span>
                            </div>
                            <div className="icon__wrapper">
                                <Svg name="phone" />
                                <span>+44 7860 118584</span>
                            </div>
                            <div className="icon__wrapper">
                                <Svg name="mail" />
                                <span>o.horovsky@gmail.com</span>
                            </div>
                        </div>
                        <div className="form__wrapper">
                            <form method="POST">
                                <div className="input">
                                    <Svg name="form-name" />
                                    <input required="required" type="text" name="name" placeholder="Name" />
                                </div>
                                <div className="input">
                                    <Svg name="form-email" />
                                    <input required="required" type="email" name="email" placeholder="Email" />
                                </div>
                                <div className="input textarea">
                                    <Svg name="form-message" />
                                    <textarea required="required" type="email" name="message" placeholder="Your Message" />
                                </div>
                                <input className="rect-button" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Contact;