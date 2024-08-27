'use client';

export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div id="section-description">
                Please reach out if you have any questions! 
            </div>
            <form action="action_page.php">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input id="see-more-button" type="submit" value="Submit" />
            </form>
        </section>
    );
}
