import s from './style.module.css'

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  const layoutStyle = {}

  urlBg
    ? (layoutStyle.backgroundImage = `url(${urlBg})`)
    : colorBg
    ? (layoutStyle.background = colorBg)
    : console.log('пустой фон')

  return (
    <section style={layoutStyle} className={s.root} id={id}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator} />
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout
