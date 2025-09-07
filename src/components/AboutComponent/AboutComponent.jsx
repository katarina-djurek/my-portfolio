import styles from "./AboutComponent.module.css";

export default function AboutComponent() {
  return (
    <div>
      <h2>👋 Hi, I’m Katarina!</h2>
      <div className={styles.mainContainer}>
        <img
          className={styles.profileImg}
          alt="Katarina Đurek"
          src="./Image_1756737862849.jpg"
        />
        <div className={styles.textContainer}>
          <p>
            I’m a front-end developer who enjoys building apps and learning
            something new with every project. My path started in education,
            where I earned a master’s degree in Primary Education with English,
            but I’ve since shifted my focus to web development. I don’t have
            formal job experience yet, but I’ve built several apps on my own and
            I’m excited to grow as a developer. Outside of coding, I enjoy
            photography and spending time exploring creative ideas.
          </p>
          <p>
            Take a look at my portfolio to see some of the apps I’ve built —
            from a NASA articles explorer and a Chuck Norris random joke
            generator (JavaScript) to a To-do app and GitHub user search
            (React).
          </p>
          <p>
            I’m currently looking for opportunities where I can contribute,
            learn, and grow as a front-end developer. If you’re looking for
            someone motivated, adaptable, and ready to take on new challenges,
            feel free to reach out—I’d love to connect.
          </p>
          <div className={styles.logoContainer}>
            <a
              href="https://www.linkedin.com/in/katarina-đurek-074547140"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.logoImg}
                alt="LinkedIn"
                src="./LinkedIn_logo_initials.png"
              />
            </a>
            <a
              href="https://github.com/katarina-djurek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.logoImg}
                alt="GitHub"
                src="./github-6980894_960_720.webp"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
