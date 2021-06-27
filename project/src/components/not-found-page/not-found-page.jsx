import React from 'react';
import Header from '../header/header';

function NotFoundPage() {
  return (
    <div className="page">
      <Header />
      <main className="page__main" style={{textAlign: 'center'}}>
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную страницу</a>
      </main>
    </div>
  );
}

export default NotFoundPage;
