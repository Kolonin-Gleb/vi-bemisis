import React from 'react'
import './CoworkingHome.css'

function CoworkingHome() {
  return (
    <div className="cw-root">
      <header className="cw-header">
        <span className="cw-logo">it.am</span>
        <div className="cw-auth">
          <button className="cw-register">Зарегистрироваться</button>
          <span className="cw-login-link">Войти</span>
        </div>
      </header>
      <main className="cw-main">
        <div className="cw-desc">
          <span className="cw-desc-bold">
            Твой коворкинг. Твоя тусовка. Твои правила.
          </span>
          <br />
          Место, где код пишется быстрее, а перерывы — вкуснее. Здесь ценят твой вклад — будь то гениальная строка кода или пакет печенья для друзей.
        </div>
        <div className="cw-grid">
          <button className="cw-btn">Забронировать</button>
          <button className="cw-btn">Отметиться</button>
          <button className="cw-btn">Анонс мероприятий</button>
          <button className="cw-btn">ТОП-донатеров</button>
        </div>
      </main>
      <footer className="cw-footer">
        <div className="cw-footer-left">
          <div>@MISIS_University 2025</div>
          <div>@itammisis</div>
        </div>
        <div className="cw-footer-right">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="cw-footer-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#111"/><path d="M19.6 10.2c.1-.3 0-.5-.4-.5h-1.3c-.4 0-.6.2-.7.4 0 0-.9 2.1-2.1 3.5-.4.4-.6.5-.8.5-.1 0-.3-.1-.3-.5v-3.4c0-.4-.1-.5-.4-.5h-2c-.2 0-.4.1-.4.4 0 .4.6.5.7 1.6v2.4c0 .5-.1.6-.3.6-.6 0-2.1-2.3-3-5.1-.2-.4-.3-.5-.7-.5H6.1c-.4 0-.5.2-.5.4 0 .4.6 2.4 2.7 5.1 1.4 1.8 3.3 2.8 5.1 2.8 1.1 0 1.2-.2 1.2-.5v-1.2c0-.4.1-.5.4-.5.2 0 .6.1 1.5 1.1 1 .9 1.2 1.3 1.8 1.3h1.3c.4 0 .6-.2.5-.5-.1-.3-.5-.8-1.1-1.5-.3-.4-.8-.9-.9-1.1-.2-.3-.1-.4 0-.7 0 0 1.3-1.8 1.5-2.4z" fill="#fff"/></svg>
          </a>
          <a href="https://t.me/itatmisis" target="_blank" rel="noopener noreferrer" className="cw-footer-icon">
            <svg width="28" height="28" viewBox="0 0 15 28" fill="none"><circle cx="14" cy="14" r="14" fill="#111"/><path d="M20.7 9.1c.2-.8-.2-1.1-.9-.9l-11 4.2c-.8.3-.8.8-.1 1l2.8.9 1.1 3.3c.1.3.2.4.5.4.3 0 .4-.1.5-.4l1.1-2.1 2.3 1.7c.4.3.7.2.8-.3l1.9-7.8zm-2.3 1.4l-4.2 3.8c-.1.1-.2.2-.2.4l-.3 1.2-.7-2.1 5.4-2.1zm-3.2 5.2l.2-.8 1.7 1.3-1.9-.5z" fill="#fff"/></svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default CoworkingHome