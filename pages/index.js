import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';
import Stories from "../components/stories";

export default function Index() {
  return (
    <div className="main-body">
      <Header />

      <section className="big-text">
        <div className="container">
          <h1>
            You can make a big difference by giving a small <br />opportunity
          </h1>
        </div>
      </section>

      <section className="articles">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>What</h1>
              <p>Roots is a social network and career portal built for students, around their needs and desires, to make sure they never miss an opportunity and they are always 
                ready when the right one comes up.
              </p>
            </div>
            <div className="col-sm">
              <h1>Why</h1>
              <p>Because today's options have just left young talents in a crowded sea of social networking tools and applications that 
                have stopped long time ago, doing what they promised to do. So we built our own!
              </p>
            </div>
            <div className="col-sm">
              <h1>How</h1>
              <p>
                We work with students, academics and industry partners on a daily basis, we listened to their needs and we designed the application that was right for them,
                it is a long journey, we only have a few funcionalities, but our road map is a bold one.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Link href="/about">
                <a className="learn-more-button">Learn more about us</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
        <Stories />
      */}
      <Footer />
    </div>
  );
}