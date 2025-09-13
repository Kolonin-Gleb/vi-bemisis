import React from 'react'
import './BookPlace.css'

function BookPlace({ onBack }) {
  return (
    <div className="bp-root">
      <header className="bp-header">
        <span className="bp-logo">it.am</span>
        <div className="bp-user">
          <span className="bp-username">Иван Иванов</span>
          <span className="bp-usericon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <ellipse cx="14" cy="11" rx="5" ry="5" stroke="#fff" strokeWidth="2"/>
              <ellipse cx="14" cy="20" rx="8" ry="4" stroke="#fff" strokeWidth="2"/>
            </svg>
          </span>
        </div>
      </header>
      <main className="bp-main">
        <button className="bp-back" onClick={onBack} aria-label="Назад">
          <span>&#8592;</span>
        </button>
        <form className="bp-form">
          <h2 className="bp-title">Забронировать рабочее место</h2>
          <div className="bp-row bp-row-time">
            <span className="bp-icon">
              <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="13" stroke="#39313d" strokeWidth="2"/><path d="M14 8v6l4 2" stroke="#39313d" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <input className="bp-date" type="text" value="Суббота, 13 сентября" readOnly />
            <input className="bp-time" type="text" value="16:00" readOnly />
            <span style={{margin: '0 4px', color: '#39313d', fontWeight: 600}}>-</span>
            <input className="bp-time" type="text" value="17:00" readOnly />
          </div>
          <div className="bp-row bp-row-monitor">
            <input type="checkbox" id="monitor" className="bp-checkbox"/>
            <label htmlFor="monitor">Нужен монитор?</label>
          </div>
          <div className="bp-row bp-row-friends">
            <label htmlFor="bp-friends">Добавить друзей:</label>
            <input id="bp-friends" className="bp-friends" type="email" placeholder="введи почту друга" />
          </div>
          <button type="submit" className="bp-submit">Выбрать место</button>
        </form>
      </main>
      <footer className="bp-footer">
        <div>
          <div>@MISIS_University 2025</div>
          <div>@itatmisis</div>
        </div>
        <div className="bp-footer-icons">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#111"/><path d="M19.6 10.2c.1-.3 0-.5-.4-.5h-1.3c-.4 0-.6.2-.7.4 0 0-.9 2.1-2.1 3.5-.4.4-.6.5-.8.5-.1 0-.3-.1-.3-.5v-3.4c0-.4-.1-.5-.4-.5h-2c-.2 0-.4.1-.4.4 0 .4.6.5.7 1.6v2.4c0 .5-.1.6-.3.6-.6 0-2.1-2.3-3-5.1-.2-.4-.3-.5-.7-.5H6.1c-.4 0-.5.2-.5.4 0 .4.6 2.4 2.7 5.1 1.4 1.8 3.3 2.8 5.1 2.8 1.1 0 1.2-.2 1.2-.5v-1.2c0-.4.1-.5.4-.5.2 0 .6.1 1.5 1.1 1 .9 1.2 1.3 1.8 1.3h1.3c.4 0 .6-.2.5-.5-.1-.3-.5-.8-1.1-1.5-.3-.4-.8-.9-.9-1.1-.2-.3-.1-.4 0-.7 0 0 1.3-1.8 1.5-2.4z" fill="#fff"/></svg>
          </a>
          <a href="https://t.me/itatmisis" target="_blank" rel="noopener noreferrer">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#111"/><path d="M20.7 9.1c.2-.8-.2-1.1-.9-.9l-11 4.2c-.8.3-.8.8-.1 1l2.8.9 1.1 3.3c.1.3.2.4.5.4.3 0 .4-.1.5-.4l1.1-2.1 2.3 1.7c.4.3.7.2.8-.3l1.9-7.8zm-2.3 1.4l-4.2 3.8c-.1.1-.2.2-.2.4l-.3 1.2-.7-2.1 5.4-2.1zm-3.2 5.2l.2-.8 1.7 1.3-1.9-.5z" fill="#fff"/></svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default BookPlace