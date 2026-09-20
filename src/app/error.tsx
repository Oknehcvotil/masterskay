"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="page-pad section not-found">
      <h1>Не вдалося завантажити сторінку</h1>
      <p>
        Спробуйте ще раз або зателефонуйте до майстерні за номером у шапці
        сайту.
      </p>
      <button type="button" className="button button-primary" onClick={reset}>
        Спробувати ще раз
      </button>
    </main>
  );
}
