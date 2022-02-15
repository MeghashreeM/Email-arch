import emailjs from 'emailjs-com'

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_trpzspw', 'template_rppn1ls', e.target, 'user_ZmWiwMtknPLnTaaROBI5D').then(function (res) {
            console.log("sucess!", res.status, res.text);
        }, function (error) {
            console.log("Failed....", error);
        });
        //     console.log(res);
        // }).catch(err => console.log(err));
    }
    return (<div className="container border"
        style={{
            marginTop: "50px",
            width: "50%", backgroundImage: `url('https://th.bing.com/th/id/R.a9e50ad84c996646762cd7c8a8d7eb18?rik=MbtllLMFQZettA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f09%2fAll-White-Background-HD.jpg&ehk=I96ZlwmQJl%2btAlc5FarSKH8kk4SzL8nQQuOX4lnAoQE%3d&risl=&pid=ImgRaw&r=0')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
        <h1 style={{ marginTop: '25px' }}>Contact form</h1>
        <form className="row" style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
            <label>name</label>
            <input type="text" name="name" />
            <label>email</label>
            <input type="email" name="user_email" className="form-control" />
            <label>Message</label>
            <textarea name='message' rows='4'></textarea>
            <input type='submit' value='send' className="form-control btn btn-primary" style={{ marginTop: "30px" }}></input>


        </form>
    </div>);
};
export default Mailer;