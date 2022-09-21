import React from 'react';
import '../style/components/CommunityPage/Pagenation.css';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <section id='pagenation-nav'>
        {
          total !== 0 && 
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </button>
        }
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
          {
          total !== 0 && 
          <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </button>
          }
      </section>
    </>
  );
}

export default Pagination;
