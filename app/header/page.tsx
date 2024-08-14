'use client';
import SocialMediaLinks from "app/components/socialMediaLinks";

// site header and background
export default function Header() {
    const SplitText = ({ copy, role }) => {
        return (
            // add animation to each character of text
            <span aria-label={copy} role={role}>
                {copy.split("").map(function (char, index) {
                    let style = { "animation-delay": (index / 20) + "s" }
                    return <span
                        aria-hidden="true"
                        key={index}
                        style={style}>
                        {char}
                    </span>;
                })}
            </span>
        )
    }
    return (
        <section id="header">
            <h1 id="Jessica-Peng"><SplitText copy="Jessica Peng" role="heading" /></h1>
            <SocialMediaLinks/>
            <div className="down-arrow"></div>
        </section>
    );
}
