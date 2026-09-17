import './App.css'

const cards = [
  { icon: '✦', title: '学习', text: '持续探索 React、产品设计与 AI 工具，把每一次好奇都变成新的能力。', tag: '正在学习' },
  { icon: '↗', title: '项目', text: '从一个想法开始，认真完成每个小作品，让灵感真正落地。', tag: '作品集建设中' },
  { icon: '◎', title: '联系方式', text: '很高兴认识同样热爱创造的你，欢迎交流想法、分享有趣的事。', tag: 'hello@example.com' },
]

function App() {
  return (
    <main className="page-shell">
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回顶部">Y.</a>
        <span className="nav-note">个人主页</span>
      </nav>

      <section className="intro" id="top">
        <p className="eyebrow"><span /> HELLO, WORLD</p>
        <h1>我的第一个<br /><em>Vibe Coding</em> 网站</h1>
        <p className="lead">这里记录我的学习、创作和成长。<br />让我们从一个简单的开始，做些有意思的事。</p>
        <a className="scroll-hint" href="#about">认识我 <span>↓</span></a>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-label">01 / 关于我</div>
        <div className="about-content">
          <div className="avatar" aria-hidden="true">☻</div>
          <div>
            <h2 id="about-title">你好，我是一个<br />正在学习的创造者。</h2>
            <p>这是我用 React 制作的第一个个人网站。技术让想法有了形状，而我正在享受把每一个灵感变成现实的过程。</p>
          </div>
        </div>
      </section>

      <section className="explore" aria-labelledby="explore-title">
        <div className="section-heading">
          <div className="section-label">02 / 探索中</div>
          <h2 id="explore-title">此刻的我</h2>
        </div>
        <div className="card-grid">
          {cards.map((card) => (
            <article className="info-card" key={card.title}>
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="card-tag">{card.tag}</span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>© 2026 · Made with curiosity</span>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  )
}

export default App
